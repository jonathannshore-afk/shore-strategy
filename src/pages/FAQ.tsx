import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackCalendlyClick } from "@/lib/calendlyTracking";

type QA = { q: string; a: string };

const engagementFaqs: QA[] = [
  {
    q: "How do I know if fractional or project-based is right for us?",
    a: "Fractional fits when you need an ongoing leader in the seat but the role doesn't yet justify a full-time hire. Project-based fits when the work is well-defined and time-bound — a launch, a segmentation, a post-M&A integration. If you're weighing fractional against a consulting firm or a full-time hire, the comparison guide walks through it side by side. If you're unsure, the first conversation should be about scoping.",
  },
  {
    q: "How long do engagements typically run?",
    a: "Fractional engagements start with a 3–6 month term and continue as long as they're creating value. Project-based runs a few weeks to a few months. Advisory is scheduled monthly or as needed, with no fixed end date.",
  },
  {
    q: "Can engagements evolve over time?",
    a: "Yes — often. A project can extend into fractional leadership; a fractional engagement can shift to advisory once a full-time leader is ramped. The model matches where the business is.",
  },
  {
    q: "Do you work with companies outside B2B technology?",
    a: "My deepest experience is B2B technology — SaaS, cloud, infrastructure, enterprise software. The frameworks travel to adjacent industries with strong channel or alliance components, but B2B tech is where I add leverage fastest.",
  },
];

const modelFaqs: QA[] = [
  {
    q: "What does a fractional partner leader actually cost?",
    a: "Fractional engagements are scoped per company, but the structure is always a monthly retainer for one to two days per week, with a six-month minimum. The all-in cost lands well below a full-time VP and well below a typical consulting project — the exact number depends on scope, stage, and how much of the work I'm leading versus advising on. I'll quote it on the discovery call once I understand the shape of the engagement.",
  },
  {
    q: "How is fractional different from advisory or coaching?",
    a: "Advisory is a thinking partner — scheduled sessions, you do the work. Fractional is in the seat — I own outcomes, run the cadence, sit in your QBRs, and represent partnerships in your exec meetings. Both have a place. If you have a strong head of partnerships who needs a sounding board, advisory is the right shape. If the seat is empty, or the person in it needs a more senior operator alongside them, fractional fits.",
  },
  {
    q: "Can I start fractional and convert to a full-time hire later?",
    a: "Yes, and that's often the cleanest path. A common pattern: I run the function for six to nine months, build the program, hire the full-time leader, and stay on briefly to ramp them. You get senior leadership immediately, a working program, and a successor who inherits something real instead of starting from zero.",
  },
  {
    q: "Why not just hire a Big-4 firm if budget allows?",
    a: "If you need a board-ready transformation deck with benchmarking and executive air cover, a Big-4 firm is well-suited. If you need someone to run partner QBRs next Thursday, design deal registration, and sit across from your top reseller's CRO, you need an operator. Firms produce strategy. Fractional produces pipeline. Different jobs.",
  },
  {
    q: "When is it too early to bring anyone in?",
    a: "Before product-market fit, before you have a repeatable direct sales motion, and before you can name the partner archetype you actually need — it's too early. Partner ecosystems amplify what's already working. They don't fix a broken core motion. If you're not sure where you are, that's a good first conversation.",
  },
];

const discoveryFaqs: QA[] = [
  {
    q: "What happens during the 30-minute discovery call?",
    a: "We start with a quick picture of your current partner ecosystem — what's working, where revenue is getting stuck, and what outcomes you're driving toward. I'll share a point of view on the highest-leverage moves. If there's a fit, we'll outline what a focused engagement could look like. If not, you'll still leave with clarity.",
  },
  {
    q: "Who should join the call?",
    a: "Revenue leaders, partnership executives, or founders building partner-led growth. If you own or influence ecosystem strategy — co-sell, channel, ISV, or alliance programs — this call is built for you.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "No prep required. I keep these calls conversational and lightweight. Just show up ready to talk about your ecosystem — or what's missing from it.",
  },
  {
    q: "Is there any obligation to engage?",
    a: "Zero. I take calls even when there's no immediate engagement — because ecosystems are complex and leaders often just need a clear point of view. You'll get honest input, not a sales pitch.",
  },
  {
    q: "What are the next steps after the call?",
    a: "If the conversation clicks, I'll send a short engagement proposal tailored to your stage and goals. From there, we align on scope, timeline, and the first deliverable. Most engagements kick off within one to two weeks.",
  },
];

const sections: { title: string; eyebrow: string; items: QA[] }[] = [
  { eyebrow: "Engagement Models", title: "Working Together", items: engagementFaqs },
  { eyebrow: "Fractional vs. Firm vs. FTE", title: "Choosing the Right Model", items: modelFaqs },
  { eyebrow: "Discovery Call", title: "About the 30-Minute Call", items: discoveryFaqs },
];

const allFaqs = [...engagementFaqs, ...modelFaqs, ...discoveryFaqs];

const FAQ = () => {
  return (
    <Layout>
      <SEOHead
        title="FAQ — Fractional Partner Leadership"
        description="Answers on engagement models, fractional vs. consulting vs. full-time hires, timelines, cost, and what to expect from the discovery call."
        canonical="/faq"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Hero */}
      <section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">FAQ</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Common <span className="text-gold">Questions</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Engagement models, timelines, cost, and how to think about fit — straight answers, no fluff.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      {sections.map((section, idx) => (
        <section
          key={section.eyebrow}
          className={`px-6 py-12 md:px-12 lg:px-24 lg:py-16 ${idx % 2 === 0 ? "bg-cream" : "bg-background"} ${idx > 0 ? "border-t border-gold/20" : ""}`}
        >
          <div className="container max-w-3xl">
            <div className="mb-8">
              <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">{section.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{section.title}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {section.items.map((item, i) => (
                <AccordionItem key={i} value={`${section.eyebrow}-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-foreground hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy py-14 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Still have a question?
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            The discovery call is the fastest way to get a straight answer on whether — and how — I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#calendly"
              onClick={() => trackCalendlyClick("cta_click", "/contact#calendly", { location: "faq_page_footer" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
            >
              <CalendarCheck size={18} /> Book a Discovery Call
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
            >
              Contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
