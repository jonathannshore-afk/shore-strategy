import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// BD Command Center (external Supabase project) — used to push scored leads
// into the BD pipeline. Anon key only has INSERT permission on scored_leads.
const BD_SUPABASE_URL = "https://nlfkkdgwlgcgomcnkjua.supabase.co";
const BD_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sZmtrZGd3bGdjZ29tY25ranVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMTQ5OTMsImV4cCI6MjA5MTY5MDk5M30.tD2ikxZuz2Zv4IejyfNoA3-9B9zNSxEtOwOrwX0kh6Q";

const SYSTEM_PROMPT = `You are a senior B2B sales qualifier scoring inbound leads for Jonathan Shore, a Partner Ecosystem Strategist who works with B2B SaaS / tech companies on partnership programs (FTE engagements and fractional advisory).

Score each lead on TWO axes, each 0-50:

FIT (0-50): How well does this person/company match the ICP?

High fit (40-50):
- Title: VP/SVP/Chief of Partnerships, Alliances, Channel, BD, Ecosystem; CRO; Chief Partner Officer
- Company: B2B SaaS / tech, Series B+ or PE-backed, ~100-2000 employees
- Indicates partnerships is a strategic priority

Medium fit (20-39):
- Founder/CEO at sub-200 person SaaS who sounds serious about partnerships
- Senior partnerships manager or director at a fitting company
- Adjacent industries (fintech, devtools, vertical SaaS)

Low fit (0-19):
- Agencies pitching services TO Jonathan
- Recruiters
- Students or job seekers
- Vendors selling tools (CRM, PRM, sales tooling)
- Generic "let's connect / explore synergies" with no business context
- Consumer companies, e-commerce brands, non-tech

INTENT (0-50): How serious and specific is the ask?

High intent (40-50):
- Names a specific problem or trigger event (e.g. "lost our head of partnerships", "launching a new channel program")
- Mentions timeline, budget, or named project
- References Shore Strategy content/pages specifically
- Asks about a specific engagement model (FTE vs fractional)
- Clear next-step ask (intro call, proposal, assessment)

Medium intent (20-39):
- Specific problem area named but no timeline
- Asks thoughtful questions about Jonathan's approach
- Provides company context

Low intent (0-19):
- Vague "interested in your services"
- No company context, no problem named
- Wall of unrelated text
- Just collecting info / window-shopping

Total score = fit + intent (0-100). Tier:
- 80-100: hot
- 50-79: warm
- 0-49: cold

Be calibrated and a little skeptical. Most cold-inbound leads are warm at best. Reserve "hot" for leads where the pattern is unmistakable.

Return your assessment via the score_lead function.`;

const TOOL_SCHEMA = {
  type: "function",
  function: {
    name: "score_lead",
    description:
      "Return a structured fit + intent score and reasoning for an inbound lead.",
    parameters: {
      type: "object",
      properties: {
        fit_score: {
          type: "integer",
          minimum: 0,
          maximum: 50,
          description: "How well the lead matches the ICP (0-50).",
        },
        intent_score: {
          type: "integer",
          minimum: 0,
          maximum: 50,
          description: "How serious and specific the ask is (0-50).",
        },
        rationale: {
          type: "string",
          description:
            "1-3 sentence plain-English explanation of the score. Concrete, not generic.",
        },
        signals: {
          type: "array",
          items: { type: "string" },
          description:
            "Bulleted list of the specific signals that drove the score (3-6 items).",
        },
        suggested_next_step: {
          type: "string",
          description:
            "1-2 sentences advising Jonathan how to handle this lead — what to lead with, urgency, what to offer.",
        },
      },
      required: [
        "fit_score",
        "intent_score",
        "rationale",
        "signals",
        "suggested_next_step",
      ],
      additionalProperties: false,
    },
  },
};

function tierFor(score: number): "hot" | "warm" | "cold" {
  if (score >= 80) return "hot";
  if (score >= 50) return "warm";
  return "cold";
}

