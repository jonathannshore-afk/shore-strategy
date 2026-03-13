import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { posts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, User, Linkedin } from "lucide-react";

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
              className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-foreground/60 font-body text-sm mb-8 hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="text-gold font-body text-xs uppercase tracking-[0.2em] font-semibold mb-3 block">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60 font-body">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 bg-gold/10 border border-gold/30 text-gold rounded-full text-xs font-semibold hover:bg-gold hover:text-accent-foreground transition-colors"
            >
              <Linkedin size={14} /> Share on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none font-body text-foreground prose-headings:font-display prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:underline">
            {post.content.split("\n").map((line, i) => {
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
                // Handle inline bold
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

              // Handle inline links and bold in paragraphs
              const formatted = trimmed
                .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-gold hover:underline">$1</a>')
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream section-padding border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Need Help With Your Partner Strategy?
          </h2>
          <p className="font-body text-muted-foreground mb-6">
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

export default BlogPost;
