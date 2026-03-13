import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const posts = [
  {
    slug: "building-partner-program-from-scratch",
    title: "Building a Partner Program From Scratch: A Step-by-Step Framework",
    excerpt:
      "Most companies launch partner programs without a clear architecture. Here's the framework we use to design programs that scale from day one.",
    author: "Shore Strategy Team",
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Partner Strategy",
  },
  {
    slug: "co-sell-motions-that-work",
    title: "Co-Sell Motions That Actually Work: Lessons From 150+ Partnerships",
    excerpt:
      "Co-selling fails when it's bolted on. We break down the three co-sell models that consistently drive pipeline and how to choose the right one.",
    author: "Shore Strategy Team",
    date: "February 24, 2026",
    readTime: "6 min read",
    category: "GTM Strategy",
  },
  {
    slug: "measuring-partner-influenced-revenue",
    title: "Beyond Sourced Revenue: How to Measure True Partner Influence",
    excerpt:
      "Partner-sourced revenue tells only half the story. Learn how leading companies quantify the full impact of their partner ecosystems.",
    author: "Shore Strategy Team",
    date: "February 10, 2026",
    readTime: "7 min read",
    category: "Revenue & Analytics",
  },
  {
    slug: "ecosystem-led-growth-playbook",
    title: "The Ecosystem-Led Growth Playbook for B2B SaaS",
    excerpt:
      "Ecosystem-led growth is replacing channel-led strategies. Here's how B2B SaaS companies can make the shift without losing momentum.",
    author: "Shore Strategy Team",
    date: "January 28, 2026",
    readTime: "10 min read",
    category: "Ecosystem Development",
  },
  {
    slug: "partner-enablement-mistakes",
    title: "5 Partner Enablement Mistakes That Kill Deal Velocity",
    excerpt:
      "Enablement is where most partner programs silently fail. We identify the five most common mistakes and how to fix each one.",
    author: "Shore Strategy Team",
    date: "January 14, 2026",
    readTime: "5 min read",
    category: "Partner Operations",
  },
  {
    slug: "fractional-cpo-when-to-hire",
    title: "When Does Your Company Need a Fractional Chief Partner Officer?",
    excerpt:
      "Not every company needs a full-time partnership leader from day one. Here's how to know when fractional CPO support is the right move.",
    author: "Shore Strategy Team",
    date: "December 30, 2025",
    readTime: "6 min read",
    category: "Executive Advisory",
  },
];

const categories = [...new Set(posts.map((p) => p.category))];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">
            Insights
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Thought Leadership &{" "}
            <span className="text-gold">Industry Insights</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Practical frameworks, emerging trends, and hard-won lessons from
            decades of building partner ecosystems.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream border-b border-border">
        <div className="container py-4">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider bg-gold text-accent-foreground rounded-full cursor-pointer">
              All
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground border border-border rounded-full cursor-pointer hover:border-gold hover:text-gold transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-card rounded-lg border border-border hover:shadow-lg hover:border-gold/30 transition-all group flex flex-col"
              >
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-gold font-body text-xs uppercase tracking-wider font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-gold font-body font-semibold text-sm group-hover:gap-2 transition-all cursor-pointer">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy section-padding">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Get our latest insights on partner strategy and ecosystem
            development delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-navy-light border border-navy-light text-primary-foreground font-body placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button className="px-6 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
