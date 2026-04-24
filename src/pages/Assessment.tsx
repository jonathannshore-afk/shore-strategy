import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Target, AlertCircle, Compass, CalendarCheck, RotateCcw } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Option {
  label: string;
  value: 1 | 2 | 3 | 4;
}
interface Question {
  id: string;
  dimension: "Strategy" | "Programs" | "Operations" | "Measurement";
  prompt: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "strategy_clarity",
    dimension: "Strategy",
    prompt: "How clearly is your partner strategy tied to your company's revenue plan?",
    options: [
      { label: "We don't have a documented partner strategy", value: 1 },
      { label: "There's a strategy, but it lives in a deck — not in the revenue plan", value: 2 },
      { label: "Partner targets are part of the annual plan", value: 3 },
      { label: "Partner ecosystem is a named pillar of the company strategy with board-level visibility", value: 4 },
    ],
  },
  {
    id: "partner_mix",
    dimension: "Strategy",
    prompt: "How intentional is your current partner mix (resellers, ISVs, GSIs, MSPs, tech partners)?",
    options: [
      { label: "We sign whoever shows interest", value: 1 },
      { label: "We have a few key partners but no segmentation", value: 2 },
      { label: "We segment partners by type and have differentiated motions", value: 3 },
      { label: "Each partner type has a tailored program, ICP, and revenue model", value: 4 },
    ],
  },
  {
    id: "program_design",
    dimension: "Programs",
    prompt: "How would you describe your partner program structure today?",
    options: [
      { label: "No formal program — ad hoc agreements", value: 1 },
      { label: "A basic tiered program exists but isn't actively managed", value: 2 },
      { label: "Tiered program with clear benefits, requirements, and enablement", value: 3 },
      { label: "Multi-track programs with co-sell, co-build, and co-market motions", value: 4 },
    ],
  },
  {
    id: "ops_motion",
    dimension: "Operations",
    prompt: "How well-instrumented is your partner operating motion (deal reg, PRM, enablement)?",
    options: [
      { label: "Mostly spreadsheets and email", value: 1 },
      { label: "We have a PRM but adoption is low", value: 2 },
      { label: "PRM is adopted; deal reg and enablement run on a cadence", value: 3 },
      { label: "Fully integrated PRM ↔ CRM with automated workflows and partner self-service", value: 4 },
    ],
  },
  {
    id: "sales_alignment",
    dimension: "Operations",
    prompt: "How aligned are your direct sales and partner teams?",
    options: [
      { label: "There's open friction or competition between them", value: 1 },
      { label: "They coexist but don't actively collaborate", value: 2 },
      { label: "Joint account planning and clear rules of engagement exist", value: 3 },
      { label: "Sales and partners run as one integrated GTM motion", value: 4 },
    ],
  },
  {
    id: "measurement",
    dimension: "Measurement",
    prompt: "How do you currently measure partner contribution to revenue?",
    options: [
      { label: "We don't measure it — or can't", value: 1 },
      { label: "We track partner-sourced bookings only", value: 2 },
      { label: "We track sourced + influenced + co-sell pipeline", value: 3 },
      { label: "Full attribution: sourced, influenced, co-sell, retention, attach, plus partner ROI", value: 4 },
    ],
  },
  {
    id: "revenue_share",
    dimension: "Measurement",
    prompt: "What % of your new ARR currently flows through partners?",
    options: [
      { label: "Less than 10%", value: 1 },
      { label: "10–25%", value: 2 },
      { label: "25–40%", value: 3 },
      { label: "More than 40%", value: 4 },
    ],
  },
];

interface Summary {
  headline: string;
  diagnosis: string;
  topGaps: { title: string; impact: string }[];
  nextMoves: string[];
  ninetyDayPriority: string;
  stage: string;
  overallScore: number;
  dimensionAverages: Record<string, number>;
}

const STAGE_DESCRIPTIONS: Record<string, string> = {
  Nascent: "Partner activity exists, but it's ad hoc. Strategy, programs, and instrumentation are still to be built.",
  Emerging: "Foundations are forming. Pockets of structure exist, but the ecosystem doesn't yet operate as a true revenue engine.",
  Scaling: "The motion works. Programs, ops, and measurement are in place — now the leverage is in optimization and depth.",
  Mature: "A high-performing ecosystem with integrated GTM. The work shifts to differentiation and compounding advantage.",
  "Best-in-Class": "Top-decile maturity. Partners are a defining pillar of the company's revenue and product strategy.",
};

