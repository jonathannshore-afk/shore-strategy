import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Calendar, Mail, MapPin, Linkedin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const CALENDLY_URL = "https://calendly.com/jonathan-n-shore";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  company: z.string().trim().max(100, "Company must be under 100 characters").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof form;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: result.data.name,
        email: result.data.email,
        company: result.data.company || null,
        message: result.data.message,
      });

      if (error) throw error;

      toast({ title: "Message sent!", description: "I'll be in touch within 24 hours." });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field: keyof typeof form) =>
    `w-full px-4 py-3 bg-card border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${
      errors[field] ? "border-destructive focus:ring-destructive/40" : "border-border focus:ring-ring"
    }`;

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Book a call or send a message to discuss your partner ecosystem strategy. Jonathan Shore is available for fractional leadership and consulting engagements."
        path="/contact"
      />

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

      {/* Summary + Calendly side by side */}
      <section id="calendly" className="section-padding bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Summary */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">How I Can Help</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                I partner with B2B SaaS and enterprise technology companies to build, scale, and operationalize partner ecosystems. With deep expertise in strategic alliances, channel programs, and ecosystem go-to-market, I help organizations turn partnerships into a measurable growth engine.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Whether you need a fractional VP of Partnerships or a full-time leader — let's talk. Pick a time that works for you, no commitment required.
              </p>
            </div>

            {/* Calendly */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-gold" size={28} strokeWidth={1.5} />
                <h2 className="font-display text-2xl font-bold text-foreground">Book a Conversation</h2>
              </div>
              <div
                className="calendly-inline-widget rounded-lg overflow-hidden border border-border"
                data-url={`${CALENDLY_URL}?hide_gdpr_banner=1`}
                style={{ minWidth: "320px", height: "630px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Or Send a Message</h2>
              <p className="font-body text-muted-foreground mb-8 text-sm">All fields marked with * are required.</p>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClasses("name")}
                      placeholder="Your name"
                      maxLength={100}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClasses("email")}
                      placeholder="you@company.com"
                      maxLength={255}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClasses("company")}
                    placeholder="Your company"
                    maxLength={100}
                  />
                  {errors.company && <p className="text-destructive text-xs mt-1 font-body">{errors.company}</p>}
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Message *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClasses("message")} resize-none`}
                    placeholder="Tell me about your partnership goals..."
                    maxLength={2000}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && <p className="text-destructive text-xs font-body">{errors.message}</p>}
                    <p className="text-muted-foreground text-xs font-body ml-auto">{form.message.length}/2000</p>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                    <a href="mailto:jonathan@shore-strategy.com?subject=Partner%20Strategy%20Inquiry" className="font-body text-muted-foreground hover:text-gold transition-colors">
                      jonathan@shore-strategy.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Linkedin className="text-gold mt-1" size={22} />
                  <div>
                    <div className="font-body font-semibold text-foreground">LinkedIn</div>
                    <a
                      href="https://linkedin.com/in/jonathanshore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-muted-foreground hover:text-gold transition-colors"
                    >
                      linkedin.com/in/jonathanshore
                    </a>
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
