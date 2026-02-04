import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keyword?: string;
  name?: string;
  type?: string;
  ogurl?: string;
  ogimage?: string;
}

export default function SEO({
  title,
  description,
  name,
  type,
  keyword,
  ogurl,
  ogimage,
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keyword || ""} />
      {ogurl && <link rel="canonical" href={ogurl} />}

      {/* Open Graph tags (Facebook, LinkedIn) */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title || ""} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:image" content={ogimage || ""} />
      {ogurl && <meta property="og:url" content={ogurl} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || ""} />
      <meta name="twitter:description" content={description || ""} />
      <meta name="twitter:image" content={ogimage || ""} />
      {name && <meta name="twitter:creator" content={name} />}

      {/* Additional meta tags */}
      <meta name="theme-color" content="#FCA13B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
}
