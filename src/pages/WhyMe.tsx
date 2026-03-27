import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { CalendarCheck, CheckCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoLumen from "@/assets/logo-lumen.png";
import logoServicenow from "@/assets/logo-servicenow.png";
import logoSalesforce from "@/assets/logo-salesforce.png";


const caseStudies = [
  {
    company: "Lumen Technologies",
    logo: logoLumen,
    headline: "19% YoY Growth & $12M ARR ISV Launch",
    role: "Senior Director, Partner Ecosystem Strategy",
    period: "2024 – 2026",
    stats: [
      { value: "19%", label: "YoY Channel Growth" },
      { value: "$12M", label: "ARR (Year One)" },
      { value: "20%", label: "OpEx Reduction" },
      { value: "2K+", label: "Partners Managed" },
    ],
    challenge:
      "Lumen's $1.6B ARR partner business was in multi-year decline with no structured ISV motion, an outdated partner program, and misaligned internal teams. The ecosystem needed a complete strategic overhaul.",
    approach: [
      "Conducted full ecosystem audit across 2,000+ partners to assess maturity, coverage gaps, and revenue contribution",
      "Designed and launched Lumen's first tiered partner program with certification frameworks and incentive alignment",
      "Built an ISV partner motion from scratch — partner identification, onboarding, co-sell enablement, and joint GTM",
      "Drove cross-functional alignment between Sales, Product, and Marketing around a unified partner strategy",
    ],
    results: [
      "Reversed multi-year channel sales decline, delivering 19% YoY growth",
      "Launched ISV partner motion that scaled to $12M ARR in the first 12 months",
      "Reduced partner operations spend by 20% while increasing program effectiveness",
      "Established foundation for long-term ecosystem expansion across new routes-to-market",
    ],
  },
  {
    company: "ServiceNow",
    logo: logoServicenow,
    headline: "$1B+ Influenced Revenue & 110% Quota",
    role: "Chief of Staff, Strategy & Planning — Global Partnerships",
    period: "2023 – 2024",
    stats: [
      { value: "$1B+", label: "Influenced Revenue" },
      { value: "110%", label: "Quota Attainment" },
      { value: "20%", label: "Joint Pipeline Increase" },
      { value: "Top 250", label: "Accounts Covered" },
    ],
    challenge:
      "ServiceNow's global partnerships organization needed a cohesive strategy to maximize GSI partner impact across its highest-value accounts while aligning multiple internal business units around a unified GTM approach.",
    approach: [
      "Architected the Top 250 Accounts partner strategy, mapping GSI capabilities to ServiceNow's priority verticals and use cases",
      "Built strategic planning frameworks that connected partnership activities to measurable revenue outcomes",
      "Designed a unified partner GTM strategy aligning the partnerships org with core business units",
      "Established operational cadences and reporting infrastructure to drive accountability and visibility",
    ],
    results: [
      "Delivered $1B+ in influenced revenue with 110% quota attainment",
      "Increased joint pipeline with GSI partners by 20% through targeted account coverage",
      "Created scalable planning frameworks adopted across the global partnerships organization",
      "Strengthened executive alignment between partnerships and core business leadership",
    ],
  },
  {
    company: "Salesforce",
    logo: logoSalesforce,
    headline: "$3B Ecosystem, 40% YoY Growth",
    role: "Senior Manager → Analyst, Strategy & Operations",
    period: "2012 – 2023",
    stats: [
      { value: "$3B", label: "Services Ecosystem" },
      { value: "40%", label: "YoY Growth" },
      { value: "120%", label: "Quota Attainment" },
      { value: "50+", label: "GSI/RSI Partners" },
    ],
    challenge:
      "Salesforce's rapidly expanding partner services ecosystem required strategic leadership to scale operations, manage a diverse portfolio of 50+ global and regional partners, and drive consistent growth across a 300+ person consulting organization.",
    approach: [
      "Led strategy and operations for a 300+ person consulting org generating $100M in revenue while influencing $800M+ in bookings",
      "Managed partner performance across 50+ GSI and RSI partners within a $3B services ecosystem",
      "Built cross-functional planning processes for a 400-person sales organization",
      "Developed partner segmentation frameworks, performance scorecards, and investment models",
    ],
    results: [
      "Scaled the services ecosystem to $3B with 40% YoY growth",
      "Achieved 120% quota attainment across partner-influenced revenue streams",
      "Led cross-functional planning that delivered 30% YoY growth for the 400-person sales org",
      "Built enduring operational frameworks still in use across the partnerships organization",
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

const WhyMe = () => {
  return (
    <Layout>
      <SEO
        title="Why Jonathan Shore"
        description="Proven results, real testimonials, and a clear 90-day engagement framework. See why companies trust Jonathan Shore to build and scale partner ecosystems."
        path="/why-me"
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Why Work With Me</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Proof in the <span className="text-gold">Results</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Track record, testimonials, and a transparent look at how I approach every engagement — whether fractional, project-based, or full-time.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Proof of Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Case Studies
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-2xl mx-auto">
              Each card shows the headline metrics at a glance. Expand any study to see the full challenge, approach, and results.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {caseStudies.map((cs) => (
              <AccordionItem
                key={cs.company}
                value={cs.company}
                className="bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all overflow-hidden [&[data-state=open]]:border-gold/30 [&[data-state=open]]:shadow-lg"
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline [&>svg]:hidden">
                  <div className="w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={cs.logo}
                        alt={cs.company}
                        className="h-7 w-auto object-contain shrink-0 opacity-70"
                      />
                      <div className="text-left">
                        <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-snug">
                          {cs.headline}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground">
                          {cs.company}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {cs.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-background rounded-md p-3 text-center"
                        >
                          <div className="font-display text-xl md:text-2xl font-bold text-gold">
                            {stat.value}
                          </div>
                          <div className="font-body text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-4 font-body text-xs text-gold">
                      <span>View Details</span>
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 [[data-state=open]_&]:rotate-180" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 md:px-8 pb-6 space-y-6">
                    <div className="flex items-center gap-3 text-sm font-body text-muted-foreground border-t border-border pt-4">
                      <span className="font-semibold text-foreground">{cs.role}</span>
                      <span>·</span>
                      <span>{cs.period}</span>
                    </div>

                    <div>
                      <h4 className="font-display text-base font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-base font-semibold text-foreground mb-2">Approach</h4>
                      <ul className="space-y-2">
                        {cs.approach.map((item, i) => (
                          <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-gold mt-0.5 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-display text-base font-semibold text-foreground mb-2">Results</h4>
                      <ul className="space-y-2">
                        {cs.results.map((item, i) => (
                          <li key={i} className="font-body text-sm text-foreground/80 leading-relaxed flex gap-2">
                            <CheckCircle className="text-gold shrink-0 mt-0.5" size={14} strokeWidth={2} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>



      {/* First 90 Days */}
      <section className="section-padding bg-background">
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

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-body text-primary-foreground/70 leading-relaxed mb-8">
            Let's talk about where you are today and how I can help you get where you need to go.
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

export default WhyMe;