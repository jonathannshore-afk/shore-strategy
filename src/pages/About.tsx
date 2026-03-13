import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, CalendarCheck, Linkedin } from "lucide-react";
import headshot from "@/assets/jonathan-headshot.jpeg";
import logoSalesforce from "@/assets/logo-salesforce.png";
import logoServicenow from "@/assets/logo-servicenow.png";
import logoLumen from "@/assets/logo-lumen.png";
import SEO from "@/components/SEO";

const careerHighlights = [
  { value: "15+", label: "Years in Partner Ecosystem Strategy & Operations" },
  { value: "$1.6B", label: "ARR Partner Ecosystem Managed at Lumen" },
  { value: "$800M+", label: "Annual Bookings Influenced at Salesforce" },
  { value: "2K+", label: "Partners Across Managed Ecosystems" },
  { value: "19%", label: "YoY Revenue Growth After Reversing Decline" },
  { value: "$12M", label: "ARR Built From New ISV Motion in Year One" },
];

const experience = [
  {
    company: "Lumen Technologies",
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
    role: "Senior Manager → Analyst, Strategy & Operations",
    period: "2012 – 2023",
    highlights: [
      "Led strategy for a 300+ person consulting org generating $100M revenue, influencing $800M+ bookings",
      "Managed $3B services ecosystem across 50 GSI/RSI partners, driving 40% YoY growth and 120% quota attainment",
      "Led cross-functional planning for a 400-person sales org, delivering 30% YoY growth",
    ],
  },
];

const competencies = [
  "Partner Ecosystem Strategy",
  "Channel & Partner GTM",
  "Partner Program Design",
  "ISV / SI / VAR Ecosystem Development",
  "Routes-to-Market Strategy",
  "Operating Model Transformation",
  "Revenue Growth Strategy",
  "Business Planning & Forecasting",
  "Executive Advisory",
  "Cross-Functional Leadership",
];

const About = () => {
  return (
    <Layout>
      {/* Hero — KFlynn inspired */}
      <section className="bg-navy section-padding">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            About <span className="text-gold">Jonathan</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            I work directly with founders, CEOs, and CROs to bring structure, strategy, and senior leadership to their partner ecosystem motion.
          </p>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="bg-background border-b border-border">
        <div className="container py-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-8">
            Experience Built At
          </p>
          <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
            <img src={logoSalesforce} alt="Salesforce" className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={logoServicenow} alt="ServiceNow" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={logoLumen} alt="Lumen Technologies" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Career Highlights — KFlynn stat cards */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Career Highlights</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">By the Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="md:row-span-3 flex items-center justify-center">
              <img
                src={headshot}
                alt="Jonathan Shore"
                className="w-full max-w-[280px] rounded-lg shadow-lg border border-border"
              />
            </div>
            {careerHighlights.map((h) => (
              <div
                key={h.label}
                className="bg-card p-6 rounded-lg border border-border flex items-start gap-4"
              >
                <span className="font-display text-3xl font-bold text-gold shrink-0">{h.value}</span>
                <span className="font-body text-sm text-muted-foreground leading-relaxed pt-1">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-cream">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">My Story</h2>
          <div className="font-body text-foreground/80 leading-relaxed space-y-4">
            <p>
              I've spent the last 15+ years building and leading partner programs at some of the world's most influential enterprise technology companies — Salesforce, ServiceNow, and most recently Lumen Technologies, where I led ecosystem strategy across a $1.6B ARR partner business.
            </p>
            <p>
              My experience spans the full spectrum: designing partner programs from scratch, launching new routes-to-market (ISV, SI, VAR), transforming operating models, and scaling ecosystems that influence hundreds of millions in revenue. I've consistently delivered results — reversing revenue declines, driving double-digit growth, and securing executive alignment for major transformation initiatives.
            </p>
            <p>
              I'm now channeling that practitioner-level experience into fractional leadership engagements — helping B2B companies build the strategic frameworks and operational muscle they need to unlock partner-led growth. I'm also open to the right full-time opportunity where I can build and lead a partner ecosystem at scale.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
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
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Where I've Built</h2>
          <div className="space-y-10">
            {experience.map((exp) => (
              <div key={exp.company} className="bg-card p-8 rounded-lg border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">{exp.company}</h3>
                  <span className="font-body text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="font-body text-gold text-sm font-medium mb-4">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="font-body text-sm text-foreground/80 leading-relaxed flex gap-2">
                      <span className="text-gold mt-1.5 shrink-0">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="section-padding bg-cream">
        <div className="container max-w-3xl">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Expertise</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Core Competencies</h2>
          <div className="flex flex-wrap gap-3">
            {competencies.map((c) => (
              <span
                key={c}
                className="px-4 py-2 bg-card border border-border rounded-full font-body text-sm text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Affiliations */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Education</h3>
              <p className="font-body text-foreground/80">
                <span className="font-semibold">B.S. Business Administration</span>
                <br />
                Finance & Accounting
                <br />
                California State University, Chico
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Industry Affiliations</h3>
              <p className="font-body text-foreground/80">Partnership Leaders — Member</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
