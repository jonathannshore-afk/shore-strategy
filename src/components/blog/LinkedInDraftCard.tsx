import { useState } from "react";
import { Copy, Check, Linkedin } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import { generateLinkedInDraft } from "./ShareToolbar";

interface LinkedInDraftCardProps {
  post: BlogPost;
}

const LinkedInDraftCard = ({ post }: LinkedInDraftCardProps) => {
  const [copied, setCopied] = useState(false);
  const draft = generateLinkedInDraft(post);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = draft;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="border border-border rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-body text-xs text-muted-foreground font-semibold uppercase tracking-[0.15em] flex items-center gap-2">
          <Linkedin size={12} /> LinkedIn Post Draft
        </p>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check size={12} className="text-green-500" /> Copied
            </>
          ) : (
            <>
              <Copy size={12} /> Copy
            </>
          )}
        </button>
      </div>
      <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
        {draft}
      </p>
    </div>
  );
};

export default LinkedInDraftCard;
