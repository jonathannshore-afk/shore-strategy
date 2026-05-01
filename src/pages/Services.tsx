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
    title: "Fractional Leadership",
    timeline: "Ongoing · Part-Time",
    desc: "I embed part-time as your head of partnerships — owning strategy, execution, and results.",
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
];


const faqs = [
  {
    q: "How do I know if fractional or project-based is right for us?",
    a: "Fractional fits when you need an ongoing leader in the seat but the role doesn't yet justify a full-time hire. Project-based fits when the work is well-defined and time-bound — a launch, a segmentation, a post-M&A integration. If you're unsure, the first conversation should be about scoping.",
  },
  {
    q: "How long do engagements typically run?",
    a: "Fractional engagements start with a 3–6 month term and continue as long as they're creating value. Project-based runs a few weeks to a few months. Advisory is scheduled monthly or as needed, with no fixed end date.",
  },
  {
    q: "Can engagements evolve over time?",
    a: "Yes — often. A project can extend into fractional leadership; a fractional engagement can shift to advisory once a full-time leader is ramped. The model matches where the business is.",
  },
  {
    q: "Do you work with companies outside B2B technology?",
    a: "My deepest experience is B2B technology — SaaS, cloud, infrastructure, enterprise software. The frameworks travel to adjacent industries with strong channel or alliance components, but B2B tech is where I add leverage fastest.",
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
      <section className="px-6 py-10 md:px-12 lg:px-24 lg:py-14 bg-cream">
        <div className="container">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Menu</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What I Do</h2>
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
      <section className="px-6 py-10 md:px-12 lg:px-24 lg:py-14 bg-cream">
        <div className="container">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">The Engagement</p>
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
                    <p className="font-body text-xs text-primary-foreground/50 mb-3">{model.timeline}</p>
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
