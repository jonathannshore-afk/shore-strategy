import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Check, Minus, X } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { trackCalendlyClick } from "@/lib/calendlyTracking";

const columns = [
  {
    key: "fractional",
    name: "Fractional Operator",
    tag: "Senior leader, part-time",
    accent: true,
  },
  {
    key: "consulting",
    name: "Consulting Firm",
    tag: "Project-based engagement",
    accent: false,
  },
  {
    key: "fte",
    name: "Full-Time Hire",
    tag: "Permanent VP / Head of",
    accent: false,
  },
];

const rows: { label: string; values: [string, string, string] }[] = [
  { label: "Time to value", values: ["2–4 weeks", "6–10 weeks", "4–6 months"] },
  { label: "Commitment", values: ["1–2 days / week", "Project SOW", "5 days / week"] },
  { label: "Typical cost", values: ["$$", "$$$$", "$$$$ + equity"] },
  { label: "Who does the work", values: ["The person you hired", "Partner sells, juniors deliver", "Hired leader (eventually)"] },
  { label: "Operator P&L experience", values: ["Yes", "Rarely", "Yes"] },
  { label: "Stays after delivery", values: ["Optional", "No", "Yes"] },
  { label: "Ramp risk", values: ["Low", "Low (on the deck)", "High"] },
  { label: "Best for stage", values: ["Series A–C, PE-backed scale-ups", "Enterprise transformation", "Public co or mature scale-up"] },
  { label: "Worst fit", values: ["You need someone 5 days/week", "You need an operator in the seat", "Pre-product-market-fit"] },
];

const tradeoffs = [
  {
    title: "Where a full-time hire wins",
    body: "A full-time VP is the right answer when partner revenue is core to your three-year plan and the role genuinely needs forty hours a week. You get a permanent leader who builds the team, owns the equity story, and lives inside every cross-functional conversation. The tradeoff is real: $400K+ all-in once you add base, bonus, equity, and benefits — and four to six months to source, sign, and ramp. If the hire misses, you've burned a year and the program is further behind than when you started.",
  },
  {
    title: "Where a consulting firm wins",
    body: "Big-name consulting firms are built for board-mandated transformations with executive air cover. They bring benchmarking data across many companies, a polished narrative, and a senior partner who can sit across from your CEO. That's worth real money — typically $250K–$500K+ per project. The tradeoff is who actually does the work: the partner sells, and a team of analysts builds the deck. When they leave, the deliverable is a strategy document, not a running operating cadence. If you need a deck to align the board, that's a fit. If you need pipeline, it isn't.",
  },
  {
    title: "Where fractional wins",
    body: "Fractional is built for the gap between \"too early for a $400K hire\" and \"too late for a one-time consulting project.\" You get a senior operator in the seat in week one — one to two days a week, at a fraction of FTE cost — running the same playbook they ran inside Salesforce, ServiceNow, or Lumen. The person you meet on the discovery call is the person doing the work. The tradeoff: it's not full-time. If the role truly requires forty hours a week of attention, fractional is the wrong shape.",
  },
];

const Cell = ({ value, accent }: { value: string; accent: boolean }) => {
  if (value === "Yes") return <Check className={accent ? "text-gold" : "text-foreground/70"} size={18} strokeWidth={2.5} />;
  if (value === "No") return <X className="text-muted-foreground/50" size={18} strokeWidth={2.5} />;
  if (value === "Rarely") return <Minus className="text-muted-foreground/60" size={18} strokeWidth={2.5} />;
  return <span className={`font-body text-sm ${accent ? "text-foreground font-medium" : "text-foreground/80"}`}>{value}</span>;
};

