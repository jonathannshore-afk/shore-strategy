import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, MessageCircleQuestion, TrendingDown, Wrench, Unplug } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import headshot from "@/assets/jonathan-headshot.jpeg";
import logoServicenow from "@/assets/logo-servicenow.svg";
import logoLumen from "@/assets/logo-lumen.png";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";



const stats = [
  { value: "$1.6B", label: "ARR Ecosystem Managed" },
  { value: "$800M+", label: "Annual Bookings Influenced" },
  { value: "19%", label: "YoY Channel Revenue Growth" },
  { value: "2K+", label: "Partners Across Fortune 500 Ecosystems" },
];

const problems = [
  {
    icon: TrendingDown,
    title: "Pipeline that never materializes",
    description: "Programs launched, partners signed, but partner-sourced revenue stays stuck under 10%.",
  },
  {
    icon: Wrench,
    title: "Strategy without operating muscle",
    description: "A deck exists; the cadence, deal reg, and enablement to execute it don't.",
  },
  {
    icon: Unplug,
    title: "Misaligned with the core business",
    description: "The partner team runs parallel to sales, product, and marketing — not integrated with them.",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Partner Ecosystem Strategist"
        description="Jonathan Shore helps B2B technology companies build, fix, and scale partner ecosystems that drive measurable revenue growth. 15+ years at Salesforce, ServiceNow, and Lumen."
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
              jobTitle: "Partner Ecosystem Strategist",
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
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="relative z-10 container flex-1 flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 w-full">
            <div className="flex-1 text-center md:text-left">
              <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3 md:mb-6 animate-fade-in-up">
                ex-Salesforce · ServiceNow · Lumen Technologies
              </p>
              <h1
                className="font-display text-3xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-3 md:mb-5 animate-fade-in-up"
                style={{ animationDelay: "0.15s" }}
              >
                Your Partner Ecosystem
                <br />
                <span className="text-gold">Should Be a Revenue Engine</span>
              </h1>
              <p
                className="font-body text-base md:text-xl text-primary-foreground/80 max-w-xl mb-5 md:mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                I help B2B technology companies build, fix, and scale partner ecosystems that drive measurable revenue growth.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up"
                style={{ animationDelay: "0.45s" }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
                >
                  <CalendarCheck size={18} /> Book a Discovery Call
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
                >
                  See How I Work <ArrowRight size={16} />
                </Link>
              </div>
              <p
                className="mt-6 md:mt-8 pt-5 border-t border-primary-foreground/15 font-body text-sm text-primary-foreground/60 max-w-xl text-center md:text-left animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                For{" "}
                <span className="text-primary-foreground/80">
                  CROs, SVPs, and VP-level partnership leaders
                </span>{" "}
                at B2B SaaS and enterprise technology companies.
              </p>
              <div
                className="mt-4 pt-4 border-t border-primary-foreground/15 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60 max-w-xl flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 animate-fade-in-up"
                style={{ animationDelay: "0.75s" }}
              >
                <span>15+ Years</span>
                <span className="text-gold/70">·</span>
                <span>Salesforce</span>
                <span className="text-gold/70">·</span>
                <span>ServiceNow</span>
                <span className="text-gold/70">·</span>
                <span>Lumen</span>
                <span className="text-gold/70">·</span>
                <span>$1.6B ARR Ecosystems</span>
              </div>
            </div>
            <div
              className="flex flex-col items-center w-56 sm:w-64 md:w-72 lg:w-80 shrink-0 animate-fade-in-up order-first md:order-none"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src={headshot}
                alt="Jonathan Shore"
                width={320}
                height={400}
                fetchPriority="high"
                decoding="async"
                className="w-full rounded-lg shadow-2xl border-2 border-gold/20"
              />
              <div className="hidden md:block w-full mt-5 max-w-[224px]">
                <p className="text-gold font-body text-[10px] uppercase tracking-[0.2em] text-center mb-3">
                  Experience Built At
                </p>
                <div className="flex items-center justify-between gap-4">
                  <img
                    alt="Salesforce"
                    className="h-6 object-contain opacity-70 brightness-0 invert"
                    src="/lovable-uploads/f6d67dad-429a-49a3-8c20-fff68acb27d4.png"
                    width={80}
                    height={24}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={logoServicenow}
                    alt="ServiceNow"
                    className="h-5 object-contain opacity-70 brightness-0 invert"
                    width={80}
                    height={20}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={logoLumen}
                    alt="Lumen Technologies"
                    className="h-5 object-contain opacity-70 brightness-0 invert"
                    width={80}
                    height={20}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 container pb-8 pt-6 md:hidden">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50 text-center mb-4">
            Experience Built At
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <img
              alt="Salesforce"
              className="h-6 object-contain opacity-70 brightness-0 invert"
              src="/lovable-uploads/f6d67dad-429a-49a3-8c20-fff68acb27d4.png"
              width={80}
              height={24}
              loading="lazy"
              decoding="async"
            />
            <img
              src={logoServicenow}
              alt="ServiceNow"
              className="h-5 object-contain opacity-70 brightness-0 invert"
              width={80}
              height={20}
              loading="lazy"
              decoding="async"
            />
            <img
              src={logoLumen}
              alt="Lumen Technologies"
              className="h-5 object-contain opacity-70 brightness-0 invert"
              width={80}
              height={20}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="bg-navy border-t border-primary-foreground/10">
        <div className="container py-12 md:py-16">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-6">Career Highlights</p>
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

      {/* Why Fractional, Why Now */}
      <section className="bg-cream py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-2">A Deliberate Choice</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Why Fractional, Why Now
          </h2>
          <div className="font-body text-foreground/80 leading-relaxed space-y-4 text-[15px] md:text-base">
            <p>
              Most companies under $250M ARR can't justify a $400K+ CRO of Partnerships — but they absolutely need the strategy, program design, and executive presence that role provides. That's the gap I exist to close.
            </p>
            <p>
              I'm not a career consultant who has read about partner ecosystems. I've built them, scaled them, and turned them around — with full P&L ownership and board-level accountability. The work I do for clients today is the same work I did as an operator. The only thing that's changed is who signs the contract.
            </p>
          </div>
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

      {/* The Problem */}
      <section className="bg-cream py-14 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Sound Familiar?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              The Symptoms We Solve For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((p) => (
              <div
                key={p.title}
                className="p-6 md:p-7 rounded-lg border border-border bg-card"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <p.icon className="text-gold" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Engagement CTA */}
      <section className="py-14 md:py-20 bg-navy">
        <div className="container text-center max-w-2xl">
          <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircleQuestion className="text-gold" size={28} strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Let's Scope Your Engagement
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-7 leading-relaxed">
            You know what's broken in your partner ecosystem. I'll show you how I'd fix it — and what results to expect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            <CalendarCheck size={18} /> Book a Strategy Call
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
