# Google Tools Integration & Deployment Guide — Explore India

## 1. Environment Variables

Copy `.env.example` to `.env.local` for local testing or configure these variables in Vercel / your hosting provider before deploying:

```env
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_DEBUG=false
NEXT_PUBLIC_GSC_VERIFICATION=your-google-site-verification-token
```

> **Note**: `normalizeGscVerification()` in `src/lib/seo.ts` accepts either the bare token (`abc123...`), `google-site-verification=abc123...`, or the full `<meta name="google-site-verification" content="abc123..." />` tag pasted from GSC.

---

## 2. Adding the Site to Google Search Console (GSC)

1. **Deploy over HTTPS** first (e.g., to Vercel on your custom domain or `*.vercel.app` URL).
2. Set `NEXT_PUBLIC_SITE_URL` in Vercel **Environment Variables** to match your exact live canonical URL (e.g., `https://exploreindia.in` or `https://your-app.vercel.app`, with **no trailing slash**).
3. Open [Google Search Console](https://search.google.com/search-console) → **Add property**:
   - Choose **URL prefix** (e.g., `https://your-live-domain.com`) for instant HTML tag verification, OR **Domain** if you manage DNS TXT records.
4. Under **HTML tag**, copy the verification code (`content="..."`).
5. Add `NEXT_PUBLIC_GSC_VERIFICATION=<your-token>` in Vercel **Environment Variables** and trigger a **Redeploy**.
6. Verify `<meta name="google-site-verification" content="..." />` appears in your live page source (`View Page Source`), then click **Verify** in GSC.
7. **Submit Your Sitemap**:
   - In GSC left sidebar → **Sitemaps** → enter `sitemap.xml` → click **Submit**.
   - Confirm `https://your-live-domain.com/sitemap.xml` returns HTTP 200 with all **45 URLs** (7 static pages, 5 regional hubs, 7 category hubs, 12 destinations with `<image:image>`, and 14 blog articles with `<image:image>`).
8. **Request Immediate Indexing for Top-3 Target Pages**:
   - Open **URL Inspection** in GSC and run **Test Live URL** + **Request Indexing** for:
     - `/`
     - `/blog/3-day-manali-trip-budget-from-delhi-by-volvo`
     - `/blog/shimla-vs-manali-for-family-trip-in-summer`
     - `/blog/varanasi-3-day-itinerary-and-budget-from-delhi`
     - `/blog/andaman-5-day-budget-itinerary-port-blair-havelock-neil`
     - `/destinations/manali`

---

## 3. Adding Google Analytics 4 (GA4)

1. Open [Google Analytics](https://analytics.google.com/) → **Admin → Create Property**:
   - Property name: `Explore India`
   - Reporting time zone: `(GMT+05:30) India`
   - Currency: `Indian Rupee (INR)`
   - Business objective / industry: `Travel`
2. Create a **Web** Data Stream with your exact live HTTPS URL and copy the **Measurement ID** (`G-XXXXXXXXXX`).
3. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` in Vercel **Environment Variables** and **Redeploy**.
4. What `src/components/GoogleAnalytics.tsx` & `src/lib/analytics.ts` track automatically:
   - **SPA & Initial Page Views**: `page_view` on hard loads AND Next.js App Router client `<Link>` transitions without double-counting.
   - **Real-User Core Web Vitals**: `LCP`, `INP`, `CLS`, `FCP`, `TTFB` via `useReportWebVitals`.
   - **Custom SEO & Engagement Events**:
     - `search` (hero search bar, quick chips, destination & blog directory filters)
     - `scroll_depth` (25%, 50%, 75%, 90% milestones on destination & blog pages)
     - `faq_toggle` (FAQ accordion expansions)
     - `outbound_official_click` (clicks to IRCTC, HRTC, state tourism & ASI portals)
     - `share` (WhatsApp, X/Twitter, LinkedIn, Copy Link)
     - `generate_lead` (Newsletter & Contact form submissions)
5. **Verify Live Hits**: Open **GA4 → Reports → Realtime** (and **Admin → DebugView** if `NEXT_PUBLIC_GA_DEBUG=true`) while navigating destinations and clicking search/FAQs.
6. **Link GSC & GA4**: In GA4 **Admin → Product links → Search Console links**, connect your verified GSC property so organic search queries and landing pages appear inside GA4 reports.

---

## 4. PageSpeed Insights & Structured Data Validation

Once deployed, validate:
1. **Rich Results Test**: [search.google.com/test/rich-results](https://search.google.com/test/rich-results) on `/destinations/manali` and `/blog/3-day-manali-trip-budget-from-delhi-by-volvo`.
2. **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev/) for Mobile & Desktop Core Web Vitals.
