import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const links = [
  { to: "/", label: "Home", description: "Partner Ecosystem Strategist — overview and positioning." },
  { to: "/about", label: "About", description: "Background, career highlights, and operating experience." },
  { to: "/services", label: "Services", description: "Engagement models and how I work with clients." },
  { to: "/how-i-work", label: "How I Work", description: "The 5-pillar methodology behind every engagement." },
  { to: "/results", label: "Results", description: "Case studies and measurable partner program outcomes." },
  { to: "/leadership", label: "Leadership Philosophy", description: "How I lead teams and operate with partners." },
  { to: "/fractional-vs-consulting-vs-fte", label: "Fractional vs. Consulting vs. FTE", description: "Which engagement model fits your situation." },
  { to: "/faq", label: "FAQ", description: "Common questions about fractional partnerships work." },
  { to: "/contact", label: "Contact", description: "Book a 30-minute discovery call or send a message." },
  { to: "/privacy", label: "Privacy Policy", description: "How we collect, use, and protect your information." },
];

const Sitemap = () => {
  return (
    <Layout>
      <SEOHead
        title="Sitemap — Explore Shore Strategy"
        description="Browse every page on Shore Strategy — services, methodology, results, leadership philosophy, FAQ, and contact."
        canonical="/sitemap"
      />

      {/* Hero */}
      <section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Explore</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Site <span className="text-gold">Map</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            A complete index of every page on shore-strategy.com.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream px-6 py-12 md:px-12 lg:px-24 lg:py-16">
        <div className="container max-w-3xl">
          <ul className="divide-y divide-border/60">
            {links.map((link) => (
              <li key={link.to} className="py-5">
                <Link
                  to={link.to}
                  className="group flex flex-col gap-1 hover:text-gold transition-colors"
                >
                  <span className="font-display text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                    {link.label}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {link.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;