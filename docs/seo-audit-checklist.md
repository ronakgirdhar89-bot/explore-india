# SEO Audit Checklist — Explore India (CSET489)

## 1. On-Page & Content SEO
- [x] Unique `<title>` under 60 characters on every page (`49–59 chars`) — zero SERP truncation
- [x] Unique `<meta name="description">` on every page (`134–158 chars`)
- [x] Strict 1-primary-keyword-per-URL mapping across 12 destinations, 14 blogs, 5 region hubs, and 7 category hubs (zero cannibalization)
- [x] Comprehensive long-form guides (`650–1,000+` words per blog post, dynamic word count & reading time)
- [x] Quick Answer summary boxes (`data-speakable="summary"`) + Key Takeaways + semantic `<table>` comparison/budget matrices for Featured Snippets
- [x] Inline contextual internal links (`RichText.tsx`) + Jump-to-Section Table of Contents on both destinations and blogs
- [x] Accessible `<details>`/`<summary>` FAQ accordions paired with `FAQPage` JSON-LD
- [x] Visible `Updated` dates and Editorial Note E-E-A-T attribution

## 2. Technical SEO & Crawlability
- [x] 100% Static (`SSG`) generation across home, `/destinations`, `/blog`, region hubs, category hubs, 12 destinations, and 14 blogs
- [x] Dynamic XML Sitemap at `/sitemap.xml` with Image Sitemap tags (`<image:image>`) and deterministic `lastModified` ISO dates
- [x] `robots.txt` at `/robots.txt` allowing `/` and protecting crawl budget (`/api/`, `/destinations?q=`, `/blog?q=`)
- [x] RSS 2.0 feed at `/rss.xml` linked via `<link rel="alternate" type="application/rss+xml" />`
- [x] Web App Manifest at `/manifest.webmanifest` + crisp SVG favicon (`/icon.svg`)
- [x] Security & SEO HTTP headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `poweredByHeader: false`)
- [x] Permanent 301 redirects (`/home`, `/destination`, `/destination/:slug`, `/blogs`, `/blogs/:slug`)
- [x] Self-referencing canonical URLs (`alternates.canonical`) + Open Graph exact dimensions (`1600x900` / `1200x800`) + Twitter Cards

## 3. Structured Data (JSON-LD Graph)
- [x] `Organization` (`@id`, `logo`, `areaServed`, `contactPoint`)
- [x] `WebSite` (`@id`, `publisher`, `SearchAction`)
- [x] `CollectionPage` + `ItemList` on `/`, `/destinations`, `/blog`, region hubs, and category hubs
- [x] `BreadcrumbList` across every subpage
- [x] `TouristDestination` with `GeoCoordinates` (`lat`/`lng`), `includesAttraction` (`TouristAttraction[]`), `isAccessibleForFree`, and `dateModified`
- [x] `BlogPosting` with `wordCount`, `timeRequired`, `about` linked destinations, and `SpeakableSpecification`
- [x] `AboutPage` and `ContactPage` schemas
- [x] `FAQPage` strictly aligned with visible page Q&As

## 4. Google Search Console & Google Analytics 4
- [x] GSC HTML tag meta verification with token/tag normalizer (`NEXT_PUBLIC_GSC_VERIFICATION`)
- [x] GA4 `gtag.js` with App Router client navigation `page_view` tracking (no double counting)
- [x] Real-user Core Web Vitals (`LCP`, `INP`, `CLS`, `FCP`, `TTFB`) sent to GA4
- [x] Custom GA4 events: `search`, `scroll_depth`, `faq_toggle`, `outbound_official_click`, `share`, `generate_lead`
