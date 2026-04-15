import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CalendarCheck, Linkedin, Handshake, BarChart3, Heart, Cog, Zap, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import headshot from "@/assets/jonathan-headshot.jpeg";
import logoSalesforce from "@/assets/logo-salesforce.png";
import logoServicenow from "@/assets/logo-servicenow.png";
import logoLumen from "@/assets/logo-lumen.png";
import SEO from "@/components/SEO";
import StatsMarquee from "@/components/StatsMarquee";
import ExpertiseRadar from "@/components/ExpertiseRadar";

const experience = [
  {
    company: "Lumen Technologies",
    logo: logoLumen,
    role: "Senior Director, Partner Ecosystem Strategy",
    period: "2024 – 2026",
    highlights: [
      "Led partner ecosystem transformation across $1.6B ARR and 2K+ partners",
      "Reversed multi-year channel sales decline, delivering 19% YoY growth and 20% OpEx reduction",
      "Built and launched ISV partner motion, scaling to $12M ARR in the first 12 months",
      "Designed and launched Lumen's first tiered partner program with certification framework",
    ],
  },
  {
    company: "ServiceNow",
    logo: logoServicenow,
    role: "Chief of Staff, Strategy & Planning — Global Partnerships",
    period: "2023 – 2024",
    highlights: [
      "Led strategy and operations delivering $1B+ influenced revenue and 110% quota attainment",
      "Architected Top 250 Accounts partner strategy with GSIs, increasing joint pipeline by 20%",
      "Designed unified partner GTM strategy aligning partnerships with core business units",
    ],
  },
  {
    company: "Salesforce",
    logo: logoSalesforce,
    role: "Senior Manager → Analyst, Strategy & Operations",
    period: "2012 – 2023",
    highlights: [
      "Led strategy for a 300+ person consulting org generating $100M revenue, influencing $800M+ bookings",
      "Managed $3B services ecosystem across 50 GSI/RSI partners, driving 40% YoY growth and 120% quota attainment",
      "Led cross-functional planning for a 400-person sales org, delivering 30% YoY growth",
    ],
  },
];


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
const About = () => {
  return (
    <Layout>
      <SEO
        title="About Jonathan Shore"
        description="15+ years leading partner ecosystems at Salesforce, ServiceNow, and Lumen Technologies. Learn about Jonathan Shore's background, experience, and approach."
        path="/about"
      />

      {/* Hero — Photo right, intro left + logos */}
      <section className="bg-navy section-padding pb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="pt-2">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                About <span className="text-gold">Jonathan</span>
              </h1>
              <p className="font-body text-lg text-primary-foreground/80 leading-relaxed">
                15+ years building and transforming partner ecosystems at Salesforce, ServiceNow, and Lumen Technologies. I help B2B leaders unlock partner-led revenue through strategic consulting and fractional executive leadership.
              </p>

              <div className="border-t border-primary-foreground/15 mt-6 mb-6" />

              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
                  Experience Built At
                </p>
                <div className="flex items-center gap-8 flex-wrap">
                  <img src={logoSalesforce} alt="Salesforce" className="h-8 md:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity brightness-0 invert" />
                  <img src={logoServicenow} alt="ServiceNow" className="h-6 md:h-8 object-contain opacity-60 hover:opacity-100 transition-opacity brightness-0 invert" />
                  <img src={logoLumen} alt="Lumen Technologies" className="h-6 md:h-8 object-contain opacity-60 hover:opacity-100 transition-opacity brightness-0 invert" />
                </div>
              </div>

              <div className="border-t border-primary-foreground/15 mt-6 mb-6" />

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
                >
                  <CalendarCheck size={16} /> Book a Call
                </Link>
                <a
                  href="https://www.linkedin.com/in/jonathan-shore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={headshot}
                alt="Jonathan Shore"
                className="w-full max-w-[360px] md:max-w-[420px] rounded-lg shadow-lg border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Marquee */}
      <StatsMarquee />

      {/* My Story + Experience */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">My Story</h2>
              <div className="font-body text-foreground/80 leading-relaxed space-y-3 text-[15px]">
                <p>
                  I've spent the last 15+ years building and leading partner programs at some of the world's most influential enterprise technology companies — Salesforce, ServiceNow, and most recently Lumen Technologies, where I led ecosystem strategy across a $1.6B ARR partner business.
                </p>
                <p>
                  My experience spans the full spectrum: designing partner programs from scratch, launching new routes-to-market (ISV, SI, VAR), transforming operating models, and scaling ecosystems that influence hundreds of millions in revenue.
                </p>
                <p>
                  I'm now channeling that practitioner-level experience into fractional leadership engagements — helping B2B companies build the strategic frameworks and operational muscle they need to unlock partner-led growth.
                </p>
                <p className="text-foreground/50 italic text-sm mt-2">
                  For the right opportunity, I'm also open to full-time leadership roles.
                </p>
              </div>
            </div>
            <div>
              <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Experience</p>
              <Accordion type="single" collapsible className="space-y-2">
                {experience.map((exp) => (
                  <AccordionItem key={exp.company} value={exp.company} className="bg-card rounded-lg border border-border px-5">
                    <AccordionTrigger className="py-3 hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <img src={exp.logo} alt={exp.company} className="h-6 w-auto object-contain shrink-0 opacity-70" />
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="font-display text-base font-semibold text-foreground">{exp.company}</h3>
                            <span className="font-body text-xs text-muted-foreground">{exp.period}</span>
                          </div>
                          <p className="font-body text-gold text-sm font-medium">{exp.role}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pb-2">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="font-body text-sm text-foreground/80 leading-relaxed flex gap-2">
                            <span className="text-gold mt-1.5 shrink-0">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>


      {/* Leadership Philosophy */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-cream">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-2">How I Lead</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Leadership Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="group bg-card p-6 rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <p.icon className="text-gold" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
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

      {/* Core Competencies — Radar Only */}
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-16 bg-background">
        <div className="container max-w-lg">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-2 text-center">Expertise</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">Core Competencies</h2>
          <ExpertiseRadar variant="light" />
        </div>
      </section>

    </Layout>
  );
};

export default About;
