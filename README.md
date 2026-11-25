# Explore India — SEO-Optimized Travel & Tourism Guide (CSET489)

**Tagline:** *Discover India, One Destination at a Time.*

Explore India is a full-stack Next.js 16 (TypeScript + Tailwind CSS v4) travel and tourism guide engineered for **Technical SEO**, **On-Page Content Depth**, **Google Search Console (GSC)**, **Google Analytics 4 (GA4)**, and **Core Web Vitals**.

---

## Key Features

- **Home Page (`/`)**: Hero with live destination search, regional quick-browse bar, popular & trending destinations, budget-friendly picks, featured travel guides, latest itineraries, and newsletter signup.
- **Static Regional & Destination Directory (`/destinations` & `/destinations/region/[region]`)**: 100% static (`SSG`) searchable and filterable directory across **12 Indian destinations** and **5 regional hubs**.
- **Comprehensive Destination Pages (`/destinations/[slug]`)**: Quick Trip Summary box, Jump-to-Section bar, seasonal climate table, day-by-day recommended itinerary, top attractions, local food, accommodation guidance, budget breakdown table, how to reach, accessible FAQs, and official tourism links.
- **Travel Blog & Category Hubs (`/blog`, `/blog/category/[category]`, `/blog/[slug]`)**: **7 category hubs** and **14 long-form articles** (including 4 dedicated low-competition long-tail guides engineered for Top-3 ranking), featuring Quick Answer boxes, Key Takeaways, comparison tables, inline contextual links, reading progress bar, social share buttons, and FAQs.
- **Supporting Pages**: About Us (`/about`), validated Contact Us form (`/contact`), Privacy Policy (`/privacy-policy`), Disclaimer (`/disclaimer`), and custom 404 page.

---

## Technical SEO, GSC & GA4 Instrumentation

- **Metadata & Canonicals**: Strict `<60`-character front-loaded `<title>` tags, `140–158`-character meta descriptions, Open Graph with exact image dimensions, Twitter Cards, RSS `<link rel="alternate">`, and canonical URLs via `src/lib/seo.ts`.
- **Zero Keyword Cannibalization**: Strict 1-keyword-intent-per-URL mapping across all 12 destinations, 14 blog posts, 5 regional hubs, and 7 category hubs (`docs/keyword-mapping.md`).
- **Structured Data (JSON-LD Graph)**: `Organization` (`@id` & `ContactPoint`), `WebSite` (`SearchAction`), `CollectionPage` + `ItemList`, `BreadcrumbList`, `TouristDestination` (`GeoCoordinates` + `TouristAttraction[]`), `BlogPosting` (`wordCount`, `timeRequired`, `about`, `SpeakableSpecification`), `AboutPage`, `ContactPage`, and `FAQPage`.
- **Crawlability & Feeds**: Image-enabled `/sitemap.xml` with deterministic `lastModified` dates (`src/app/sitemap.ts`), `/robots.txt` (`src/app/robots.ts`), `/rss.xml`, `/manifest.webmanifest`, HTTP security headers, and 301 redirects in `next.config.ts`.
- **GSC & GA4**: Normalized GSC HTML verification (`NEXT_PUBLIC_GSC_VERIFICATION`) plus full GA4 App Router SPA `page_view` tracking, real-user Core Web Vitals (`LCP`, `INP`, `CLS`, `FCP`, `TTFB`), and custom events (`search`, `scroll_depth`, `faq_toggle`, `outbound_official_click`, `share`, `generate_lead`).

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables for GSC & GA4
cp .env.example .env.local

# 3. Run development server
npm run dev

# 4. Lint, typecheck & build for production
npm run lint
npm run build
npm run start
```

---

## Documentation

- [Keyword Research & Mapping](docs/keyword-mapping.md)
- [Internal Linking Structure](docs/internal-linking-structure.md)
- [Google Search Console & GA4 Setup Guide](docs/google-tools-setup.md)
- [Top-3 Google Ranking Playbook](docs/top-3-ranking-playbook.md)
- [SEO Audit Checklist](docs/seo-audit-checklist.md)
