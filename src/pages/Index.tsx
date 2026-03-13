import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Target, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Layout from "@/components/Layout";

const stats = [
  { value: "$1.6B", label: "Partner Ecosystem Managed" },
  { value: "$800M+", label: "Annual Bookings Influenced" },
  { value: "2K+", label: "Partners Across Ecosystems" },
  { value: "15+", label: "Years Experience" },
];

const services = [
  {
    icon: Handshake,
    title: "Partner Strategy",
    desc: "Design and implement partner programs that align with your growth objectives and market positioning.",
  },
  {
    icon: Target,
    title: "GTM Planning",
    desc: "Build joint go-to-market plans with clear milestones, co-sell motions, and measurable outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Acceleration",
    desc: "Optimize partner-sourced and partner-influenced revenue through data-driven engagement models.",
  },
  {
    icon: Users,
    title: "Ecosystem Development",
    desc: "Cultivate technology and services ecosystems that create compounding value for all stakeholders.",
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

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="relative z-10 container text-center">
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
            Partner GTM Strategy Consulting · ex-Salesforce, ServiceNow, Lumen
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Navigate Growth Through
            <br />
            <span className="text-gold">Strategic Partnerships</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            We help B2B companies design, launch, and scale partner ecosystems that drive sustainable revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
            >
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy">
        <div className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="font-body text-sm text-primary-foreground/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Strategic Partnership Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow group"
              >
                <service.icon className="text-gold mb-4" size={36} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:text-gold-dark transition-colors"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Client Success</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-card p-8 rounded-lg border border-border">
                <div className="text-gold text-4xl font-display mb-4">"</div>
                <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div>
                  <div className="font-display font-semibold text-foreground">{t.author}</div>
                  <div className="font-body text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-padding">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Unlock Partner-Led Growth?
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
            Let's discuss how a strategic partner GTM approach can accelerate your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            Start the Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
