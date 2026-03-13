import Layout from "@/components/Layout";
import { Award, BookOpen, Compass, Linkedin, Shield } from "lucide-react";
import headshot from "@/assets/jonathan-headshot.jpeg";

const values = [
  { icon: Compass, title: "Strategic Clarity", desc: "Cutting through complexity to deliver focused, actionable strategies that drive measurable outcomes." },
  { icon: Shield, title: "Trusted Partnership", desc: "Operating as an extension of your team, fully invested in your success at every stage." },
  { icon: Award, title: "Proven Results", desc: "Every engagement is anchored to measurable business outcomes — from revenue growth to operational efficiency." },
  { icon: BookOpen, title: "Deep Expertise", desc: "15+ years across Salesforce, ServiceNow, and Lumen building and scaling partner ecosystems." },
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
    ],
  },
  {
    company: "ServiceNow",
    role: "Chief of Staff, Strategy & Planning — Global Partnerships",
    period: "2023 – 2024",
    highlights: [
      "Led strategy and operations delivering $1B+ influenced revenue and 110% quota attainment",
      "Architected Top 250 Accounts partner strategy with GSIs, increasing joint pipeline by 20%",
    ],
  },
  {
    company: "Salesforce",
    role: "Senior Manager → Manager, Strategy & Operations",
    period: "2012 – 2023",
    highlights: [
      "Led strategy for a 300+ person consulting org generating $100M revenue, influencing $800M+ bookings",
      "Managed $3B services ecosystem across 50 GSI/RSI partners, driving 40% YoY growth",
      "Led cross-functional planning for a 400-person sales org, delivering 30% YoY growth",
    ],
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">About</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Meet <span className="text-gold">Jonathan Shore</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Partner Ecosystem Strategy & Operations executive with 15+ years driving growth through strategic partner ecosystems at Salesforce, ServiceNow, and Lumen Technologies.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 shrink-0">
              <img
                src={headshot}
                alt="Jonathan Shore — Founder, Shore Strategy Consulting"
                className="w-full rounded-lg shadow-lg border border-border"
              />
            </div>
            <div className="md:w-2/3">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">The Story</h2>
          <div className="font-body text-foreground/80 leading-relaxed space-y-4">
            <p>
              After 15+ years building and leading partner programs at some of the world's most influential enterprise technology companies — including Salesforce, ServiceNow, and Lumen Technologies — I founded Shore Strategy Consulting to help B2B companies unlock the full power of strategic partnerships.
            </p>
            <p>
              I've led ecosystem strategy and operations across businesses ranging from $100M consulting organizations to $1.6B partner ecosystems, influencing $800M+ in annual bookings and securing executive alignment for major ecosystem transformation initiatives. My work has consistently delivered measurable results: reversing multi-year revenue declines, launching new routes-to-market, and building partner programs from the ground up.
            </p>
            <p>
              Shore Strategy Consulting was born from a clear insight: companies recognize the power of partnerships but often lack the strategic frameworks and operational rigor to fully capitalize on them. I bring practitioner-level experience to every engagement — not theory, but battle-tested playbooks that scale.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/jonathan-shore/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-gold font-body font-semibold hover:text-gold-dark transition-colors"
          >
            <Linkedin size={18} /> Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-cream">
        <div className="container max-w-3xl">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Track Record</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">Career Experience</h2>
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

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Guiding Principles</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Guides My Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <v.icon className="text-gold mx-auto mb-4" size={40} strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Affiliations */}
      <section className="section-padding bg-cream">
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
