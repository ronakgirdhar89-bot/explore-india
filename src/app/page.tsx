import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { DESTINATIONS, DESTINATION_REGIONS } from "@/data/destinations";
import { BLOG_POSTS } from "@/data/blogs";
import {
  buildMetadata,
  collectionPageSchema,
  slugifyCategory,
} from "@/lib/seo";
import { DestinationCard } from "@/components/DestinationCard";
import { BlogCard } from "@/components/BlogCard";
import { HeroSearch } from "@/components/HeroSearch";
import { NewsletterForm } from "@/components/NewsletterForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Explore India — India Travel Guide & Budget Trip Planner",
  description:
    "Discover top tourist places in India with curated destination guides, seasonal travel tips, train routes, and honest INR trip budgets across India.",
  path: "/",
  keywords: [
    "India travel guide",
    "Best tourist places in India",
    "Places to visit in India",
    "Budget travel in India",
    "Explore India",
  ],
});

export default function HomePage() {
  const popularDestinations = DESTINATIONS.filter((d) => d.isPopular).slice(
    0,
    6
  );
  const trendingDestinations = DESTINATIONS.filter((d) => d.isTrending).slice(
    0,
    3
  );
  const budgetDestinations = DESTINATIONS.filter(
    (d) => d.isBudgetFriendly
  ).slice(0, 3);
  const featuredGuides = BLOG_POSTS.filter((b) => b.isFeaturedGuide).slice(
    0,
    3
  );
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  return (
    <div>
      <JsonLd
        data={collectionPageSchema({
          name: "Explore India — Curated India Travel Guides",
          description:
            "Curated Indian travel guides, itineraries, and transparent trip budgets.",
          path: "/",
          items: popularDestinations.map((d) => ({
            name: `${d.name} Travel Guide`,
            path: `/destinations/${d.slug}`,
            image: d.image,
          })),
        })}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#16221D] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-india-travel-guide.webp"
            alt="Historic pink sandstone facade of Hawa Mahal in Jaipur welcoming India travellers"
            width={1600}
            height={900}
            priority
            fetchPriority="high"
            sizes="100vw"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16221D]/90 via-[#16221D]/70 to-[#16221D]/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F4A261] backdrop-blur-sm">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              India Travel Guide &amp; Trip Planner
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Discover India, One Destination at a Time.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#E6E0D4] sm:text-lg">
              Explore curated guides to India&apos;s hill stations, heritage
              cities, serene backwaters, and budget-friendly routes—built for
              real travellers, students, and families.
            </p>
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* Regional Exploration Bar */}
      <section
        aria-label="Explore India by region"
        className="border-b border-[#E4DDD0] bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4B5550]">
            Browse by Region:
          </span>
          <div className="flex flex-wrap gap-2">
            {DESTINATION_REGIONS.map((region) => (
              <Link
                key={region}
                href={`/destinations/region/${slugifyCategory(region)}`}
                className="rounded-full border border-[#E4DDD0] bg-[#FAF7F2] px-3.5 py-1.5 text-xs font-semibold text-[#16221D] transition-colors hover:border-[#C85A17] hover:text-[#C85A17]"
              >
                {region}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section
        aria-labelledby="popular-destinations-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A17]">
              Curated Directory
            </span>
            <h2
              id="popular-destinations-heading"
              className="mt-1 font-serif text-3xl font-bold text-[#16221D]"
            >
              Popular Destinations in India
            </h2>
            <p className="mt-1.5 text-sm text-[#4B5550]">
              Explore top tourist places in India with season charts, local food
              picks, day-by-day itineraries, and transparent budget estimates.
            </p>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A17] hover:text-[#16221D]"
          >
            View All {DESTINATIONS.length} Destinations
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularDestinations.map((dest, idx) => (
            <DestinationCard
              key={dest.slug}
              destination={dest}
              priority={idx < 3}
            />
          ))}
        </div>
      </section>

      {/* Trending Destinations */}
      <section
        aria-labelledby="trending-destinations-heading"
        className="border-y border-[#E4DDD0] bg-[#F3EDE2]/60"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1B5E4A]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Seasonal Highlights
              </span>
              <h2
                id="trending-destinations-heading"
                className="mt-1 font-serif text-3xl font-bold text-[#16221D]"
              >
                Trending Travel Destinations
              </h2>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B5E4A] hover:text-[#16221D]"
            >
              Filter by Season &amp; Region
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trendingDestinations.map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Budget-Friendly Recommendations */}
      <section
        aria-labelledby="budget-destinations-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A17]">
              <Wallet className="h-3.5 w-3.5" aria-hidden="true" />
              Student &amp; Backpacker Picks
            </span>
            <h2
              id="budget-destinations-heading"
              className="mt-1 font-serif text-3xl font-bold text-[#16221D]"
            >
              Budget-Friendly Travel Recommendations
            </h2>
            <p className="mt-1.5 text-sm text-[#4B5550]">
              High-value trips reachable by train or state bus with clean hostels
              and local eats.
            </p>
          </div>
          <Link
            href="/blog/best-budget-friendly-trips-in-india"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A17] hover:text-[#16221D]"
          >
            Read Budget Travel Guide
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {budgetDestinations.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      {/* Popular Travel Guides */}
      <section
        aria-labelledby="popular-guides-heading"
        className="border-y border-[#E4DDD0] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1B5E4A]">
                In-Depth Planning
              </span>
              <h2
                id="popular-guides-heading"
                className="mt-1 font-serif text-3xl font-bold text-[#16221D]"
              >
                Popular Travel Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B5E4A] hover:text-[#16221D]"
            >
              Explore All {BLOG_POSTS.length} Articles
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Travel Blogs */}
      <section
        aria-labelledby="latest-blogs-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A17]">
              Travel Journal
            </span>
            <h2
              id="latest-blogs-heading"
              className="mt-1 font-serif text-3xl font-bold text-[#16221D]"
            >
              Latest Itineraries &amp; Cost Breakdowns
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A17] hover:text-[#16221D]"
          >
            Browse All Travel Guides
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Why Choose Explore India */}
      <section
        aria-labelledby="why-explore-india-heading"
        className="border-t border-[#E4DDD0] bg-[#F3EDE2]/70"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="why-explore-india-heading"
              className="font-serif text-3xl font-bold text-[#16221D]"
            >
              Why Choose Explore India?
            </h2>
            <p className="mt-2 text-sm text-[#4B5550] sm:text-base">
              Built for clarity, honest planning, and effortless mobile browsing.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E4DDD0] bg-white p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#C85A17]">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#16221D]">
                Practical Route &amp; Season Guidance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5550]">
                Every destination guide breaks down rail, road, and air access
                alongside clear seasonal advisories so you travel at the right
                time.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4DDD0] bg-white p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#1B5E4A]">
                <Wallet className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#16221D]">
                Transparent Budget Estimates
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5550]">
                We separate approximate transport, stay, and meal estimates—and
                never invent fake prices or unverified hotel ratings.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E4DDD0] bg-white p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#C85A17]">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[#16221D]">
                Fact-Checked &amp; Source-Linked
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5550]">
                Guides link directly to official state tourism portals, Indian
                Railways, and Archaeological Survey of India resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <NewsletterForm />
      </div>
    </div>
  );
}
