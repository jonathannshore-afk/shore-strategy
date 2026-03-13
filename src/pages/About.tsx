import Layout from "@/components/Layout";
import { Award, BookOpen, Compass, Shield } from "lucide-react";

const values = [
  { icon: Compass, title: "Strategic Clarity", desc: "We cut through complexity to deliver focused, actionable strategies." },
  { icon: Shield, title: "Trusted Partnership", desc: "We operate as an extension of your team, fully invested in your success." },
  { icon: Award, title: "Proven Results", desc: "Every engagement is anchored to measurable business outcomes." },
  { icon: BookOpen, title: "Deep Expertise", desc: "Decades of experience across SaaS, cloud, and enterprise ecosystems." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Charting the Course for <span className="text-gold">Partner Success</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Shore Strategy Consulting was founded on a simple belief: the most resilient growth comes from well-designed partner ecosystems. We bring decades of practitioner experience to every engagement.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="font-body text-foreground/80 leading-relaxed space-y-4">
            <p>
              After two decades building and leading partner programs at some of the world's most innovative technology companies, we saw a recurring gap: companies recognized the power of partnerships but lacked the strategic frameworks to fully capitalize on them.
            </p>
            <p>
              Shore Strategy Consulting was born to fill that gap. We combine deep operational experience with strategic rigor to help B2B companies design, launch, and scale partner-led go-to-market motions that drive sustainable, compounding growth.
            </p>
            <p>
              Our name reflects our approach — like a shoreline that shapes the landscape through persistent, strategic forces, we help organizations build partnerships that create lasting competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Our Values</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Guides Us</h2>
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
    </Layout>
  );
};

export default About;
