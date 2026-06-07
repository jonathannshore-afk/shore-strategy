import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FlipCard from "@/components/FlipCard";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Handshake, Network, Settings2, Target, Users } from "lucide-react";

const capabilities = [
  {
    icon: Compass,
    title: "Partner Strategy",
    desc: "Ecosystem vision and the plan to execute it.",
  },
  {
    icon: Target,
    title: "Route-to-Market Build",
    desc: "The right partner archetypes, activated for pipeline.",
  },
  {
    icon: Handshake,
    title: "Partner Program Design",
    desc: "Program architecture, incentives, and commercial frameworks.",
  },
  {
    icon: Users,
    title: "Partner Org Transformation",
    desc: "Roles, structure, and operating model built for scale.",
  },
  {
    icon: Settings2,
    title: "Rhythm of the Business",
    desc: "Operating cadences, QBRs, and forecasting discipline.",
  },
  {
    icon: Network,
    title: "Annual Planning",
    desc: "Comp, territory, quota, and partner strategy aligned to growth goals.",
  },
];

const engagementModels = [
  {
    title: "Advisory & Coaching",
    timeline: "Scheduled Sessions · As Needed",
    desc: "A seasoned thinking partner for the strategy, alignment, and decisions that matter most.",
    commercial: [
      "Best for: leaders who want a sounding board",
      "Commitment: 5 hrs/month minimum, 3-month term",
      "Structure: hourly or monthly retainer",
    ],
    backTitle: "Advisory & Coaching",
    audience: [
      "VP/Director-level partner leaders",
      "Founders building partner motions",
      "Teams navigating ecosystem complexity",
    ],
    outcomes: [
      "Strategic sounding board",
      "Board and exec presentation prep",
      "Partner negotiation guidance",
      "Leadership development",
    ],
  },
  {
    title: "Project-Based Engagement",
    timeline: "Fixed Scope · Weeks to Months",
    desc: "I scope, lead, and deliver defined partnership initiatives end-to-end — no scope creep.",
    commercial: [
      "Best for: a defined initiative that needs an owner",
      "Commitment: typically 4–12 weeks",
      "Structure: fixed fee, scoped upfront",
    ],
    backTitle: "Project-Based",
    audience: [
      "Companies with a defined initiative",
      "Pre/post-M&A partner integration",
      "New market or segment launches",
    ],
    outcomes: [
      "Partner program design and launch",
      "GTM strategy and playbooks",
      "Operational infrastructure buildout",
      "Partner segmentation and tiering",
    ],
  },
  {
    title: "Fractional Leadership",
    timeline: "Ongoing · Part-Time",
    desc: "I embed part-time as your head of partnerships — driving strategy, execution, and results.",
    commercial: [
      "Best for: senior leadership without a full-time hire",
      "Commitment: 1–2 days/week, 6-month minimum",
      "Structure: monthly retainer",
    ],
    backTitle: "Fractional Leadership",
    audience: [
      "Mid-Market & Enterprise companies",
      "Scaling founder-led to structured partnerships",
      "Bridging the gap with senior leadership",
    ],
    outcomes: [
      "Partner strategy and roadmap",
      "Program launch and operationalization",
      "Team hiring and enablement",
      "Executive-level partner engagement",
    ],
  },
];


const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Partner Ecosystem Strategy, GTM Plan & Enablement"
        description="Partner ecosystem strategy, partner GTM planning, channel partner strategy, and partner enablement programs that scale partner-sourced revenue."
        canonical="/services"
      />

      {/* Hero */}
      <section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            How I <span className="text-gold">Help</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Flexible ways to engage, with clear outcomes inside the work.
          </p>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="px-6 py-10 md:px-12 lg:px-24 lg:py-14 bg-cream">
        <div className="container">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Start Here</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Ways to Work Together</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
              Choose the model that fits where you are — fractional, project-based, or advisory.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[380px]">
            {engagementModels.map((model) => (
              <FlipCard
                key={model.title}
                front={
                  <>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{model.title}</h3>
                    <p className="font-body text-xs text-muted-foreground/70 mb-3">{model.timeline}</p>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{model.desc}</p>
                    <ul className="space-y-1">
                      {model.commercial.map((item, i) => (
                        <li key={i} className="font-body text-xs text-muted-foreground flex gap-2">
                          <span className="text-gold shrink-0">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </>
                }
                back={
                  <>
                    <h3 className="font-display text-base font-semibold text-primary-foreground mb-1">
                      {model.backTitle}
                    </h3>
                    <p className="font-body text-xs text-primary-foreground/70 mb-3">{model.timeline}</p>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-2">Who It's For</p>
                    <ul className="space-y-1 mb-3">
                      {model.audience.map((item, i) => (
                        <li key={i} className="font-body text-xs text-primary-foreground/80 flex gap-2">
                          <span className="text-gold shrink-0">•</span>{item}
                        </li>
                      ))}
                    </ul>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-1">What You Get</p>
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
          <div className="mt-10 text-center">
            <Link
              to="/how-i-work"
              className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-dark transition-colors"
            >
              Curious how engagements actually run? See How I Work
              <ArrowRight size={16} />
            </Link>
            <div className="mt-3">
              <Link
                to="/fractional-vs-consulting-vs-fte"
                className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-dark transition-colors"
              >
                Comparing fractional, consulting, and full-time hires
                <ArrowRight size={16} />
              </Link>
            </div>
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

      {/* Capabilities Grid */}
      <section className="px-6 py-10 md:px-12 lg:px-24 lg:py-14 bg-cream">
        <div className="container">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">What's Included</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Inside the Work</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
              The capabilities I bring to every engagement.
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


      {/* FAQ */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream border-t border-gold/20">
        <div className="container max-w-3xl text-center">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Questions?</h2>
          <p className="font-body text-muted-foreground mb-6">
            Engagement models, timelines, cost, and fit — answered in one place.
          </p>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-dark transition-colors"
          >
            Read the FAQ <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </Layout>
  );
};

export default Services;
