import { Link } from "react-router-dom";
import { CalendarCheck, Compass, Eye, Layers, Shield, Sparkles, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const principles = [
  {
    icon: Shield,
    title: "Trust Is the Operating System",
    description:
      "High-performing ecosystems are built on trust — between internal teams, with partners, and across leadership. I lead by earning trust first, then extending it generously. When trust is the default, execution accelerates.",
  },
  {
    icon: Eye,
    title: "Clarity Over Complexity",
    description:
      "Partner ecosystems are inherently complex — multiple stakeholders, competing incentives, overlapping GTM motions. My job is to cut through the noise: clear strategy, clear ownership, clear metrics. Ambiguity kills momentum.",
  },
  {
    icon: Layers,
    title: "Systems Over Heroics",
    description:
      "A partner win that depends on one relationship or one person isn't scalable. I build repeatable frameworks — tiered programs, joint planning cadences, enablement playbooks — so the ecosystem compounds value over time, not just on good quarters.",
  },
  {
    icon: Compass,
    title: "Strategic Patience, Operational Urgency",
    description:
      "Ecosystem transformation doesn't happen overnight, but that's no excuse for slow execution. I set ambitious 90-day milestones while building toward multi-year outcomes. Move fast on what matters now; stay disciplined on what matters long-term.",
  },
  {
    icon: Users,
    title: "Alignment Is a Contact Sport",
    description:
      "Partnerships fail when Sales, Product, Marketing, and the partner team operate in silos. I actively broker alignment across functions — shared OKRs, joint pipeline reviews, unified enablement. If the internal house isn't aligned, external partnerships won't be either.",
  },
  {
    icon: Sparkles,
    title: "Lead With the 'Why' for Partners",
    description:
      "Partners have choices. They invest time and resources where they see mutual value. I design programs and motions that answer the partner's 'what's in it for me' question clearly — because a motivated partner ecosystem is a revenue multiplier.",
  },
];

const Leadership = () => {
  return (
    <Layout>
      <SEO
        title="Leadership Style | Jonathan Shore"
        description="How Jonathan Shore leads — principles forged across 15+ years building and transforming partner ecosystems at Salesforce, ServiceNow, and Lumen Technologies."
        path="/leadership"
      />

      {/* Hero */}
      <section className="bg-navy section-padding pb-12">
        <div className="container max-w-3xl text-center">
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            How I Lead
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Leadership Philosophy
          </h1>
          <p className="font-body text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Principles forged across 15+ years of building, fixing, and scaling partner ecosystems. 
            These aren't theoretical — they're battle-tested operating beliefs that shape how I lead teams, 
            engage partners, and drive outcomes.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="group bg-card p-8 rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <p.icon className="text-gold" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary / CTA */}
      <section className="section-padding bg-cream">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            The Bottom Line
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            I believe the best partner ecosystems are led — not managed. They need someone 
            who can think strategically, operate rigorously, and build the kind of trust that 
            makes partners choose to invest alongside you. That's the standard I hold myself to.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            <CalendarCheck size={18} /> Let's Talk
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
