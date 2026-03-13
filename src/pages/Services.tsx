import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, BarChart3, Handshake, Layers, Lightbulb, Target, TrendingUp, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Handshake,
    title: "Partner Program Design",
    desc: "Architect partner programs from the ground up — tier structures, incentive models, enablement frameworks, and operational playbooks tailored to your market.",
  },
  {
    icon: Target,
    title: "Joint GTM Strategy",
    desc: "Develop co-sell and co-market strategies with clear value propositions, target account alignment, and joint pipeline creation motions.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Acceleration",
    desc: "Optimize partner-sourced and partner-influenced revenue through data-driven engagement models and pipeline analytics.",
  },
  {
    icon: Users,
    title: "Ecosystem Development",
    desc: "Build and nurture technology, services, and channel ecosystems that create compounding value for all stakeholders.",
  },
  {
    icon: Layers,
    title: "Partner Operations",
    desc: "Implement scalable partner operations — PRM systems, deal registration, MDF programs, and reporting infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Design KPI frameworks and dashboards that give you clear visibility into partner contribution and program ROI.",
  },
  {
    icon: Lightbulb,
    title: "Fractional Partner Leadership",
    desc: "Step in as your fractional VP/Director of Partnerships — leading strategy, building teams, and driving execution while you hire for the long term.",
  },
  {
    icon: Zap,
    title: "Rapid Assessments",
    desc: "30-day partner program audits that identify quick wins, strategic gaps, and a prioritized roadmap for improvement.",
  },
];

const engagementModels = [
  {
    title: "Fractional Leadership",
    desc: "Embedded, part-time executive leadership for companies building or transforming their partner function.",
    fit: "Best for companies that need senior partner strategy leadership but aren't ready for a full-time hire.",
  },
  {
    title: "Project-Based Engagement",
    desc: "Scoped, time-bound projects with clear deliverables — program design, GTM planning, operational buildouts.",
    fit: "Best for companies with a specific initiative or transformation in mind.",
  },
  {
    title: "Advisory & Coaching",
    desc: "Ongoing strategic guidance for partner leaders navigating complex ecosystem decisions.",
    fit: "Best for existing partnership leaders who want a seasoned sounding board.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            How I Can <span className="text-gold">Help</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            From fractional leadership to focused project work, I bring hands-on expertise to help you build, fix, or scale your partner ecosystem.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all group"
              >
                <service.icon className="text-gold mb-4" size={36} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Ways to Work Together</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Engagement Models</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {engagementModels.map((model) => (
              <div key={model.title} className="bg-card p-8 rounded-lg border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{model.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{model.desc}</p>
                <p className="font-body text-xs text-gold font-medium uppercase tracking-wider">{model.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-padding">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
            Let's have a conversation. I'll help you identify the highest-impact opportunities for your partner program — no commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
