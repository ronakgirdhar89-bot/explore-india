# Explore India — Internal Linking Structure

## 1. Hub-and-Spoke Architecture

Explore India uses a **3-tier static hub-and-spoke graph** so search engine crawlers and users reach any destination, regional hub, category hub, or long-tail article within 2–3 clicks from the homepage:

```
Home (/)
 ├── Destinations Hub (/destinations)
 │    ├── 5 Regional Hubs (/destinations/region/[region])
 │    └── 12 Destination Guides (/destinations/[slug])
 │         ├── Inline Contextual Links -> Related Blogs & Neighbor Destinations
 │         ├── Related Destinations Grid (3 sibling links)
 │         └── Related Travel Articles Grid (2–3 contextual links)
 └── Travel Blog Hub (/blog)
      ├── 7 Category Hubs (/blog/category/[category])
      └── 14 Long-Form Articles (/blog/[slug])
           ├── Inline Contextual Links -> /destinations/[slug] & /blog/[slug]
           ├── Section Action Links -> /destinations/[slug] + Official Portals
           ├── Featured Destinations Grid -> /destinations/[slug]
           └── Related Articles Grid -> /blog/[slug]
```

## 2. Navigation, Footer & Crawl Efficiency

- **Header Navigation**: Direct links to `/`, `/destinations`, `/blog`, `/about`, and `/contact`.
- **Footer**: Links to top 6 destinations, all **clean static category URLs** (`/blog/category/...` rather than `?category=` query strings), trust pages (`/about`, `/contact`, `/privacy-policy`, `/disclaimer`), `/sitemap.xml`, and `/rss.xml`.
- **Breadcrumbs**: Every subpage renders visible `<nav aria-label="Breadcrumb">` links including regional/category parent hubs, paired with matching `BreadcrumbList` JSON-LD.
- **On-Page Jump Links (Sitelink Optimization)**: Both `/destinations/[slug]` and `/blog/[slug]` include anchor Table of Contents links (`#best-time-heading`, `#itinerary-heading`, `#budget-heading`, `#faq-heading`, etc.) so Google can generate SERP jump-to sitelinks.

## 3. Anchor Text & External Authority Rules

- Inline paragraph links (`RichText.tsx`) use descriptive topic-rich anchor text (e.g., *"3-day Manali Volvo budget breakdown"*, *"Shimla vs Manali family comparison"*).
- Authoritative external references (`himachaltourism.gov.in`, `online.hrtchp.com`, `irctc.co.in`, `asi.nic.in`, `keralatourism.org`, `ladakh.gov.in`) open in new tabs with `rel="noopener noreferrer"` and report `outbound_official_click` events to GA4.
