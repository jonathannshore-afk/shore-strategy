import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Briefcase, Users2 } from "lucide-react";
import ExpertiseRadar from "@/components/ExpertiseRadar";
import heroBg from "@/assets/hero-bg.jpg";
import headshot from "@/assets/jonathan-headshot.jpeg";
import logoSalesforce from "@/assets/logo-salesforce.png";
import logoServicenow from "@/assets/logo-servicenow.svg";
import logoLumen from "@/assets/logo-lumen.png";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "3", label: "Fortune 500 Ecosystems Transformed" },
  { value: "20%+", label: "Avg YoY Channel Revenue Growth" },
  { value: "6+", label: "Routes-to-Market Launched" },
];


const Index = () => {
  return (
    <Layout>
      <SEO
        title="Partner Ecosystem Strategy Executive"
        description="Jonathan Shore helps founders, CEOs, and CROs build, fix, and scale partner ecosystems that drive measurable revenue growth. 15+ years at Salesforce, ServiceNow, and Lumen."
        path="/"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Shore Strategy",
            description:
              "Partner ecosystem strategy and operations consulting for B2B technology companies.",
            founder: {
              "@type": "Person",
              name: "Jonathan Shore",
              jobTitle: "Partner Ecosystem Strategy Executive",
              url: "https://www.linkedin.com/in/jonathan-shore/",
            },
            url: "https://shore-strategy.com",
            serviceType: [
              "Partner Strategy Consulting",
              "GTM Planning",
              "Revenue Acceleration",
              "Ecosystem Development",
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="relative z-10 container flex-1 flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full">
            <div className="flex-1 text-center md:text-left">
              <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
                ex-Salesforce · ServiceNow · Lumen Technologies
              </p>
              <h1
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.15s" }}
              >
                Jonathan
                <br />
                <span className="text-gold">Shore</span>
              </h1>
              <p
                className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-4 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                I am a Partner Ecosystem Strategist with 15+ years of experience building partner ecosystems as a growth catalyst for technology companies.
              </p>
              <p
                className="font-body text-base text-gold/80 max-w-xl mb-10 animate-fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                Available for Fractional Partner Strategy Leadership, Partner Strategy Consulting, and Full-Time opportunities.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up"
                style={{ animationDelay: "0.45s" }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
                >
                  <CalendarCheck size={18} /> Book a Call
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
                >
                  My Background
                </Link>
              </div>
            </div>
            <div
              className="hidden md:block w-64 lg:w-72 shrink-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src={headshot}
                alt="Jonathan Shore"
                className="w-full rounded-lg shadow-2xl border-2 border-gold/20"
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 container pb-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/40 text-center mb-5">
                Experience Built At
              </p>
              <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
                <img
                  alt="Salesforce"
                  className="h-10 md:h-12 object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert"
                  src="/lovable-uploads/f6d67dad-429a-49a3-8c20-fff68acb27d4.png"
                />
                <img
                  src={logoServicenow}
                  alt="ServiceNow"
                  className="h-8 md:h-10 object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert"
                />
                <img
                  src={logoLumen}
                  alt="Lumen Technologies"
                  className="h-8 md:h-10 object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <ExpertiseRadar variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy">
        <div className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-primary-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="section-padding bg-background">
        <div className="container text-center max-w-5xl">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Who I Work With</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built for Leadership Teams
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            I partner with{" "}
            <span className="text-foreground font-semibold">
              CROs, SVP, and VP-level partnership leaders
            </span>{" "}
            at B2B SaaS and enterprise technology companies — from Series D startups building their first partner motion to established enterprises transforming legacy channel programs.
          </p>
        </div>
      </section>

      {/* Audience Segmentation */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">How We Work Together</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Find Your Path
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Hiring Manager path */}
            <div className="bg-card p-10 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <Briefcase className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Hiring a Partner Leader
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm">
                Looking for a VP or Director-level partnerships executive to build and lead your ecosystem strategy full-time? See my track record and experience.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:text-gold-dark transition-colors"
              >
                View My Background <ArrowRight size={16} />
              </Link>
            </div>

            {/* Fractional / Consulting path */}
            <div className="bg-card p-10 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <Users2 className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Need Fractional or Advisory Help
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm">
                Need a seasoned partner strategist embedded part-time, for a specific project, or as an ongoing advisor? Explore engagement models and capabilities.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:text-gold-dark transition-colors"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