const Assessment = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0); // 0..QUESTIONS.length = contact step, +1 = results
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [contact, setContact] = useState({ name: "", email: "", company: "", role: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [summary, setSummary] = useState<Summary | null>(null);

  const totalSteps = QUESTIONS.length + 1; // questions + contact
  const isContactStep = step === QUESTIONS.length;
  const isResultsStep = summary !== null;
  const currentQuestion = !isContactStep ? QUESTIONS[step] : null;
  const progress = isResultsStep ? 100 : Math.round((step / totalSteps) * 100);

  const handleAnswer = (value: number) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    setTimeout(() => setStep((s) => s + 1), 200);
  };

  const handleBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        answers: QUESTIONS.map((q) => ({
          questionId: q.id,
          dimension: q.dimension,
          value: answers[q.id],
          label: q.options.find((o) => o.value === answers[q.id])?.label ?? "",
        })),
        contact: {
          name: contact.name.trim() || undefined,
          email: contact.email.trim() || undefined,
          company: contact.company.trim() || undefined,
          role: contact.role.trim() || undefined,
        },
      };

      const res = await supabase.functions.invoke("generate-assessment", { body: payload });
      if (res.error) throw res.error;
      const data = res.data as { summary?: Summary; error?: string };
      if (data.error || !data.summary) throw new Error(data.error || "No summary returned");

      setSummary(data.summary);
    } catch (e) {
      console.error(e);
      toast({
        title: "Couldn't generate your assessment",
        description: e instanceof Error ? e.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setContact({ name: "", email: "", company: "", role: "" });
    setSummary(null);
  };

  return (
    <Layout>
      <SEO
        title="Partner Ecosystem Maturity Assessment"
        description="A 2-minute diagnostic for CROs and VPs of Partnerships. See where your partner ecosystem sits on the maturity curve and what's holding it back."
        path="/assessment"
      />

      {/* Hero */}
      <section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Diagnostic</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Partner Ecosystem <span className="text-gold">Maturity Assessment</span>
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/70 max-w-2xl">
            Seven questions. Two minutes. A personalized read on where your partner ecosystem stands, the gaps holding it back, and the moves that unlock the next stage.
          </p>
        </div>
      </section>

      {/* Quiz / Results */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream min-h-[60vh]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {!isResultsStep && (
              <>
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span>{isContactStep ? "Almost done" : `Question ${step + 1} of ${QUESTIONS.length}`}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-1 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                {currentQuestion && (
                  <div className="bg-card border border-border rounded-lg p-6 md:p-10 animate-fade-in-up">
                    <p className="text-gold font-body text-xs uppercase tracking-[0.2em] mb-3">
                      {currentQuestion.dimension}
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
                      {currentQuestion.prompt}
                    </h2>
                    <div className="space-y-3">
                      {currentQuestion.options.map((opt) => {
                        const selected = answers[currentQuestion.id] === opt.value;
                        return (
                          <button
                            key={opt.value}
                            onClick={() => handleAnswer(opt.value)}
                            className={`w-full text-left px-5 py-4 rounded border transition-all font-body text-sm md:text-base ${
                              selected
                                ? "border-gold bg-gold/10 text-foreground"
                                : "border-border bg-background hover:border-gold/50 hover:bg-gold/5 text-foreground/80"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  selected ? "border-gold bg-gold" : "border-border"
                                }`}
                              >
                                {selected && <CheckCircle2 size={14} className="text-accent-foreground" />}
                              </span>
                              <span>{opt.label}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Contact step */}
                {isContactStep && (
                  <div className="bg-card border border-border rounded-lg p-6 md:p-10 animate-fade-in-up">
                    <p className="text-gold font-body text-xs uppercase tracking-[0.2em] mb-3">Optional</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      Want this tailored to your context?
                    </h2>
                    <p className="font-body text-muted-foreground mb-6 text-sm md:text-base">
                      Add a few details for a sharper read. Skip if you'd rather stay anonymous — your results will still appear on the next screen either way.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="font-body text-sm font-medium text-foreground mb-2 block">Name</label>
                        <input
                          type="text"
                          value={contact.name}
                          onChange={(e) => setContact({ ...contact, name: e.target.value })}
                          maxLength={100}
                          className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
                        <input
                          type="email"
                          value={contact.email}
                          onChange={(e) => setContact({ ...contact, email: e.target.value })}
                          maxLength={255}
                          className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium text-foreground mb-2 block">Company</label>
                        <input
                          type="text"
                          value={contact.company}
                          onChange={(e) => setContact({ ...contact, company: e.target.value })}
                          maxLength={100}
                          className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium text-foreground mb-2 block">Role</label>
                        <input
                          type="text"
                          value={contact.role}
                          onChange={(e) => setContact({ ...contact, role: e.target.value })}
                          maxLength={100}
                          className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="e.g. CRO, VP Partnerships"
                        />
                      </div>
                    </div>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={18} /> Generating your assessment…
                        </>
                      ) : (
                        <>
                          See My Results <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Back */}
                {step > 0 && !isSubmitting && (
                  <button
                    onClick={handleBack}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                )}
              </>
            )}

            {isResultsStep && summary && (
              <div className="space-y-8 animate-fade-in-up">
                {/* Stage card */}
                <div className="bg-navy text-primary-foreground rounded-lg p-8 md:p-10 border border-gold/30">
                  <p className="text-gold font-body text-xs uppercase tracking-[0.2em] mb-3">Your Maturity Stage</p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-gold mb-3">
                    {summary.stage}
                  </h2>
                  <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                    {STAGE_DESCRIPTIONS[summary.stage] ?? ""}
                  </p>

                  {/* Dimension scores */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-primary-foreground/15">
                    {Object.entries(summary.dimensionAverages).map(([dim, score]) => (
                      <div key={dim}>
                        <p className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-1">
                          {dim}
                        </p>
                        <p className="font-display text-2xl font-bold text-primary-foreground">
                          {score.toFixed(1)}<span className="text-primary-foreground/40 text-base">/4</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Headline + diagnosis */}
                <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-snug">
                    {summary.headline}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {summary.diagnosis}
                  </p>
                </div>

                {/* Top gaps */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="text-gold" size={20} />
                    <h3 className="font-display text-xl font-bold text-foreground">Top Gaps Holding You Back</h3>
                  </div>
                  <div className="space-y-3">
                    {summary.topGaps.map((gap, i) => (
                      <div key={i} className="bg-card border border-border rounded-lg p-5">
                        <div className="flex items-start gap-3">
                          <span className="font-display font-bold text-gold text-2xl leading-none">{i + 1}</span>
                          <div>
                            <h4 className="font-display font-semibold text-foreground mb-1">{gap.title}</h4>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">{gap.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next moves */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Compass className="text-gold" size={20} />
                    <h3 className="font-display text-xl font-bold text-foreground">Next Moves to Unlock the Next Stage</h3>
                  </div>
                  <ul className="space-y-3">
                    {summary.nextMoves.map((move, i) => (
                      <li key={i} className="flex items-start gap-3 bg-card border border-border rounded-lg p-5">
                        <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                        <span className="font-body text-foreground/85 leading-relaxed">{move}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 90 day */}
                <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="text-gold" size={20} />
                    <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-wide">
                      The Next 90 Days
                    </h3>
                  </div>
                  <p className="font-body text-foreground leading-relaxed text-base md:text-lg">
                    {summary.ninetyDayPriority}
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-navy rounded-lg p-8 md:p-10 text-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                    Want to Pressure-Test This Together?
                  </h3>
                  <p className="font-body text-primary-foreground/70 mb-6 max-w-xl mx-auto">
                    A 25-minute conversation to walk through your results, sharpen the diagnosis, and discuss what an engagement could look like. No prep, no commitment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
                    >
                      <CalendarCheck size={18} /> Book a Conversation
                    </Link>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
                    >
                      <RotateCcw size={16} /> Retake Assessment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Assessment;