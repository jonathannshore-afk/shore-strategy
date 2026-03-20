import { Link } from "react-router-dom";
import { CalendarCheck, Search, Target, ClipboardCheck, Rocket, Layers } from "lucide-react";
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

const Methodology = () => {
  return (
    <Layout>
      <SEO
        title="Methodology | Jonathan Shore"
        description="A five-pillar approach to building, scaling, and optimizing partner ecosystems — from assessment through scale. Learn how Jonathan Shore drives partner-led growth."
        path="/methodology"
      />

      {/* Hero */}
      <section className="bg-navy section-padding pb-12">
        <div className="container max-w-3xl text-center">
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            My Methodology
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Strategic Approach
          </h1>
          <p className="font-body text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Five pillars that guide how I build, scale, and optimize partner ecosystems — 
            each informed by 15+ years of doing this at enterprise scale.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {pillars.map((p, i) => (
              <div
                key={p.step}
                className="group bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="font-display text-4xl font-bold text-gold/20">{p.step}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <p.icon className="text-gold shrink-0" size={24} strokeWidth={1.5} />
                        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                          {p.title}
                        </h2>
                      </div>
                      <p className="font-body text-muted-foreground leading-relaxed mb-5">
                        {p.description}
                      </p>
                      <div>
                        <p className="font-body text-xs uppercase tracking-[0.15em] text-gold mb-2">
                          Key Outcomes
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Build Your Partner Ecosystem?
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Every engagement starts with understanding where you are today and where you need to go. 
            Let's have a conversation about your partner strategy.
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

export default Methodology;
