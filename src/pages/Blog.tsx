import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { posts, categories } from "@/data/blogPosts";

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
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-gold font-body font-semibold text-sm group-hover:gap-2 transition-all"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
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
