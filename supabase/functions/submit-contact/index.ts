import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const MAX_REQUESTS = 5;
const WINDOW_MINUTES = 60;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  // Get client IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";

  try {
    // Parse and validate input
    const body = await req.json();
    const { name, email, company, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return new Response(JSON.stringify({ error: "Invalid name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!email || typeof email !== "string" || !/^[^@]+@[^@]+\.[^@]+$/.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 2000) {
      return new Response(JSON.stringify({ error: "Invalid message" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (company && (typeof company !== "string" || company.length > 100)) {
      return new Response(JSON.stringify({ error: "Invalid company" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Check rate limit
    const windowStart = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();

    const { data: existing } = await supabase
      .from("rate_limits")
      .select("request_count, window_start")
      .eq("ip_address", ip)
      .eq("endpoint", "contact")
      .single();

    if (existing) {
      const isWithinWindow = new Date(existing.window_start) > new Date(windowStart);
      if (isWithinWindow && existing.request_count >= MAX_REQUESTS) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      if (isWithinWindow) {
        await supabase
          .from("rate_limits")
          .update({ request_count: existing.request_count + 1 })
          .eq("ip_address", ip)
          .eq("endpoint", "contact");
      } else {
        // Reset window
        await supabase
          .from("rate_limits")
          .update({ request_count: 1, window_start: new Date().toISOString() })
          .eq("ip_address", ip)
          .eq("endpoint", "contact");
      }
    } else {
      await supabase.from("rate_limits").insert({
        ip_address: ip,
        endpoint: "contact",
        request_count: 1,
        window_start: new Date().toISOString(),
      });
    }

    // Insert contact submission using service role (bypasses RLS)
    const { error } = await supabase.from("contact_submissions").insert({
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || null,
      message: message.trim(),
    });

    if (error) throw error;

    // Fire-and-forget Slack notification (never blocks the response)
    try {
      const supaUrl = Deno.env.get("SUPABASE_URL")!;
      const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const text = `:envelope_with_arrow: *New contact form submission*`;
      const blocks = [
        { type: "header", text: { type: "plain_text", text: "New contact submission" } },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${name.trim()}` },
            { type: "mrkdwn", text: `*Email:*\n${email.trim()}` },
            { type: "mrkdwn", text: `*Company:*\n${company?.trim() || "—"}` },
          ],
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Message:*\n${message.trim().slice(0, 2900)}` },
        },
      ];
      fetch(`${supaUrl}/functions/v1/notify-slack`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${serviceKey}`,
        },
        body: JSON.stringify({ text, blocks }),
      }).catch((e) => console.error("Slack notify (contact) failed:", e));
    } catch (e) {
      console.error("Slack notify dispatch error:", e);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact submission error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
