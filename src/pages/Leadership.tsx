import { Link } from "react-router-dom";
import { CalendarCheck, Handshake, BarChart3, Heart, Cog, Zap, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const principles = [
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Trust is my number one value — without trust, nobody wins. I earn the trust of my business partners, my internal teams, and cross-functional leadership.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description:
      "I craft strategies based on data-driven insights to inform and build my GTM strategies and measure the health of the business.",
  },
  {
    icon: Heart,
    title: "People & Culture",
    description:
      "Hire top-quality talent and nurture them to grow. I build teams that are trusted advisors, data-driven, and growth accelerators.",
  },
  {
    icon: Cog,
    title: "Operational Excellence",
    description:
      "Build the operational engine, rhythm of the business, and CRM hygiene to ensure a well-oiled machine.",
  },
  {
    icon: Zap,
    title: "Better, Better, Never Best",
    description:
      "Avoid analysis paralysis. Getting to market fast, albeit not perfect, wins over being last to market and \"perfect.\"",
  },
  {
    icon: Users,
    title: "Partner First & Alignment",
    description:
      "Engage with commercial sales leaders, product, marketing, and the partner teams to ensure proper alignment and a partner-first mentality.",
  },
];

const Leadership = () => {
  return (
    <Layout>
      <SEOHead
        title="Leadership Style | Jonathan Shore"
        description="How Jonathan Shore leads — principles forged across 15+ years building and transforming partner ecosystems at Salesforce, ServiceNow, and Lumen Technologies."
        canonical="/leadership"
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
