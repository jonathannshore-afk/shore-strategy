import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Layers, Rocket, LineChart } from "lucide-react";
import headshot from "@/assets/jonathan-headshot.jpeg";
import logoServicenow from "@/assets/logo-servicenow.svg";
import logoLumen from "@/assets/logo-lumen.png";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import DiscoveryCallReassurance from "@/components/DiscoveryCallReassurance";
import { trackCalendlyClick } from "@/lib/calendlyTracking";



const stats = [
  { value: "15+ Years", label: "Enterprise Partner-Operator Experience" },
  { value: "19% YoY", label: "Channel Revenue Growth" },
  { value: "$12M ARR", label: "From a New ISV Motion in Year One" },
  { value: "3 Fortune 500", label: "Programs Built, Scaled, Turned Around" },
];

const whatIDo = [
  {
    icon: Layers,
    title: "Build the Right Program",
    description:
      "Partner tiers, incentive models, and routes-to-market designed for how your business actually sells.",
  },
  {
    icon: Rocket,
    title: "Activate the Revenue Motion",
    description:
      "Co-sell playbooks, shared comp, and deal registration that sales actually trusts.",
  },
  {
    icon: LineChart,
    title: "Instrument the Engine",
    description:
      "KPIs, scorecards, and operating cadences that turn partner activity into measurable, board-ready revenue.",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Partner Ecosystem Strategy & Fractional GTM Leadership"
        ogTitle="Partner Ecosystem Strategy & GTM | Shore Strategy"
        description="Partner ecosystem strategy and fractional partner GTM leadership for Series B–D B2B SaaS and AI. Scale partner revenue with enterprise discipline."
        canonical="/"
        schemaJson={{
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
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center overflow-hidden py-10 md:py-14">
        <img
          src="/hero-bg.jpg"
          alt=""
          width="1600"
          height="900"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover bg-navy-dark"
        />
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="relative z-10 container flex-1 flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 w-full">
            <div className="flex-1 text-center md:text-left">
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
                Fractional partner ecosystem leadership for Series B–D B2B SaaS and AI companies — scaling partner revenue with enterprise operator discipline, without the enterprise headcount.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up"
                style={{ animationDelay: "0.45s" }}
              >
                <Link
                  to="/contact#calendly"
                  onClick={() => trackCalendlyClick("cta_click", "/contact#calendly", { location: "hero" })}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
                >
                  <CalendarCheck size={18} /> Book a Discovery Call
                </Link>
              </div>
              <div
                className="mt-4 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <DiscoveryCallReassurance variant="dark" align="left" className="justify-center md:justify-start" />
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
                    alt="Salesforce logo"
                    className="h-6 object-contain opacity-70 brightness-0 invert"
                    src="/lovable-uploads/f6d67dad-429a-49a3-8c20-fff68acb27d4.png"
                    width={80}
                    height={24}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={logoServicenow}
                    alt="ServiceNow logo"
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
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70 text-center mb-4">
            Experience Built At
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <img
              alt="Salesforce logo"
              className="h-6 object-contain opacity-70 brightness-0 invert"
              src="/lovable-uploads/f6d67dad-429a-49a3-8c20-fff68acb27d4.png"
              width={80}
              height={24}
              loading="lazy"
              decoding="async"
            />
            <img
              src={logoServicenow}
              alt="ServiceNow logo"
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
        <div className="container py-5 md:py-7">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-2 font-bold">Enterprise muscle. Right-sized for scale-ups.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs md:text-sm text-primary-foreground/75 uppercase tracking-wider">
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
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-2 font-bold">A Deliberate Choice</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Why Fractional, Why Now
          </h2>
          <div className="font-body text-foreground/80 leading-relaxed space-y-4 text-[15px] md:text-base">
            <p>
              I spent 15+ years inside Salesforce, ServiceNow, and Lumen — running partner programs from the inside, with real P&L, real boards, and ecosystems that scaled past $1.6B ARR. I went fractional because Series B–D B2B SaaS and AI companies need that operator playbook today — but they can't yet justify a $400K+ Head of Partnerships. That's the gap I exist to close.
            </p>
            <p>
              I embed 1–2 days a week, bring the same operator discipline I ran inside, and cost a fraction of the full-time alternative.
            </p>
            <p>
              I'm not a career consultant who's read about partner ecosystems. I've built them, scaled them, and turned them around — with full P&L ownership and board-level accountability. The work I do for clients today is the same work I did as an operator. The only thing that's changed is who signs the contract.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/fractional-vs-consulting-vs-fte"
              className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-dark transition-colors"
            >
              See how fractional compares to consulting and full-time
              <ArrowRight size={16} />
            </Link>
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

      {/* If This Sounds Familiar */}
      <section className="bg-cream py-14 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3 font-bold">When You Bring Me In</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              If This Sounds Familiar...
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed text-[15px] md:text-base">
              Your partners aren't meeting expectations. They're not driving your strategic priorities. The whole motion is running parallel to the business — sales doesn't trust it, product ignores it, marketing works around it. If any of that sounds familiar, here's the work that turns it around.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatIDo.map((item) => (
              <div
                key={item.title}
                className="p-6 md:p-7 rounded-lg border border-border bg-card"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="text-gold" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/how-i-work"
              className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-dark transition-colors"
            >
              See exactly how I work
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
