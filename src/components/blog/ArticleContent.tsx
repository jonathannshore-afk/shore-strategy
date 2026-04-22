/** Renders markdown-like content safely */
const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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

      // Escape the entire line first, then re-introduce the small set of
      // allowed inline tags. This guarantees any raw HTML in the source
      // (link text, bold text, etc.) is rendered as text, not markup.
      const escaped = escapeHtml(trimmed);
      const formatted = escaped
        .replace(/\[(.+?)\]\((.+?)\)/g, (_match, text, url) => {
          const safeUrl = /^(https?:\/\/|\/(?!\/))/.test(url) ? url : "#";
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

export default ArticleContent;
