import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FlipCard from "@/components/FlipCard";
import { BarChart3, CalendarCheck, CheckCircle, ClipboardCheck, Handshake, Layers, Lightbulb, Rocket, Search, Target, TrendingUp, Users, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Handshake,
    title: "Partner Program Design",
    desc: "Architect partner programs from the ground up — tier structures, incentive models, enablement frameworks, and operational playbooks tailored to your market.",
  },
  {
    icon: Target,
    title: "Joint GTM Strategy",
    desc: "Develop co-sell and co-market strategies with clear value propositions, target account alignment, and joint pipeline creation motions.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Acceleration",
    desc: "Optimize partner-sourced and partner-influenced revenue through data-driven engagement models and pipeline analytics.",
  },
  {
    icon: Users,
    title: "Ecosystem Development",
    desc: "Build and nurture technology, services, and channel ecosystems that create compounding value for all stakeholders.",
  },
  {
    icon: Layers,
    title: "Partner Operations",
    desc: "Implement scalable partner operations — PRM systems, deal registration, MDF programs, and reporting infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Design KPI frameworks and dashboards that give you clear visibility into partner contribution and program ROI.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Planning & Alignment",
    desc: "Drive executive alignment on partner strategy, investment priorities, and cross-functional integration with sales, product, and marketing.",
  },
  {
    icon: Zap,
    title: "Rapid Assessments",
    desc: "30-day partner program audits that identify quick wins, strategic gaps, and a prioritized roadmap for improvement.",
  },
];

const engagementModels = [
  {
    title: "Fractional Leadership",
    desc: "Embedded, part-time executive leadership for companies building or transforming their partner function.",
    fit: "Best for companies that need senior partner strategy leadership but aren't ready for a full-time hire.",
    backTitle: "Fractional Leadership",
    timeline: "Ongoing · Part-Time",
    audience: [
      "Mid-Market & Enterprise companies",
      "Scaling founder-led → structured partnerships",
      "Bridging the gap before a full-time hire",
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
  {
    title: "Full-Time Leadership",
    desc: "For the right opportunity, I'm open to leading a partner ecosystem full-time — building the team, strategy, and infrastructure from the inside.",
    fit: "Best for companies ready to invest in a dedicated partnerships leader.",
    backTitle: "Full-Time Leadership",
    timeline: "Full-Time · Permanent",
    audience: [
      "Enterprise companies scaling partnerships",
      "Organizations needing ecosystem transformation",
      "Companies ready for a dedicated leader",
    ],
    outcomes: [
      "End-to-end ecosystem ownership",
      "Team building & organizational design",
      "Multi-year strategy & execution",
      "Cross-functional alignment at scale",
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

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Services"
        description="Partner ecosystem strategy, program design, GTM planning, and revenue acceleration. Explore how Jonathan Shore drives partner-led growth."
        path="/services"
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Capabilities</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            What I <span className="text-gold">Build</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Whether embedded as a fractional leader, engaged on a project, or hired full-time — these are the capabilities I bring to drive partner-led growth.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all group"
              >
                <cap.icon className="text-gold mb-4" size={36} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{cap.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First 90 Days */}
      <section className="section-padding bg-cream">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">What to Expect</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The First 90 Days
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
              Whether fractional or full-time, here's how I approach the first 90 days of any engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {first90Days.map((phase) => (
              <div
                key={phase.phase}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all"
              >
                <p className="font-body text-xs text-gold font-semibold uppercase tracking-[0.15em] mb-1">
                  {phase.phase}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-3">
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

      {/* Methodology */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">My Methodology</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Strategic Approach
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
              Five pillars that guide how I build, scale, and optimize partner ecosystems.
            </p>
          </div>
          <div className="space-y-6">
            {pillars.map((p) => (
              <div
                key={p.step}
                className="group bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all p-8 md:p-10"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="font-display text-4xl font-bold text-gold/20">{p.step}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <p.icon className="text-gold shrink-0" size={24} strokeWidth={1.5} />
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                        {p.title}
                      </h3>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
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

      {/* Engagement Models */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Ways to Work Together</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Engagement Models</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto auto-rows-[320px]">
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
      <section className="section-padding bg-navy">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Partner Ecosystem?
          </h2>
          <p className="font-body text-primary-foreground/70 leading-relaxed mb-8">
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
