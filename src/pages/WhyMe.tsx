import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { CalendarCheck, CheckCircle, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jonathan transformed our partner program from a cost center into a genuine growth engine. His ability to align cross-functional teams around a shared partner strategy was unlike anything I've seen.",
    name: "Sarah Mitchell",
    title: "CRO, Enterprise SaaS Company",
  },
  {
    quote: "We brought Jonathan in to build our first partner motion from scratch. Within six months, we had a fully operational channel program generating meaningful pipeline. He operates at VP-level but rolls up his sleeves like a builder.",
    name: "David Chen",
    title: "CEO, Series D Technology Company",
  },
  {
    quote: "Jonathan's strategic clarity is his superpower. He cut through years of partner program complexity and gave us a clear, executable roadmap that our team could actually follow.",
    name: "Rachel Torres",
    title: "SVP Global Alliances, Fortune 500",
  },
];

const highlights = [
  {
    stat: "19% YoY Growth",
    desc: "Reversed multi-year channel sales decline at Lumen Technologies while reducing OpEx by 20%.",
  },
  {
    stat: "$12M ARR in Year One",
    desc: "Built and launched a new ISV partner motion from scratch, establishing the foundation for future ecosystem expansion.",
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

      {/* Proven Results */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Track Record</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Real-World Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map((h) => (
              <div key={h.stat} className="bg-card p-8 rounded-lg border border-border">
                <div className="font-display text-3xl font-bold text-gold mb-3">{h.stat}</div>
                <p className="font-body text-foreground/80 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">What People Say</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all relative"
              >
                <Quote className="text-gold/20 absolute top-6 right-6" size={32} strokeWidth={1} />
                <p className="font-body text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 font-body text-xs text-muted-foreground italic">
            * Placeholder testimonials — real endorsements coming soon.
          </p>
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
