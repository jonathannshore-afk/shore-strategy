import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { defaultAuthor } from "@/data/blogPosts";
import { ArrowLeft, CalendarCheck, Linkedin, Loader2 } from "lucide-react";
import ArticleContent from "@/components/blog/ArticleContent";
import ShareToolbar from "@/components/blog/ShareToolbar";
import LinkedInDraftCard from "@/components/blog/LinkedInDraftCard";
import DiscoveryCallReassurance from "@/components/DiscoveryCallReassurance";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";

const BASE_URL = "https://shore-strategy.com";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug);
  const { data: allPosts = [] } = useBlogPosts();

  if (isLoading) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container flex justify-center py-20">
            <Loader2 className="animate-spin text-muted-foreground" size={32} />
          </div>
        </section>
      </Layout>
    );
  }

  if (error || !post) {
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

  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage
      ? post.heroImage.startsWith("http")
        ? post.heroImage
        : `${BASE_URL}${post.heroImage}`
      : `${BASE_URL}/og-image.jpg`,
    author: {
      "@type": "Person",
      name: post.author,
      url: defaultAuthor.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: "Shore Strategy",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.jpg`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
    articleSection: post.category,
    keywords: post.category,
  };

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        type="article"
        ogImage={post.heroImage}
        article={{
          publishedTime: post.date,
          author: post.author,
          section: post.category,
        }}
        schemaJson={articleJsonLd}
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
          <ShareToolbar post={post} />
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-background section-padding pb-8">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-body uppercase tracking-[0.15em] text-muted-foreground mb-6">
            <span>{post.category}</span>
            <span>—</span>
            <span>{post.date}</span>
            <span>—</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="bg-background pb-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="sticky top-24 space-y-6">
                <div className="border border-border rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.authorImage || defaultAuthor.image}
                      alt={post.author}
                      loading="lazy"
                      decoding="async"
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
                  <a
                    href={defaultAuthor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 border border-border rounded text-sm font-body font-semibold text-foreground hover:border-gold hover:text-gold transition-colors"
                  >
                    <Linkedin size={14} /> Follow on LinkedIn
                  </a>
                </div>

                {(post.tldr || (post.keyStats && post.keyStats.length > 0)) && (
                  <div className="border border-border rounded-lg p-6 space-y-4">
                    <p className="font-body text-xs text-muted-foreground font-semibold uppercase tracking-[0.15em]">
                      TL;DR
                    </p>
                    {post.tldr && (
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        {post.tldr}
                      </p>
                    )}
                    {post.keyStats && post.keyStats.length > 0 && (
                      <>
                        <hr className="border-border" />
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
                      </>
                    )}
                  </div>
                )}

                <LinkedInDraftCard post={post} />
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
                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group">
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            <CalendarCheck size={18} /> Book a Discovery Call
          </Link>
          <div className="mt-5">
            <DiscoveryCallReassurance variant="dark" align="center" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