const FractionalVsConsultingVsFte = () => {
  return (
    <Layout>
      <SEOHead
        title="Fractional vs. Consulting vs. Full-Time Partner Leader"
        description="Comparing fractional, consulting firm, and full-time hire models for partner ecosystem leadership in B2B tech. Cost, time to value, and when each one wins."
        canonical="/fractional-vs-consulting-vs-fte"
        type="article"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Fractional vs. Consulting vs. Full-Time Partner Leader",
            description:
              "A decision guide comparing fractional operators, consulting firms, and full-time hires for partner ecosystem leadership.",
            author: {
              "@type": "Person",
              name: "Jonathan Shore",
              url: "https://www.linkedin.com/in/jonathan-shore/",
            },
            publisher: {
              "@type": "Organization",
              name: "Shore Strategy",
            },
            datePublished: "2026-05-17",
            dateModified: "2026-05-17",
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Decision Guide</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 max-w-3xl">
            Fractional vs. Consulting Firm vs. <span className="text-gold">Full-Time Hire</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Three ways to add senior partner leadership. Here's how to pick — written by someone who's been hired under all three models.
          </p>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/50 mt-6">
            6 min read · Updated May 2026
          </p>
        </div>
      </section>

      {/* TL;DR band */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { tag: "Hire FTE when…", body: "the role is permanent, scoped for a single company, and you can wait 4–6 months to ramp." },
              { tag: "Retain a firm when…", body: "the work is a one-time transformation and the deliverable is a strategy deck." },
              { tag: "Go fractional when…", body: "you need senior operator judgment in the seat, but not 5 days a week." },
            ].map((c) => (
              <div key={c.tag} className="bg-card p-6 rounded-lg border border-border">
                <p className="text-gold font-body text-xs uppercase tracking-[0.2em] mb-3">{c.tag}</p>
                <p className="font-body text-foreground/80 leading-relaxed text-[15px]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-cream py-12 md:py-16 border-t border-gold/20">
        <div className="container max-w-5xl">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Side by Side</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">The Comparison</h2>
            <p className="font-body text-muted-foreground mt-2 max-w-2xl">
              Same nine questions, three honest answers. Dollar signs are directional — see the prose below for ranges.
            </p>
          </div>

          {/* Desktop / tablet table */}
          <div className="hidden md:block overflow-hidden rounded-lg border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left p-4 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60 w-1/4">&nbsp;</th>
                  {columns.map((col) => (
                    <th key={col.key} className={`text-left p-4 ${col.accent ? "bg-navy-light" : ""}`}>
                      <div className={`font-display text-base font-semibold ${col.accent ? "text-gold" : "text-primary-foreground"}`}>
                        {col.name}
                      </div>
                      <div className="font-body text-[11px] uppercase tracking-wider text-primary-foreground/50 mt-1">{col.tag}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-card" : "bg-cream/50"}>
                    <td className="p-4 font-body text-sm font-medium text-foreground/70 border-r border-border">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className={`p-4 ${columns[j].accent ? "bg-gold/5" : ""}`}>
                        <Cell value={v} accent={columns[j].accent} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked */}
          <div className="md:hidden space-y-5">
            {columns.map((col, idx) => (
              <div key={col.key} className={`rounded-lg border ${col.accent ? "border-gold/40 bg-card" : "border-border bg-card"} overflow-hidden`}>
                <div className={`p-4 ${col.accent ? "bg-gold/10" : "bg-navy"}`}>
                  <div className={`font-display text-lg font-semibold ${col.accent ? "text-foreground" : "text-primary-foreground"}`}>
                    {col.name}
                  </div>
                  <div className={`font-body text-[11px] uppercase tracking-wider mt-1 ${col.accent ? "text-foreground/60" : "text-primary-foreground/60"}`}>
                    {col.tag}
                  </div>
                </div>
                <dl className="divide-y divide-border">
                  {rows.map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-4 p-3.5">
                      <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground flex-1">{row.label}</dt>
                      <dd className="font-body text-sm text-foreground text-right flex-1">
                        <Cell value={row.values[idx]} accent={col.accent} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Tradeoffs */}
      <section className="bg-cream py-12 md:py-16 border-t border-gold/20">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Honest Tradeoffs</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">No Model Is Strictly Better</h2>
          </div>
          <div className="space-y-8">
            {tradeoffs.map((t) => (
              <div key={t.title} className="bg-card p-6 md:p-7 rounded-lg border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{t.title}</h3>
                <p className="font-body text-foreground/80 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Tree */}
      <section className="bg-cream py-12 md:py-16 border-t border-gold/20">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Quick Decision</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Three Questions</h2>
            <p className="font-body text-muted-foreground mt-2">Answer in order. Stop at the first yes.</p>
          </div>

          <ol className="space-y-4">
            {[
              {
                q: "Does the role genuinely need someone 5 days a week?",
                yes: "Hire full-time",
                no: "Keep going",
              },
              {
                q: "Is the deliverable a strategy or deck — not execution?",
                yes: "Retain a consulting firm",
                no: "Keep going",
              },
              {
                q: "Do you need operator judgment and an execution cadence — now?",
                yes: "Go fractional",
                no: "Too early. Start with advisory.",
              },
            ].map((node, i) => (
              <li key={i} className="bg-card border border-border rounded-lg p-5 md:p-6 relative">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-navy text-gold font-display font-semibold flex items-center justify-center text-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-lg font-semibold text-foreground mb-3">{node.q}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gold/10 border border-gold/30 rounded p-3">
                        <p className="font-body text-[11px] uppercase tracking-wider text-gold mb-1">Yes →</p>
                        <p className="font-body text-sm text-foreground font-medium">{node.yes}</p>
                      </div>
                      <div className="bg-cream/60 border border-border rounded p-3">
                        <p className="font-body text-[11px] uppercase tracking-wider text-muted-foreground mb-1">No ↓</p>
                        <p className="font-body text-sm text-foreground/70">{node.no}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-cream py-12 md:py-16 border-t border-gold/20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Not Sure Which Model Fits Your Situation?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a free strategy call. I'll tell you straight which one you actually need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#calendly"
              onClick={() => trackCalendlyClick("cta_click", "/contact#calendly", { location: "fractional_vs_page_mid_cta" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
            >
              <CalendarCheck size={18} /> Book a Strategy Call
            </Link>
            <Link
              to="/how-i-work"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-foreground/20 text-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
            >
              See How I Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Still Not Sure Which Fits?
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            That's what the discovery call is for. 30 minutes, no pitch — I'll tell you straight which model your situation actually needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#calendly"
              onClick={() => trackCalendlyClick("cta_click", "/contact#calendly", { location: "fractional_vs_page_footer" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
            >
              <CalendarCheck size={18} /> Book a Discovery Call
            </Link>
            <Link
              to="/how-i-work"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
            >
              See How I Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FractionalVsConsultingVsFte;
