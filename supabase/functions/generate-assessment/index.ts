import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface Answer {
  questionId: string;
  dimension: string;
  value: number; // 1-4
  label: string;
}

interface RequestBody {
  answers: Answer[];
  contact?: {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
  };
}

const STAGES = [
  { name: "Nascent", min: 1.0, max: 1.75 },
  { name: "Emerging", min: 1.75, max: 2.5 },
  { name: "Scaling", min: 2.5, max: 3.25 },
  { name: "Mature", min: 3.25, max: 3.75 },
  { name: "Best-in-Class", min: 3.75, max: 4.01 },
];

function getStage(score: number): string {
  return STAGES.find((s) => score >= s.min && score < s.max)?.name ?? "Emerging";
}

function clampString(s: string | undefined, max: number): string | null {
  if (!s) return null;
  const t = s.trim();
  if (!t) return null;
  return t.slice(0, max);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: RequestBody = await req.json();
    const { answers, contact } = body;

    if (!Array.isArray(answers) || answers.length === 0 || answers.length > 20) {
      return new Response(JSON.stringify({ error: "Invalid answers" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    for (const a of answers) {
      if (
        typeof a.questionId !== "string" ||
        typeof a.dimension !== "string" ||
        typeof a.value !== "number" ||
        a.value < 1 ||
        a.value > 4
      ) {
        return new Response(JSON.stringify({ error: "Malformed answer" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Score by dimension
    const dimScores: Record<string, { sum: number; count: number }> = {};
    for (const a of answers) {
      if (!dimScores[a.dimension]) dimScores[a.dimension] = { sum: 0, count: 0 };
      dimScores[a.dimension].sum += a.value;
      dimScores[a.dimension].count += 1;
    }
    const dimensionAverages: Record<string, number> = {};
    for (const [d, v] of Object.entries(dimScores)) {
      dimensionAverages[d] = +(v.sum / v.count).toFixed(2);
    }
    const overallScore = +(
      answers.reduce((s, a) => s + a.value, 0) / answers.length
    ).toFixed(2);
    const stage = getStage(overallScore);

    // Build prompt for AI
    const dimSummary = Object.entries(dimensionAverages)
      .map(([d, s]) => `- ${d}: ${s}/4`)
      .join("\n");
    const answerSummary = answers
      .map((a) => `- [${a.dimension}] ${a.label} → score ${a.value}/4`)
      .join("\n");

    const systemPrompt = `You are a senior partner ecosystem strategist advising a CRO or VP of Partnerships. Your tone is direct, executive, insight-dense — never generic. You speak the language of pipeline, attach rates, co-sell, source/influence, and partner-led growth. Avoid clichés. Avoid filler. Every sentence earns its place.`;

    const userPrompt = `A leader just completed a Partner Ecosystem Maturity Assessment.

Overall maturity stage: ${stage} (score ${overallScore}/4)

Dimension scores:
${dimSummary}

Their answers:
${answerSummary}

${contact?.role ? `Their role: ${contact.role}` : ""}
${contact?.company ? `Company: ${contact.company}` : ""}

Generate a personalized assessment using the provided tool. Be specific to their answers — reference their actual gaps. Avoid generic advice.`;

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "render_assessment",
              description: "Render the personalized partner ecosystem maturity assessment.",
              parameters: {
                type: "object",
                properties: {
                  headline: {
                    type: "string",
                    description: "One sharp sentence summarizing where their program stands. Max 180 chars.",
                  },
                  diagnosis: {
                    type: "string",
                    description: "2-3 sentences diagnosing their current state. Reference specifics from their answers. Max 600 chars.",
                  },
                  topGaps: {
                    type: "array",
                    description: "The 2-3 most consequential gaps holding them back, in priority order.",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string", description: "Short gap title (max 60 chars)." },
                        impact: { type: "string", description: "1 sentence on why this gap matters at their stage." },
                      },
                      required: ["title", "impact"],
                      additionalProperties: false,
                    },
                    minItems: 2,
                    maxItems: 3,
                  },
                  nextMoves: {
                    type: "array",
                    description: "3 concrete moves to unlock the next maturity stage. Specific, executable, ordered by leverage.",
                    items: { type: "string" },
                    minItems: 3,
                    maxItems: 3,
                  },
                  ninetyDayPriority: {
                    type: "string",
                    description: "The single most important thing to do in the next 90 days. 1-2 sentences.",
                  },
                },
                required: ["headline", "diagnosis", "topGaps", "nextMoves", "ninetyDayPriority"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "render_assessment" } },
      }),
    });

    if (!aiResp.ok) {
      if (aiResp.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (aiResp.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please contact the site owner." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const txt = await aiResp.text();
      console.error("AI gateway error:", aiResp.status, txt);
      return new Response(JSON.stringify({ error: "AI generation failed" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiJson = await aiResp.json();
    const toolCall = aiJson?.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall?.function?.arguments) {
      console.error("No tool call returned", JSON.stringify(aiJson));
      return new Response(JSON.stringify({ error: "AI returned malformed response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let parsed;
    try {
      parsed = JSON.parse(toolCall.function.arguments);
    } catch (e) {
      console.error("Tool args parse error", e);
      return new Response(JSON.stringify({ error: "AI returned invalid JSON" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const summary = {
      ...parsed,
      stage,
      overallScore,
      dimensionAverages,
    };

    // Persist (best-effort)
    try {
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      );
      await supabase.from("maturity_assessments").insert({
        name: clampString(contact?.name, 200),
        email: clampString(contact?.email, 255),
        company: clampString(contact?.company, 200),
        role: clampString(contact?.role, 100),
        answers: { items: answers, dimensionAverages, overallScore },
        stage,
        score: overallScore,
        ai_summary: parsed,
      });
    } catch (e) {
      console.error("Persist error (non-fatal):", e);
    }

    return new Response(JSON.stringify({ summary }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Handler error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});