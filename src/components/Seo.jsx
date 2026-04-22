import React from "react";
import { Helmet } from "react-helmet";

const SITE_NAME = "Killeen Air Duct Cleaners";
const DEFAULT_TITLE =
  "Killeen Air Duct Cleaning | Professional HVAC & Vent Services in Central Texas";
const DEFAULT_DESCRIPTION =
  "Expert air duct cleaning, dryer vent cleaning, chimney sweep & HVAC services in Killeen, Temple, Waco TX. Improve air quality & save energy. Call (254) 998-3484.";

export default function Seo({
  title,
  description,
  canonical,
  ogImage = "/hero-vans.jpeg",
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}

