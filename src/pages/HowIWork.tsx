import { Link } from "react-router-dom";
import {
  CalendarCheck,
  CheckCircle,
  ClipboardCheck,
  Layers,
  Rocket,
  Search,
  Target,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const pillars = [
  {
    step: "01",
    icon: Search,
    title: "Ecosystem Assessment & Architecture",
    description:
      "I start by mapping the full partner landscape — current partners, white space, competitive dynamics, and internal readiness. This diagnostic uncovers where the real value is hiding and what's blocking it.",
    outcomes: [
      "Partner ecosystem maturity assessment",
      "Coverage gap analysis across routes-to-market",
      "Internal alignment and readiness evaluation",
    ],
  },
  {
    step: "02",
    icon: Target,
    title: "Partner Program Design",
    description:
      "I design tiered partner programs with clear value exchange — certification frameworks, incentive models, joint value propositions, and engagement rules that attract and retain the right partners.",
    outcomes: [
      "Tiered program structure with certification paths",
      "Incentive and margin models aligned to growth goals",
      "Partner segmentation and ideal partner profiles",
    ],
  },
  {
    step: "03",
    icon: Layers,
    title: "Routes-to-Market Strategy",
    description:
      "Whether it's ISV, SI, VAR, GSI, or co-sell motions — I define which routes-to-market will drive the most leverage for your business and build the operational playbooks to launch them.",
    outcomes: [
      "Route-to-market prioritization framework",
      "Co-sell and referral motion design",
      "Joint GTM plans with key partners",
    ],
  },
  {
    step: "04",
    icon: ClipboardCheck,
    title: "Operational Execution",
    description:
      "Strategy without execution is a slide deck. I build the operating cadences, enablement frameworks, deal registration processes, and partner engagement rhythms that turn strategy into pipeline.",
    outcomes: [
      "Partner engagement and QBR cadences",
      "Deal registration and conflict resolution processes",
      "Enablement and onboarding playbooks",
    ],
  },
  {
    step: "05",
    icon: Rocket,
    title: "Scale & Optimization",
    description:
      "Once the motions are running, I instrument them — performance analytics, coverage models, partner health scoring, and continuous program iteration to compound results quarter over quarter.",
    outcomes: [
      "Partner performance scorecards and analytics",
      "Coverage model optimization",
      "Continuous program iteration framework",
    ],
  },
];

const first90Days = [
  {
    phase: "Days 1–30",
    title: "Listen & Assess",
    items: [
      "Stakeholder interviews across Sales, Product, Marketing, and existing partners",
      "Full ecosystem audit — partner landscape, program maturity, pipeline contribution",
      "Identify quick wins and structural gaps",
      "Deliver initial assessment report with prioritized recommendations",
    ],
  },
  {
    phase: "Days 31–60",
    title: "Design & Align",
    items: [
      "Draft partner strategy and routes-to-market framework",
      "Design program structure — tiers, incentives, enablement",
      "Align executive stakeholders on investment priorities and success metrics",
      "Begin key partner engagement and relationship building",
    ],
  },
  {
    phase: "Days 61–90",
    title: "Launch & Operationalize",
    items: [
      "Launch initial partner motions — co-sell plays, deal registration, onboarding",
      "Stand up operational cadences — QBRs, pipeline reviews, partner scorecards",
      "Deliver 90-day progress report with go-forward roadmap",
      "Transition from assessment mode to execution mode",
    ],
  },
];

const Divider = () => (
  <div className="bg-cream">
    <div className="container px-6 md:px-12 lg:px-24 flex items-center gap-4 py-2">
      <span className="block h-px flex-1 bg-gold/40" />
      <span className="block w-2 h-2 rotate-45 bg-gold/60" />
      <span className="block h-px flex-1 bg-gold/40" />
    </div>
  </div>
);

const HowIWork = () => {
  return (
    <Layout>
      <SEO
        title="How I Work | Jonathan Shore"
        description="The delivery method, the first 90 days, and the diagnostic on-ramp. A transparent look at how Jonathan Shore runs partner ecosystem engagements."
        path="/how-i-work"
      />

      {/* Hero */}
      <section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">How I Work</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            From <span className="text-gold">Strategy</span> to Execution
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            The delivery method, the first 90 days, and the on-ramp engagement — a transparent look at what working together actually looks like.
          </p>
        </div>
      </section>

      {/* Section 1: How I Deliver — 5 Pillars */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Method</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">How I Deliver</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl mx-auto">
              Five pillars that guide every engagement — informed by 15+ years of building partner ecosystems at enterprise scale.
            </p>
          </div>
          <div className="space-y-4">
            {pillars.map((p) => (
              <div
                key={p.step}
                className="group bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all p-6 md:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="font-display text-3xl md:text-4xl font-bold text-gold/20">{p.step}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p.icon className="text-gold shrink-0" size={22} strokeWidth={1.5} />
                      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                        {p.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                      {p.description}
                    </p>
                    <ul className="space-y-1.5">
                      {p.outcomes.map((o, j) => (
                        <li key={j} className="font-body text-sm text-foreground/75 flex gap-2">
                          <span className="text-gold mt-0.5 shrink-0">→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Section 2: First 90 Days */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Cadence</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The First 90 Days
            </h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl mx-auto">
              A structured framework for how every engagement unfolds — from day one to measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {first90Days.map((phase) => (
              <div
                key={phase.phase}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <p className="font-body text-xs text-gold font-semibold uppercase tracking-[0.15em] mb-1">
                  {phase.phase}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <CheckCircle className="text-gold shrink-0 mt-0.5" size={14} strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Section 3: Diagnostic */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Start Here</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The Partner Ecosystem Diagnostic
            </h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl mx-auto">
              A fixed-scope, fixed-fee engagement designed to give you a board-ready view of your partner ecosystem in 30 days.
            </p>
          </div>
          <div className="bg-card rounded-lg border-2 border-gold/40 shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-body text-xs text-gold font-semibold uppercase tracking-wider mb-3">What You Get</p>
                <ul className="space-y-2.5">
                  {[
                    "Full ecosystem audit (partners, programs, pipeline contribution)",
                    "Competitive & routes-to-market benchmark",
                    "Prioritized 12-month roadmap with investment model",
                    "Board-ready findings deck + 60-min executive readout",
                  ].map((item) => (
                    <li key={item} className="font-body text-sm text-foreground/80 leading-relaxed flex gap-2">
                      <span className="text-gold mt-1 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-body text-xs text-gold font-semibold uppercase tracking-wider mb-3">The Details</p>
                <ul className="space-y-2.5">
                  {[
                    "30 days, end to end",
                    "Fixed fee — no scope creep, no surprises",
                    "Direct access to me — not a junior team",
                    "Natural on-ramp to fractional or project work (optional)",
                  ].map((item) => (
                    <li key={item} className="font-body text-sm text-foreground/80 leading-relaxed flex gap-2">
                      <span className="text-gold mt-1 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
              >
                <CalendarCheck size={16} /> Book a Scoping Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-14 md:px-12 lg:px-24 lg:py-16 bg-navy">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Ready to See What This Looks Like for You?
          </h2>
          <p className="font-body text-primary-foreground/70 leading-relaxed mb-6">
            Every engagement starts with understanding where you are today and where you need to go.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            <CalendarCheck size={18} /> Book a Scoping Call
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HowIWork;