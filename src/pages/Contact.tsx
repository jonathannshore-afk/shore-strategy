import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CALENDLY_URL = "https://calendly.com/jonathan-n-shore";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "I'll be in touch within 24 hours." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's <span className="text-gold">Connect</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Whether you're looking for a fractional partner leader, exploring a full-time opportunity, or just want to exchange ideas — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Calendly */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-10">
            <Calendar className="text-gold mx-auto mb-4" size={36} strokeWidth={1.5} />
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Book a Conversation</h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Pick a time that works for you — no commitment, just a conversation about how I can help.
            </p>
          </div>
          <div
            className="calendly-inline-widget rounded-lg overflow-hidden border border-border"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1`}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Or Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your partnership goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Direct Contact</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-gold mt-1" size={22} />
                  <div>
                    <div className="font-body font-semibold text-foreground">Email</div>
                    <div className="font-body text-muted-foreground">jonathan.n.shore@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1" size={22} />
                  <div>
                    <div className="font-body font-semibold text-foreground">Phone</div>
                    <div className="font-body text-muted-foreground">(415) 471-4332</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1" size={22} />
                  <div>
                    <div className="font-body font-semibold text-foreground">Location</div>
                    <div className="font-body text-muted-foreground">San Francisco Bay Area</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
