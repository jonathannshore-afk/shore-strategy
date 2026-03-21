import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { posts, defaultAuthor } from "@/data/blogPosts";
import { ArrowLeft, Linkedin } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="font-body text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-foreground font-body font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to Insights
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        article={{
          publishedTime: post.date,
          author: post.author,
          section: post.category,
        }}
      />

      {/* Top Nav Bar */}
      <section className="bg-background border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> All Articles
          </Link>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={14} /> Share
          </a>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-background section-padding pb-8">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-body uppercase tracking-[0.15em] text-muted-foreground mb-6">
            <span className="font-semibold">{post.author}</span>
            <span>—</span>
            <span>{post.category}</span>
            <span>—</span>
            <span>{post.date}</span>
            <span>—</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="bg-background pb-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar — shows FIRST on mobile, second on desktop */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <div className="border border-border rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.authorImage || defaultAuthor.image}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <span className="font-body text-sm font-semibold text-foreground block">
                        {post.author}
                      </span>
                      <span className="font-body text-xs text-muted-foreground">
                        {defaultAuthor.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Stats */}
                {post.keyStats && post.keyStats.length > 0 && (
                  <div className="border border-border rounded-lg p-6 space-y-4">
                    <p className="font-body text-xs text-muted-foreground font-semibold uppercase tracking-[0.15em]">
                      Key Takeaways
                    </p>
                    {post.keyStats.map((stat, i) => (
                      <div key={i} className="flex items-baseline gap-3">
                        <span className="font-display text-2xl font-bold text-foreground">
                          {stat.value}
                        </span>
                        <span className="font-body text-sm text-muted-foreground">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* TL;DR */}
                {post.tldr && (
                  <div className="border border-border rounded-lg p-6 space-y-3">
                    <p className="font-body text-xs text-muted-foreground font-semibold uppercase tracking-[0.15em]">
                      TL;DR
                    </p>
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      {post.tldr}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-2 order-last lg:order-first">
              <hr className="border-border mb-10" />
              <ArticleContent content={post.content} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-background border-t border-border section-padding">
          <div className="container max-w-5xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group"
                >
                  <div className="flex items-center gap-2 text-xs font-body uppercase tracking-[0.12em] text-muted-foreground mb-2">
                    <span>{rp.category}</span>
                    <span>—</span>
                    <span>{rp.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-gold transition-colors">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy section-padding">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Need Help With Your Partner Strategy?
          </h2>
          <p className="font-body text-primary-foreground/70 mb-6">
            Let's discuss how Shore Strategy can help you build and scale your
            partner ecosystem.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

/** Renders markdown-like content safely */
const ArticleContent = ({ content }: { content: string }) => (
  <div className="prose prose-lg max-w-none font-body text-foreground prose-headings:font-display prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground">
    {content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={i} className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
        if (match) {
          return (
            <li key={i} className="text-muted-foreground ml-4 mb-2 list-disc">
              <strong className="text-foreground">{match[1]}</strong> — {match[2]}
            </li>
          );
        }
      }
      if (trimmed.startsWith("- ")) {
        const text = trimmed.replace("- ", "");
        const parts = text.split(/(\*\*.+?\*\*)/g);
        return (
          <li key={i} className="text-muted-foreground ml-4 mb-2 list-disc">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="text-foreground">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </li>
        );
      }

      const formatted = trimmed
        .replace(/\[(.+?)\]\((.+?)\)/g, (_match, text, url) => {
          const safeUrl = /^(https?:\/\/|\/(?!\/))/.test(url) ? url : '#';
          return `<a href="${safeUrl}" class="text-gold hover:underline">${text}</a>`;
        })
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>');

      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    })}
  </div>
);

export default BlogPost;
