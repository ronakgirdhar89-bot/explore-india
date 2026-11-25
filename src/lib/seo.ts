import type { Metadata } from "next";

export const SITE_NAME = "Explore India";
export const SITE_TAGLINE = "Discover India, One Destination at a Time.";
export const SITE_DESCRIPTION =
  "Practical India travel guide with verified seasonal charts, train and road routes, local food picks, and transparent trip budgets across India.";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://explore-india-guide.vercel.app"
).replace(/\/+$/, "");

export const DEFAULT_OG_IMAGE = "/images/hero-india-travel-guide.webp";

export function absoluteUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Accepts a raw GSC verification token, `google-site-verification=<token>`,
 * or a pasted `<meta name="google-site-verification" content="<token>" />` string.
 */
export function normalizeGscVerification(raw?: string): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;

  const metaMatch = trimmed.match(/content\s*=\s*["']([^"']+)["']/i);
  if (metaMatch?.[1]) {
    return metaMatch[1].trim();
  }
  return trimmed.replace(/^google-site-verification=/i, "").trim() || undefined;
}

export function slugifyCategory(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME} — ${SITE_TAGLINE}`,
  imageWidth,
  imageHeight,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  keywords,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const ogImageUrl = absoluteUrl(image);
  const resolvedWidth =
    imageWidth ?? (image === DEFAULT_OG_IMAGE ? 1600 : 1200);
  const resolvedHeight =
    imageHeight ?? (image === DEFAULT_OG_IMAGE ? 900 : 800);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      types: {
        "application/rss+xml": absoluteUrl("/rss.xml"),
      },
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_IN",
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors?.length ? { authors } : {}),
      ...(section ? { section } : {}),
      images: [
        {
          url: ogImageUrl,
          width: resolvedWidth,
          height: resolvedHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(DEFAULT_OG_IMAGE),
      width: 1600,
      height: 900,
    },
    description: SITE_DESCRIPTION,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: absoluteUrl("/contact"),
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/destinations?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function collectionPageSchema(params: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string; image?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(params.path)}#webpage`,
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.path),
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: params.items.length,
      itemListElement: params.items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        url: absoluteUrl(item.path),
        ...(item.image ? { image: absoluteUrl(item.image) } : {}),
      })),
    },
  };
}

export function touristDestinationSchema(params: {
  name: string;
  description: string;
  path: string;
  image: string;
  state: string;
  geo?: { lat: number; lng: number };
  attractions?: { name: string; description: string }[];
  touristType?: string[];
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${absoluteUrl(params.path)}#destination`,
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.path),
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(params.image),
      width: 1200,
      height: 800,
    },
    isAccessibleForFree: true,
    publicAccess: true,
    ...(params.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: params.geo.lat,
            longitude: params.geo.lng,
          },
        }
      : {}),
    touristType: params.touristType ?? [
      "Leisure travellers",
      "Budget travellers",
      "Families",
      "Cultural tourists",
    ],
    ...(params.attractions?.length
      ? {
          includesAttraction: params.attractions.map((attr) => ({
            "@type": "TouristAttraction",
            name: attr.name,
            description: attr.description,
          })),
        }
      : {}),
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: params.state,
      containedInPlace: {
        "@type": "Country",
        name: "India",
      },
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    ...(params.dateModified ? { dateModified: params.dateModified } : {}),
  };
}

export function blogPostingSchema(params: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  section: string;
  keywords: string[];
  wordCount?: number;
  timeRequired?: string;
  aboutDestinations?: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(params.path)}#article`,
    headline: params.headline,
    description: params.description,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(params.image),
      width: 1200,
      height: 800,
    },
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    articleSection: params.section,
    keywords: params.keywords.join(", "),
    inLanguage: "en-IN",
    ...(params.wordCount ? { wordCount: params.wordCount } : {}),
    ...(params.timeRequired ? { timeRequired: params.timeRequired } : {}),
    author: {
      "@type": "Organization",
      name: params.authorName,
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(params.path),
    },
    ...(params.aboutDestinations?.length
      ? {
          about: params.aboutDestinations.map((dest) => ({
            "@type": "TouristDestination",
            name: dest.name,
            url: absoluteUrl(dest.path),
          })),
        }
      : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable='summary']", "h1"],
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webPageSchema(params: {
  type: "AboutPage" | "ContactPage" | "WebPage";
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": params.type,
    "@id": `${absoluteUrl(params.path)}#webpage`,
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.path),
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
