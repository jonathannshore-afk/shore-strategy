import { Link } from "react-router-dom";
import { CalendarCheck, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FlipCard from "@/components/FlipCard";

const pillars = [
  {
    step: "01",
    title: "Ecosystem Assessment & Architecture",
    description:
      "I start by mapping your full partner landscape — uncovering where the real opportunity is hiding and what's blocking growth.",
    outcome:
      "You get a clear picture of where your ecosystem stands today before we touch anything.",
    deliverables: [
      "Partner ecosystem maturity assessment and competitive benchmarking",
      "Coverage gap analysis across routes-to-market",
      "ROE, attribution, and KPI development",
    ],
  },
  {
    step: "02",
    title: "Partner Program Design",
    description:
      "I design programs built for how your business actually sells — tiered, incentivized, and structured to attract and retain the right partners.",
    outcome:
      "You get a program architecture that partners want to join and that sales teams actually trust.",
    deliverables: [
      "Tiered program architecture with incentive alignment and MDF strategy",
      "Commercial contracts and legal frameworks",
      "Points vs. performance scoring models",
    ],
  },
  {
    step: "03",
    title: "Routes-to-Market Strategy",
    description:
      "I define which partner motions — ISV, SI, VAR, GSI, co-sell — will drive the most leverage for your business and build the playbooks to launch them.",
    outcome:
      "You get clarity on where to focus and the operational playbooks to execute.",
    deliverables: [
      "Archetypes evaluation, gap assessment, and prioritization",
      "Selling motion design and implementation",
      "Investment modeling and business case",
    ],
  },
  {
    step: "04",
    title: "Organizational Design & Enablement",
    description:
      "I align your people, structure, and incentives to make the partner motion work — because the best program fails without the right org behind it.",
    outcome:
      "You get the organizational infrastructure to run and scale a partner business.",
    deliverables: [
      "Partner org modernization, role design, and hiring plan",
      "Compensation plan strategy, territory carving, and quota development",
      "Operating model, governance design, and AI & automation integration",
    ],
  },
  {
    step: "05",
    title: "Operational Execution",
    description:
      "Strategy without execution is a slide deck. I build the operating cadences, enablement frameworks, and deal registration processes that turn strategy into pipeline.",
    outcome: "You get a partner program that actually runs.",
    deliverables: [
      "RoB implementation, QBR development, and forecasting cadence",
      "Annual strategic joint business plans and executive engagement",
      "Enablement, onboarding playbooks, and deal registration",
    ],
  },
  {
    step: "06",
    title: "Scale & Optimization",
    description:
      "Once the motions are running I instrument them — performance analytics, coverage models, and continuous iteration that compounds results quarter over quarter.",
    outcome:
      "You get full visibility into what's working and a system that keeps improving.",
    deliverables: [
      "Partner performance scorecards and analytics",
      "Annual planning evaluation and best practices",
      "Coverage model optimization and continuous iteration framework",
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
    ],
    deliverable: "Initial assessment report with prioritized recommendations.",
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
    deliverable: "Partner strategy, program design, and aligned stakeholder roadmap.",
  },
  {
    phase: "Days 61–90",
    title: "Launch & Operationalize",
    items: [
      "Launch initial partner motions — co-sell plays, deal registration, onboarding",
      "Stand up operational cadences — QBRs, pipeline reviews, partner scorecards",
      "Transition from assessment mode to execution mode",
    ],
    deliverable: "Working partner motion with 90-day progress report and go-forward plan.",
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
      <SEOHead
        title="How I Work | Jonathan Shore"
        description="The delivery method, the first 90 days, and the diagnostic on-ramp. A transparent look at how Jonathan Shore runs partner ecosystem engagements."
        canonical="/how-i-work"
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

      {/* Section 1: How I Deliver — 6 Stage Flip Cards */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Method</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">How I Deliver</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
              Six sequential stages that guide every engagement — informed by 15+ years of building partner ecosystems at enterprise scale.
            </p>
          </div>

          {/* Sequential progression indicator */}
          <div className="hidden md:flex flex-col gap-2 max-w-5xl mx-auto mb-6">
            {[["01", "02", "03"], ["04", "05", "06"]].map((row, rIdx) => (
              <div key={rIdx} className="flex items-center justify-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-gold/70">
                {row.map((num, i) => (
                  <span key={num} className="flex items-center gap-3">
                    <span className="font-display font-semibold text-gold">{num}</span>
                    {i < row.length - 1 && <span className="text-gold/50">→</span>}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[380px]">
            {pillars.map((p) => (
              <FlipCard
                key={p.step}
                front={
                  <>
                    <p className="font-body text-xs text-gold font-semibold uppercase tracking-[0.2em] mb-2">
                      Stage {p.step}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {p.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                      {p.description}
                    </p>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider">
                      {p.outcome}
                    </p>
                  </>
                }
                back={
                  <>
                    <p className="font-body text-xs text-primary-foreground/50 mb-1">Stage {p.step}</p>
                    <h3 className="font-display text-base font-semibold text-primary-foreground mb-3">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-2">
                      What You Get
                    </p>
                    <ul className="space-y-1.5">
                      {p.deliverables.map((item, i) => (
                        <li key={i} className="font-body text-xs text-primary-foreground/80 flex gap-2 leading-relaxed">
                          <span className="text-gold shrink-0">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Section 2: First 90 Days */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container max-w-4xl">
          <div className="mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Cadence</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The First 90 Days
            </h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
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
                <p className="mt-4 pt-4 border-t border-border font-body text-sm italic text-gold leading-relaxed">
                  Deliverable: {phase.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Section 3: Diagnostic */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container max-w-4xl">
          <div className="mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Start Here</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The Partner Ecosystem Diagnostic
            </h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
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

    </Layout>
  );
};

export default HowIWork;