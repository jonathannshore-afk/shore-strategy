import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FlipCard from "@/components/FlipCard";
import { BarChart3, CalendarCheck, ClipboardCheck, Handshake, Layers, Rocket, Search, Target, TrendingUp, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Handshake,
    title: "Partner Program Design",
    desc: "Tiered programs, incentive models, and enablement frameworks tailored to your market.",
  },
  {
    icon: Target,
    title: "Joint GTM Strategy",
    desc: "Co-sell and co-market motions with target account alignment and joint pipeline creation.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Acceleration",
    desc: "Optimize partner-sourced and partner-influenced revenue through data-driven engagement.",
  },
  {
    icon: Layers,
    title: "Partner Operations (PRM, Deal Reg, MDF)",
    desc: "Scalable PRM systems, deal registration, MDF programs, and reporting infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics & Dashboards",
    desc: "KPI frameworks and dashboards that give clear visibility into partner contribution and ROI.",
  },
  {
    icon: Zap,
    title: "Rapid 30-Day Assessments",
    desc: "Focused partner program audits that surface quick wins and a prioritized improvement roadmap.",
  },
];

const engagementModels = [
  {
    title: "Fractional Leadership",
    desc: "Embedded, part-time executive leadership for companies building or transforming their partner function.",
    fit: "Best for companies that need senior partner strategy leadership without the overhead of a full-time executive.",
    backTitle: "Fractional Leadership",
    timeline: "Ongoing · Part-Time",
    audience: [
      "Mid-Market & Enterprise companies",
      "Scaling founder-led → structured partnerships",
      "Bridging the gap with experienced leadership",
    ],
    outcomes: [
      "Partner strategy & roadmap",
      "Program launch & operationalization",
      "Team hiring & enablement",
      "Executive-level partner engagement",
    ],
  },
  {
    title: "Project-Based Engagement",
    desc: "Scoped, time-bound projects with clear deliverables — program design, GTM planning, operational buildouts.",
    fit: "Best for companies with a specific initiative or transformation in mind.",
    backTitle: "Project-Based",
    timeline: "Fixed Scope · Weeks to Months",
    audience: [
      "Companies with a defined initiative",
      "Pre/post-M&A partner integration",
      "New market or segment launches",
    ],
    outcomes: [
      "Partner program design & launch",
      "GTM strategy & playbooks",
      "Operational infrastructure buildout",
      "Partner segmentation & tiering",
    ],
  },
  {
    title: "Advisory & Coaching",
    desc: "Ongoing strategic guidance for partner leaders navigating complex ecosystem decisions.",
    fit: "Best for existing partnership leaders who want a seasoned sounding board.",
    backTitle: "Advisory & Coaching",
    timeline: "Scheduled Sessions · As Needed",
    audience: [
      "VP/Director-level partner leaders",
      "Founders building partner motions",
      "Teams navigating ecosystem complexity",
    ],
    outcomes: [
      "Strategic sounding board",
      "Board & exec presentation prep",
      "Partner negotiation guidance",
      "Leadership development",
    ],
  },
];

const pillars = [
  {
    step: "01",
    icon: Search,
    title: "Ecosystem Assessment & Architecture",
    description:
      "I start by mapping the full partner landscape — current partners, white space, competitive dynamics, and internal readiness.",
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
      "I design tiered partner programs with clear value exchange — certification frameworks, incentive models, and engagement rules.",
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
      "Whether it's ISV, SI, VAR, GSI, or co-sell motions — I define which routes-to-market will drive the most leverage.",
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
      "Strategy without execution is a slide deck. I build operating cadences, enablement frameworks, and deal registration processes.",
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
      "Once the motions are running, I instrument them — performance analytics, coverage models, and continuous iteration.",
    outcomes: [
      "Partner performance scorecards and analytics",
      "Coverage model optimization",
      "Continuous program iteration framework",
    ],
  },
];


const Services = () => {
  return (
    <Layout>
      <SEO
        title="Services"
        description="Partner ecosystem strategy, program design, GTM planning, and revenue acceleration. Explore how Jonathan Shore drives partner-led growth."
        path="/services"
      />

      {/* Hero */}
      <section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            How I <span className="text-gold">Help</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            A clear menu of services, a proven delivery methodology, and flexible ways to engage — all built to drive partner-led growth.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">01 · The Menu</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What I Do</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl mx-auto">
              The specific services I deliver across partner ecosystem strategy and execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-card p-5 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all group"
              >
                <cap.icon className="text-gold mb-3" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-cream">
        <div className="container px-6 md:px-12 lg:px-24 flex items-center gap-4 py-2">
          <span className="block h-px flex-1 bg-gold/40" />
          <span className="block w-2 h-2 rotate-45 bg-gold/60" />
          <span className="block h-px flex-1 bg-gold/40" />
        </div>
      </div>

      {/* Methodology */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">02 · The Approach</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              How I Deliver
            </h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl mx-auto">
              Five pillars that turn the services above into measurable outcomes.
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

      {/* Start Here — Pilot Engagement */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">03 · Start Here</p>
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

      {/* Engagement Models */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">04 · The Engagement</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Ways to Work Together</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl mx-auto">
              Choose the engagement model that fits where you are — fractional, project-based, or advisory.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[380px]">
            {engagementModels.map((model) => (
              <FlipCard
                key={model.title}
                front={
                  <>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">{model.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{model.desc}</p>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider">{model.fit}</p>
                  </>
                }
                back={
                  <>
                    <h3 className="font-display text-base font-semibold text-primary-foreground mb-1">
                      {model.backTitle}
                    </h3>
                    <p className="font-body text-xs text-primary-foreground/50 mb-3">{model.timeline}</p>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-2">Who It's For</p>
                    <ul className="space-y-1 mb-3">
                      {model.audience.map((item, i) => (
                        <li key={i} className="font-body text-xs text-primary-foreground/80 flex gap-2">
                          <span className="text-gold shrink-0">•</span>{item}
                        </li>
                      ))}
                    </ul>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-1">Key Outcomes</p>
                    <ul className="space-y-1">
                      {model.outcomes.map((item, i) => (
                        <li key={i} className="font-body text-xs text-primary-foreground/70 flex gap-2">
                          <span className="text-gold shrink-0">→</span>{item}
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

      {/* CTA */}
      <section className="px-6 py-14 md:px-12 lg:px-24 lg:py-16 bg-navy">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Ready to Build Your Partner Ecosystem?
          </h2>
          <p className="font-body text-primary-foreground/70 leading-relaxed mb-6">
            Every engagement starts with understanding where you are today and where you need to go.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            <CalendarCheck size={18} /> Book a Call
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
