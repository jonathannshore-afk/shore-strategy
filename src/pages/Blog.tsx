import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowRight, Clock, Loader2 } from "lucide-react";
import { defaultAuthor, BlogPost as BlogPostType } from "@/data/blogPosts";
import { useBlogPosts } from "@/hooks/useBlogPosts";

// Toggle this to `true` when Insights is ready to relaunch.
const INSIGHTS_ENABLED = false;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { data: posts = [], isLoading, error } = useBlogPosts();

  if (!INSIGHTS_ENABLED) {
    return (
      <Layout>
        <SEO
          title="Insights — Coming Soon"
          description="New insights on partner ecosystem strategy are being prepared. Check back soon."
          path="/blog"
        />
        <section className="bg-background">
          <div className="container py-32 md:py-40 text-center max-w-2xl">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gold">
              Insights
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Coming Soon
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              New articles on partner ecosystem strategy, GTM design, and
              fractional leadership are in the works. Check back shortly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const categories = [...new Set(posts.map((p) => p.category))];

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <Layout>
      <SEO
        title="Insights — Partner Strategy & Ecosystem Development"
        description="Practical frameworks, emerging trends, and lessons from decades of building partner ecosystems. Read the latest from Shore Strategy."
        path="/blog"
      />

      {/* Category Navigation Bar */}
      {categories.length > 0 && (
        <section className="bg-background border-b border-border">
          <div className="container py-4">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-xs font-body font-semibold uppercase tracking-[0.15em] rounded-full whitespace-nowrap transition-colors ${
                  !activeCategory
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                All Posts
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                  className={`px-4 py-2 text-xs font-body font-semibold uppercase tracking-[0.15em] rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Loading / Error / Empty states */}
      {isLoading && (
        <section className="bg-background section-padding">
          <div className="container flex justify-center py-20">
            <Loader2 className="animate-spin text-muted-foreground" size={32} />
          </div>
        </section>
      )}

      {error && (
        <section className="bg-background section-padding">
          <div className="container text-center py-20">
            <p className="font-body text-muted-foreground">Unable to load articles. Please try again later.</p>
          </div>
        </section>
      )}

      {!isLoading && !error && posts.length === 0 && (
        <section className="bg-background section-padding">
          <div className="container text-center py-20">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Coming Soon</h1>
            <p className="font-body text-muted-foreground">New insights are on the way. Check back soon!</p>
          </div>
        </section>
      )}

      {/* Featured Hero Article */}
      {featuredPost && (
        <section className="bg-background section-padding">
          <div className="container">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className="aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-lg bg-muted">
                {featuredPost.heroImage ? (
                  <img
                    src={featuredPost.heroImage}
                    alt={featuredPost.title}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-border">
                    <img
                      src={featuredPost.authorImage || defaultAuthor.image}
                      alt={featuredPost.author}
                      loading="eager"
                      decoding="async"
                      className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg"
                    />
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center flex-wrap gap-3 text-xs font-body uppercase tracking-[0.15em] text-muted-foreground">
                  <span className="font-semibold">{featuredPost.author}</span>
                  <span>—</span>
                  <span>{featuredPost.category}</span>
                  <span>—</span>
                  <span>{featuredPost.date}</span>
                  <span>—</span>
                  <span className="inline-flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight group-hover:text-gold transition-colors">
                  {featuredPost.title}
                </h1>
                <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-body font-semibold text-foreground uppercase tracking-wider group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Divider */}
      {featuredPost && remainingPosts.length > 0 && (
        <div className="container">
          <hr className="border-border" />
        </div>
      )}

      {/* Posts Grid */}
      {remainingPosts.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              {activeCategory ? activeCategory : "Latest Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

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

const ArticleCard = ({ post }: { post: BlogPostType }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex flex-col rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden"
  >
    <div className="aspect-[16/10] overflow-hidden bg-muted">
      {post.heroImage ? (
        <img
          src={post.heroImage}
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-border">
          <img
            src={post.authorImage || defaultAuthor.image}
            alt={post.author}
            loading="lazy"
            decoding="async"
            className="w-16 h-16 rounded-full object-cover border-2 border-background"
          />
        </div>
      )}
    </div>
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center gap-2 text-xs font-body uppercase tracking-[0.12em] text-muted-foreground mb-2">
        <span>{post.category}</span>
        <span>—</span>
        <span>{post.date}</span>
        <span>—</span>
        <span className="inline-flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
      </div>
      <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-gold transition-colors">
        {post.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>
      <span className="mt-auto inline-flex items-center gap-2 text-sm font-body font-semibold text-foreground uppercase tracking-wider group-hover:gap-3 transition-all">
        Read More <ArrowRight size={14} />
      </span>
    </div>
  </Link>
);

export default Blog;
