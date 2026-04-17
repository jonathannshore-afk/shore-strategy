import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FlipCard from "@/components/FlipCard";
import { BarChart3, CalendarCheck, Handshake, Layers, Lightbulb, Target, TrendingUp, Users, Zap } from "lucide-react";

const capabilities = [
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
    title: "Strategic Planning & Alignment",
    desc: "Drive executive alignment on partner strategy, investment priorities, and cross-functional integration with sales, product, and marketing.",
  },
];

const engagementModels = [
  {
    title: "Fractional Leadership",
    desc: "Embedded, part-time executive leadership for companies building or transforming their partner function.",
    fit: "Best for companies that need senior partner strategy leadership without the overhead of a full-time executive.",
    backTitle: "Fractional Leadership",
    timeline: "Ongoing · Part-Time",
    audience: [
      "Mid-Market & Enterprise companies",
      "Scaling founder-led → structured partnerships",
      "Bridging the gap with experienced leadership",
    ],
    outcomes: [
      "Partner strategy & roadmap",
      "Program launch & operationalization",
      "Team hiring & enablement",
      "Executive-level partner engagement",
    ],
  },
  {
    title: "Project-Based Engagement",
    desc: "Scoped, time-bound projects with clear deliverables — program design, GTM planning, operational buildouts.",
    fit: "Best for companies with a specific initiative or transformation in mind.",
    backTitle: "Project-Based",
    timeline: "Fixed Scope · Weeks to Months",
    audience: [
      "Companies with a defined initiative",
      "Pre/post-M&A partner integration",
      "New market or segment launches",
    ],
    outcomes: [
      "Partner program design & launch",
      "GTM strategy & playbooks",
      "Operational infrastructure buildout",
      "Partner segmentation & tiering",
    ],
  },
  {
    title: "Advisory & Coaching",
    desc: "Ongoing strategic guidance for partner leaders navigating complex ecosystem decisions.",
    fit: "Best for existing partnership leaders who want a seasoned sounding board.",
    backTitle: "Advisory & Coaching",
    timeline: "Scheduled Sessions · As Needed",
    audience: [
      "VP/Director-level partner leaders",
      "Founders building partner motions",
      "Teams navigating ecosystem complexity",
    ],
    outcomes: [
      "Strategic sounding board",
      "Board & exec presentation prep",
      "Partner negotiation guidance",
      "Leadership development",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Services"
        description="Partner ecosystem strategy, program design, GTM planning, and revenue acceleration. Explore how Jonathan Shore drives partner-led growth."
        path="/services"
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Capabilities</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            What I <span className="text-gold">Build</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Whether embedded as a fractional leader, engaged on a project, or advising your team — these are the capabilities I bring to drive partner-led growth.
          </p>
        </div>
      </section>

      {/* Featured: Rapid Assessments */}
      <section className="section-padding bg-cream">
        <div className="container max-w-5xl">
          <div className="relative bg-card rounded-lg border border-border border-l-4 border-l-gold shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-gold" size={22} strokeWidth={1.5} />
                  <p className="text-gold font-body text-xs uppercase tracking-[0.2em] font-semibold">
                    Featured Offering
                  </p>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Rapid Assessments
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  30-day partner program audits that identify quick wins, strategic gaps, and a prioritized roadmap for improvement.
                </p>
              </div>
              <div className="md:text-right">
                <Link
                  to="/contact#calendly"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
                >
                  <CalendarCheck size={18} /> Book a Rapid Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all group"
              >
                <cap.icon className="text-gold mb-4" size={36} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{cap.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{cap.desc}</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[380px]">
            {engagementModels.map((model) => (
              <FlipCard
                key={model.title}
                front={
                  <>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">{model.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{model.desc}</p>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider">{model.fit}</p>
                  </>
                }
                back={
                  <>
                    <h3 className="font-display text-base font-semibold text-primary-foreground mb-1">
                      {model.backTitle}
                    </h3>
                    <p className="font-body text-xs text-primary-foreground/50 mb-3">{model.timeline}</p>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-2">Who It's For</p>
                    <ul className="space-y-1 mb-3">
                      {model.audience.map((item, i) => (
                        <li key={i} className="font-body text-xs text-primary-foreground/80 flex gap-2">
                          <span className="text-gold shrink-0">•</span>{item}
                        </li>
                      ))}
                    </ul>
                    <p className="font-body text-xs text-gold font-medium uppercase tracking-wider mb-1">Key Outcomes</p>
                    <ul className="space-y-1">
                      {model.outcomes.map((item, i) => (
                        <li key={i} className="font-body text-xs text-primary-foreground/70 flex gap-2">
                          <span className="text-gold shrink-0">→</span>{item}
                        </li>
                      ))}
                    </ul>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Partner Ecosystem?
          </h2>
          <p className="font-body text-primary-foreground/70 leading-relaxed mb-8">
            Every engagement starts with understanding where you are today and where you need to go.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            <CalendarCheck size={18} /> Book a Call
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