async function callAI(userPayload: string) {
  const apiKey = Deno.env.get("LOVABLE_API_KEY");
  if (!apiKey) throw new Error("LOVABLE_API_KEY not configured");

  const resp = await fetch(
    "https://ai.gateway.lovable.dev/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPayload },
        ],
        tools: [TOOL_SCHEMA],
        tool_choice: { type: "function", function: { name: "score_lead" } },
      }),
    },
  );

  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`AI gateway ${resp.status}: ${body.slice(0, 300)}`);
  }

  const data = await resp.json();
  const toolCall = data?.choices?.[0]?.message?.tool_calls?.[0];
  if (!toolCall?.function?.arguments) {
    throw new Error("AI returned no tool call");
  }
  return JSON.parse(toolCall.function.arguments);
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

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const submissionId = String(payload?.submissionId ?? "").trim();
  if (!submissionId) {
    return new Response(JSON.stringify({ error: "submissionId required" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Anti-abuse: validate submission actually exists in our DB.
  const { data: submission, error: lookupErr } = await supabase
    .from("contact_submissions")
    .select("id, name, email, company, message, created_at")
    .eq("id", submissionId)
    .single();
  if (lookupErr || !submission) {
    console.error("Submission not found:", submissionId, lookupErr);
    return new Response(JSON.stringify({ error: "Submission not found" }), {
      status: 404,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { name, email, company, message } = submission;

  // 1. Score with AI (best-effort)
  let scoring: {
    fit_score: number | null;
    intent_score: number | null;
    rationale: string;
    signals: string[];
    suggested_next_step: string;
    score: number | null;
    tier: "hot" | "warm" | "cold" | "unscored";
  } = {
    fit_score: null,
    intent_score: null,
    rationale: "AI scoring unavailable — please review manually.",
    signals: [],
    suggested_next_step: "",
    score: null,
    tier: "unscored",
  };

  try {
    const userPayload = JSON.stringify({
      name,
      email,
      company: company ?? null,
      message,
    });
    const ai = await callAI(userPayload);
    const fit = Math.max(0, Math.min(50, Number(ai.fit_score) || 0));
    const intent = Math.max(0, Math.min(50, Number(ai.intent_score) || 0));
    const total = fit + intent;
    scoring = {
      fit_score: fit,
      intent_score: intent,
      rationale: String(ai.rationale ?? ""),
      signals: Array.isArray(ai.signals)
        ? ai.signals.map((s: any) => String(s)).slice(0, 8)
        : [],
      suggested_next_step: String(ai.suggested_next_step ?? ""),
      score: total,
      tier: tierFor(total),
    };
  } catch (e) {
    console.error("AI scoring failed:", e);
  }

  // 2. Push to BD Command Center (best-effort, non-blocking on failure)
  let bdPushStatus: "success" | "failed" | "skipped" = "skipped";
  try {
    const bd = createClient(BD_SUPABASE_URL, BD_SUPABASE_ANON_KEY);
    const { error: bdErr } = await bd.from("scored_leads").insert({
      source: "shore_strategy_contact",
      source_id: submissionId,
      name,
      email,
      company: company ?? null,
      raw_message: message,
      score: scoring.score,
      tier: scoring.tier,
      fit_score: scoring.fit_score,
      intent_score: scoring.intent_score,
      rationale: scoring.rationale,
      signals: scoring.signals,
      suggested_next_step: scoring.suggested_next_step,
      status: "new",
    });
    if (bdErr) {
      console.error("BD push failed:", bdErr);
      bdPushStatus = "failed";
    } else {
      bdPushStatus = "success";
    }
  } catch (e) {
    console.error("BD push exception:", e);
    bdPushStatus = "failed";
  }

  // 3. Email alert to operator (best-effort)
  try {
    const recipient = Deno.env.get("LEAD_ALERT_EMAIL");
    if (!recipient) {
      console.warn(
        "LEAD_ALERT_EMAIL not set — skipping operator email alert",
      );
    } else {
      const { error: emailErr } = await supabase.functions.invoke(
        "send-transactional-email",
        {
          body: {
            templateName: "lead-score-alert",
            recipientEmail: recipient,
            idempotencyKey: `lead-score-${submissionId}`,
            templateData: {
              leadName: name,
              leadEmail: email,
              leadCompany: company ?? null,
              rawMessage: message,
              score: scoring.score,
              tier: scoring.tier,
              fitScore: scoring.fit_score,
              intentScore: scoring.intent_score,
              rationale: scoring.rationale,
              signals: scoring.signals,
              suggestedNextStep: scoring.suggested_next_step,
              bdPushStatus,
            },
          },
        },
      );
      if (emailErr) console.error("Lead alert email invoke error:", emailErr);
    }
  } catch (e) {
    console.error("Lead alert email failed:", e);
  }

  return new Response(
    JSON.stringify({
      ok: true,
      score: scoring.score,
      tier: scoring.tier,
      bdPushStatus,
    }),
    {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});