import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  /** Page title (without site suffix). A site suffix " | Shore Strategy" is appended automatically. */
  title?: string;
  /** Meta description (~150–160 chars). */
  description?: string;
  /** Absolute or path-relative canonical URL. Required for proper canonicalization per page. */
  canonical?: string;
  /** Absolute or path-relative Open Graph image URL. Defaults to /og-image.jpg. */
  ogImage?: string;
  /** When true, emits <meta name="robots" content="noindex,nofollow"> for non-indexable pages. */
  noIndex?: boolean;
  /** Optional JSON-LD structured data object (or array of objects). */
  schemaJson?: Record<string, unknown> | Array<Record<string, unknown>>;
  /** Open Graph type (defaults to "website"; use "article" for blog posts, "profile" for people). */
  type?: string;
  /** Article metadata for og:article:* tags. */
  article?: {
    publishedTime?: string;
    author?: string;
    section?: string;
  };
}

const SITE_NAME = "Shore Strategy";
const BASE_URL = "https://shore-strategy.com";
const DEFAULT_TITLE = "Jonathan Shore — Partner Ecosystem Strategist";
const DEFAULT_DESCRIPTION =
  "Jonathan Shore helps B2B technology companies build, fix, and scale partner ecosystems that drive measurable revenue growth. 15+ years at Salesforce, ServiceNow, and Lumen.";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const toAbsolute = (url?: string) => {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage,
  noIndex = false,
  schemaJson,
  type = "website",
  article,
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canonicalUrl = toAbsolute(canonical) ?? BASE_URL;
  const image = toAbsolute(ogImage) ?? DEFAULT_OG_IMAGE;
  const schemas = schemaJson
    ? Array.isArray(schemaJson)
      ? schemaJson
      : [schemaJson]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article-specific */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}

      {/* JSON-LD */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
