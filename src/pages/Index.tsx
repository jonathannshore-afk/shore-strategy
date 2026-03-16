import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, ClipboardCheck, Handshake, Rocket, Search, Target, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import headshot from "@/assets/jonathan-headshot.jpeg";
import logoSalesforce from "@/assets/logo-salesforce.png";
import logoServicenow from "@/assets/logo-servicenow.svg";
import logoLumen from "@/assets/logo-lumen.png";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const stats = [
{ value: "$1.6B", label: "Partner Ecosystem Managed" },
{ value: "$800M+", label: "Annual Bookings Influenced" },
{ value: "2K+", label: "Partners Across Ecosystems" },
{ value: "15+", label: "Years of Experience" }];


const methodology = [
{
  step: "01",
  icon: Search,
  title: "Assess",
  desc: "Deep-dive into your current partner landscape, GTM motion, and ecosystem maturity to identify gaps and opportunities."
},
{
  step: "02",
  icon: Target,
  title: "Strategize",
  desc: "Design a tailored partner strategy with clear routes-to-market, partner tiers, incentive models, and joint value propositions."
},
{
  step: "03",
  icon: ClipboardCheck,
  title: "Execute",
  desc: "Build the operational playbooks, launch partner motions, negotiate agreements, and stand up enablement frameworks."
},
{
  step: "04",
  icon: Rocket,
  title: "Scale",
  desc: "Optimize for growth with performance analytics, coverage models, and continuous program iteration to compound results."
}];


const services = [
{
  icon: Handshake,
  title: "Partner Strategy",
  desc: "Design and implement partner programs that align with your growth objectives and market positioning."
},
{
  icon: Target,
  title: "GTM Planning",
  desc: "Build joint go-to-market plans with clear milestones, co-sell motions, and measurable outcomes."
},
{
  icon: TrendingUp,
  title: "Revenue Acceleration",
  desc: "Optimize partner-sourced and partner-influenced revenue through data-driven engagement models."
},
{
  icon: Users,
  title: "Ecosystem Development",
  desc: "Cultivate technology and services ecosystems that create compounding value for all stakeholders."
}];


const highlights = [
{
  stat: "19% YoY Growth",
  desc: "Reversed multi-year channel sales decline at Lumen Technologies while reducing OpEx by 20%."
},
{
  stat: "$12M ARR in Year One",
  desc: "Built and launched a new ISV partner motion from scratch, establishing the foundation for future ecosystem expansion."
}];


const Index = () => {
  return (
    <Layout>
      <SEO
        title="Partner Ecosystem Strategy Executive"
        description="Jonathan Shore helps founders, CEOs, and CROs build, fix, and scale partner ecosystems that drive measurable revenue growth. 15+ years at Salesforce, ServiceNow, and Lumen."
        path="/" />
      
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
              url: "https://www.linkedin.com/in/jonathan-shore/"
            },
            url: "https://shorestrategy.com",
            serviceType: [
            "Partner Strategy Consulting",
            "GTM Planning",
            "Revenue Acceleration",
            "Ecosystem Development"]

          })
        }} />
      
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }} />
        
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="relative z-10 container flex-1 flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full">
            <div className="flex-1 text-center md:text-left">
              <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
                ex-Salesforce · ServiceNow · Lumen Technologies
              </p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                Jonathan
                <br />
                <span className="text-gold">Shore</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                I am a Partner Ecosystem Strategist with 15+ years of experience building global alliances and partner routes-to-market across enterprise technology companies.
              </p>
              <p className="font-body text-base text-gold/80 max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
                Available for Partner Strategy Consulting, Fractional Leadership, and Full-Time opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors">
                  
                  <CalendarCheck size={18} /> Book a Call
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors">
                  
                  My Background
                </Link>
              </div>
            </div>
            <div className="hidden md:block w-64 lg:w-72 shrink-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <img
                src={headshot}
                alt="Jonathan Shore"
                className="w-full rounded-lg shadow-2xl border-2 border-gold/20" />
              
            </div>
          </div>
        </div>
        <div className="relative z-10 container pb-8 pt-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/40 text-center mb-5">
            Experience Built At
          </p>
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            <img alt="Salesforce" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert" src="/lovable-uploads/f6d67dad-429a-49a3-8c20-fff68acb27d4.png" />
            <img src={logoServicenow} alt="ServiceNow" className="h-8 md:h-10 object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert" />
            <img src={logoLumen} alt="Lumen Technologies" className="h-8 md:h-10 object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert" />
          </div>
        </div>
      </section>
          <div className="border-t border-primary-foreground/10 pt-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) =>
              <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="font-body text-sm text-primary-foreground/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="section-padding bg-background">
        <div className="container text-center max-w-3xl">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Who I Work With</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built for Leadership Teams
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            I partner with <span className="text-foreground font-semibold">founders, CEOs, CROs, and VP-level partnership leaders</span> at B2B SaaS and enterprise technology companies — from Series B startups building their first partner motion to established enterprises transforming legacy channel programs.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">My Methodology</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              A Proven Process for Partner-Led Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step) =>
            <div key={step.step} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all group text-center">
                <div className="font-display text-5xl font-bold text-gold/20 mb-4">{step.step}</div>
                <step.icon className="text-gold mx-auto mb-4" size={36} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">What I Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              How I Can Help Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) =>
            <div
              key={service.title}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow group">
              
                <service.icon className="text-gold mb-4" size={36} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            )}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:text-gold-dark transition-colors">
              
              See All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Proven Results</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Real-World Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map((h) =>
            <div key={h.stat} className="bg-card p-8 rounded-lg border border-border">
                <div className="font-display text-3xl font-bold text-gold mb-3">{h.stat}</div>
                <p className="font-body text-foreground/80 leading-relaxed">{h.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-padding">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Looking for a Partner Ecosystem Leader?
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
            I'm available for fractional or full-time partner strategy roles. Let's talk about how I can help accelerate your partner-led growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors">
              
              <CalendarCheck size={18} /> Book a Call
            </Link>
            <a
              href="https://www.linkedin.com/in/jonathan-shore/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors">
              
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Layout>);

};

export default Index;