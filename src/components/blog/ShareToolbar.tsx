import { useState } from "react";
import { Linkedin, Link2, Check } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

const BASE_URL = "https://shore-strategy.com";

interface ShareToolbarProps {
  post: BlogPost;
}

const ShareToolbar = ({ post }: ShareToolbarProps) => {
  const [copied, setCopied] = useState(false);

  const articleUrl = `${BASE_URL}/blog/${post.slug}`;

  // Pre-filled LinkedIn share text
  const linkedInText = `📖 "${post.title}"\n\n${post.tldr || post.excerpt}\n\nRead the full article →`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = articleUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <a
        href={linkedInShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
      >
        <Linkedin size={14} /> Share on LinkedIn
      </a>
      <span className="text-border">|</span>
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
      >
        {copied ? (
          <>
            <Check size={14} className="text-green-500" /> Copied!
          </>
        ) : (
          <>
            <Link2 size={14} /> Copy Link
          </>
        )}
      </button>
    </div>
  );
};

export default ShareToolbar;

/** Generates a LinkedIn post draft for the article */
export const generateLinkedInDraft = (post: BlogPost): string => {
  const articleUrl = `${BASE_URL}/blog/${post.slug}`;
  const stats = post.keyStats
    ?.slice(0, 3)
    .map((s) => `→ ${s.value} ${s.label}`)
    .join("\n");

  return `🔑 ${post.title}

${post.tldr || post.excerpt}

${stats ? `Key takeaways:\n${stats}\n` : ""}Read the full article: ${articleUrl}

#PartnerEcosystem #ChannelStrategy #Partnerships`;
};
