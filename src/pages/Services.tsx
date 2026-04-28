import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import FlipCard from "@/components/FlipCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    timeline: "Ongoing · Part-Time",
    desc: "Need senior partner strategy leadership without committing to a full-time executive hire? I embed part-time as your head of partnerships — owning the strategy, the execution, and the results.",
    bestFor: "BEST FOR COMPANIES THAT NEED SENIOR PARTNER STRATEGY LEADERSHIP WITHOUT THE OVERHEAD OF A FULL-TIME EXECUTIVE.",
    commercial: [
      "1-2 days per week, embedded engagement",
      "Monthly retainer structure",
      "6-month minimum commitment",
    ],
    backTitle: "Fractional Leadership",
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
    feeStructure: [
      "Monthly retainer, scoped by days per week",
      "6-month minimum commitment",
      "Renewed quarterly thereafter",
    ],
  },
  {
    title: "Project-Based Engagement",
    timeline: "Fixed Scope · Weeks to Months",
    desc: "Have a specific initiative but no one to own it end-to-end? I scope, lead, and deliver defined partnership projects with clear outcomes and no scope creep.",
    bestFor: "BEST FOR COMPANIES WITH A SPECIFIC INITIATIVE OR TRANSFORMATION IN MIND.",
    commercial: [
      "Fixed-fee, scoped upfront",
      "Typically 4-12 weeks depending on scope",
      "1-month minimum commitment",
    ],
    backTitle: "Project-Based",
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
    feeStructure: [
      "Fixed fee, defined deliverables, no surprises",
      "Scoped and priced before work begins",
      "1-month minimum commitment",
    ],
  },
  {
    title: "Advisory & Coaching",
    timeline: "Scheduled Sessions · As Needed",
    desc: "Already leading partnerships but want a seasoned thinking partner? I work directly with you on strategy, stakeholder alignment, and the decisions that matter most.",
    bestFor: "BEST FOR EXISTING PARTNERSHIP LEADERS WHO WANT A SEASONED SOUNDING BOARD.",
    commercial: [
      "Scheduled sessions, flexible cadence",
      "Minimum 5 hours per month",
      "3-month minimum commitment",
    ],
    backTitle: "Advisory & Coaching",
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
    feeStructure: [
      "Hourly or monthly retainer",
      "Minimum 5 hours per month",
      "3-month minimum commitment",
    ],
  },
];


const faqs = [
  {
    q: "How do I know if fractional or project-based is right for us?",
    a: "Fractional is the right fit when you need an ongoing senior partnerships leader in the seat — owning strategy, execution, and team leadership over time — but the role doesn't yet justify a full-time hire. Project-based is the right fit when the work is well-defined and time-bound: a program launch, a partner segmentation, a GTM playbook, or a post-M&A integration. If you're not sure, that's usually a sign the first conversation should be about scoping, not engagement model.",
  },
  {
    q: "What does a fractional engagement actually look like week-to-week?",
    a: "I embed as your head of partnerships on a part-time basis — typically a set number of days per week or month. That includes owning the partner strategy, running the operating cadence (pipeline reviews, QBRs, forecasting), engaging directly with priority partners, and developing the team. You get an executive in the seat, not an advisor on the sidelines.",
  },
  {
    q: "How long do engagements typically run?",
    a: "Fractional engagements are ongoing and usually start with a 3–6 month initial term, then continue as long as it's creating value. Project-based engagements are fixed scope, typically running anywhere from a few weeks to a few months depending on the initiative. Advisory and coaching is usually scheduled sessions — monthly or as needed — with no fixed end date.",
  },
  {
    q: "What do you mean by \"fit\" on the engagement cards?",
    a: "\"Fit\" is shorthand for the situation each model is built for — not a gate. Fractional fits when you need leadership in the seat. Project-based fits when there's a clear initiative that needs an owner. Advisory fits when a leader is already in place and wants a thinking partner. Most clients land cleanly in one of those, but the right answer sometimes blends two — and that's worth a conversation.",
  },
  {
    q: "Can engagements evolve over time?",
    a: "Yes — and they often do. A project-based engagement can extend into fractional leadership if the work expands. A fractional engagement can shift to advisory once a full-time leader is hired and ramped. The model is designed to match where the business is, not lock you into a structure that no longer fits.",
  },
  {
    q: "Do you work with companies outside B2B technology?",
    a: "My deepest experience is in B2B technology — SaaS, cloud, infrastructure, and enterprise software — where partner ecosystems are core to the growth motion. The frameworks travel to adjacent industries with strong channel or alliance components, but B2B tech is where I add the most leverage fastest.",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Services"
        description="Partner ecosystem strategy, program design, GTM planning, and revenue acceleration. Explore how Jonathan Shore drives partner-led growth."
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
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
              Engagements are structured as monthly retainers, fixed-fee projects, or hourly advisory sessions — scoped to fit where you are.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[560px]">
            {engagementModels.map((model) => (
              <FlipCard
                key={model.title}
                front={
                  <>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{model.title}</h3>
                    <p className="font-body text-xs text-muted-foreground/70 mb-3">{model.timeline}</p>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{model.desc}</p>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-3 leading-relaxed">{model.bestFor}</p>
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
                    <ul className="space-y-1 mb-3">
                      {model.outcomes.map((item, i) => (
                        <li key={i} className="font-body text-xs text-primary-foreground/70 flex gap-2">
                          <span className="text-gold shrink-0">→</span>{item}
                        </li>
                      ))}
                    </ul>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-1">Fee Structure</p>
                    <ul className="space-y-1">
                      {model.feeStructure.map((item, i) => (
                        <li key={i} className="font-body text-xs text-primary-foreground/70 flex gap-2">
                          <span className="text-gold shrink-0">•</span>{item}
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

      {/* FAQ */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream border-t border-gold/20">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Common Questions</h2>
            <p className="font-body text-muted-foreground mt-2">
              Quick answers on engagement models, timelines, and how to think about fit.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-dark transition-colors"
            >
              Have a different question? Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Services;
