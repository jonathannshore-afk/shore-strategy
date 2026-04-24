// Shared Slack notification helper.
// Posts a formatted message to the configured Slack channel via the Lovable connector gateway.
// Invoked internally by other edge functions (submit-contact, generate-assessment) — never from the browser.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/slack/api";
const DEFAULT_CHANNEL = "#leads";

interface NotifyBody {
  channel?: string;
  text: string;
  blocks?: unknown[];
  username?: string;
  icon_emoji?: string;
}

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

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const SLACK_API_KEY = Deno.env.get("SLACK_API_KEY");

  if (!LOVABLE_API_KEY || !SLACK_API_KEY) {
    console.error("Slack notify: missing credentials", {
      lovable: !!LOVABLE_API_KEY,
      slack: !!SLACK_API_KEY,
    });
    return new Response(
      JSON.stringify({ error: "Slack not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  let body: NotifyBody;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (!body.text || typeof body.text !== "string") {
    return new Response(JSON.stringify({ error: "text is required" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const payload: Record<string, unknown> = {
    channel: body.channel ?? DEFAULT_CHANNEL,
    text: body.text,
    username: body.username ?? "Shore Strategy",
    icon_emoji: body.icon_emoji ?? ":anchor:",
  };
  if (body.blocks) payload.blocks = body.blocks;

  try {
    const resp = await fetch(`${GATEWAY_URL}/chat.postMessage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": SLACK_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();

    if (!resp.ok || data?.ok === false) {
      console.error("Slack postMessage failed", resp.status, data);
      return new Response(
        JSON.stringify({ error: data?.error ?? "Slack API error", status: resp.status }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ ok: true, ts: data.ts }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Slack notify error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});