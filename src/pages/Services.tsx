import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FlipCard from "@/components/FlipCard";
import { ArrowRight, CalendarCheck, Compass, Handshake, Network, Settings2, Target, Users } from "lucide-react";

const capabilities = [
  {
    icon: Compass,
    title: "Partner Strategy",
    desc: "Defining your ecosystem vision, selling motions, and the execution plan to bring it to life.",
  },
  {
    icon: Target,
    title: "Route-to-Market Build",
    desc: "Identifying and activating the right partner archetypes to drive pipeline and revenue.",
  },
  {
    icon: Handshake,
    title: "Partner Program Design",
    desc: "Building the program architecture, incentives, and commercial frameworks that attract and retain the right partners.",
  },
  {
    icon: Users,
    title: "Partner Org Transformation",
    desc: "Redesigning your partner organization, roles, and operating model for scale.",
  },
  {
    icon: Settings2,
    title: "Rhythm of the Business",
    desc: "Implementing the operating cadences, QBRs, and forecasting discipline that keep the business running.",
  },
  {
    icon: Network,
    title: "Annual Planning",
    desc: "Aligning compensation, territory, quota, and partner strategy to your annual growth goals.",
  },
];

const engagementModels = [
  {
    title: "Fractional Leadership",
    desc: "Need senior partner strategy leadership without a $400K executive hire? I embed part-time as your head of partnerships — owning the strategy, the execution, and the results.",
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
    desc: "Have a specific initiative but no one to own it end-to-end? I scope, lead, and deliver defined partnership projects with clear outcomes and no scope creep.",
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
    desc: "Already leading partnerships but want a seasoned thinking partner? I work directly with you on strategy, stakeholder alignment, and the decisions that matter most.",
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
            A clear menu of services and flexible ways to engage.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container">
          <div className="mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Menu</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What I Do</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
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

      {/* Engagement Models */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container">
          <div className="mb-10">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Engagement</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Ways to Work Together</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
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
          <div className="mt-10 text-center">
            <Link
              to="/how-i-work"
              className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-dark transition-colors"
            >
              Curious how engagements actually run? See How I Work
              <ArrowRight size={16} />
            </Link>
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
            >
              <CalendarCheck size={18} /> Book a Call
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
