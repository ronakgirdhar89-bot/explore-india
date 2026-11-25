import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Calendar,
  Car,
  Compass,
  ExternalLink,
  Lightbulb,
  ListOrdered,
  MapPin,
  Plane,
  Train,
  Utensils,
  Wallet,
} from "lucide-react";
import { DESTINATIONS, getDestinationBySlug } from "@/data/destinations";
import { getBlogBySlug } from "@/data/blogs";
import {
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  slugifyCategory,
  touristDestinationSchema,
} from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { DestinationCard } from "@/components/DestinationCard";
import { BlogCard } from "@/components/BlogCard";
import { RichText } from "@/components/RichText";
import { FaqSection } from "@/components/FaqSection";
import { OutboundLink } from "@/components/OutboundLink";
import { ScrollDepthTracker } from "@/components/ScrollDepthTracker";

export function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({ slug: dest.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) {
    return { title: "Destination Not Found | Explore India" };
  }
  return buildMetadata({
    title: dest.seoTitle,
    description: dest.metaDescription,
    path: `/destinations/${dest.slug}`,
    image: dest.image,
    imageAlt: dest.imageAlt,
    imageWidth: 1200,
    imageHeight: 800,
    modifiedTime: dest.updatedAt,
    keywords: [dest.targetKeyword, `${dest.name} travel guide`, dest.state],
  });
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: dest.region, path: `/destinations/region/${slugifyCategory(dest.region)}` },
    { name: dest.name, path: `/destinations/${dest.slug}` },
  ];

  const relatedDestinations = dest.relatedDestinationSlugs
    .map((s) => getDestinationBySlug(s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const relatedBlogs = dest.relatedBlogSlugs
    .map((s) => getBlogBySlug(s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const tocItems = [
    { id: "overview-heading", label: "Overview" },
    { id: "best-time-heading", label: "Best Time" },
    { id: "itinerary-heading", label: "Suggested Itinerary" },
    { id: "attractions-heading", label: "Top Attractions" },
    { id: "food-heading", label: "Local Food" },
    { id: "budget-heading", label: "Budget Table" },
    { id: "reach-heading", label: "How to Reach" },
    { id: "faq-heading", label: "FAQs" },
  ];

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ScrollDepthTracker contentType="destination" slug={dest.slug} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={touristDestinationSchema({
          name: dest.name,
          description: dest.metaDescription,
          path: `/destinations/${dest.slug}`,
          image: dest.image,
          state: dest.state,
          geo: dest.geo,
          attractions: dest.topAttractions.map((a) => ({
            name: a.name,
            description: a.description,
          })),
          dateModified: dest.updatedAt,
        })}
      />
      <JsonLd data={faqSchema(dest.faqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <header className="overflow-hidden rounded-3xl border border-[#E4DDD0] bg-white shadow-sm">
        <div className="grid lg:grid-cols-12">
          <div className="relative aspect-[3/2] lg:col-span-7 lg:aspect-auto lg:min-h-[380px]">
            <Image
              src={dest.image}
              alt={dest.imageAlt}
              width={1200}
              height={800}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-[#C85A17]">
                {dest.category}
              </span>
              <span className="rounded-full bg-[#1B5E4A]/10 px-3 py-1 text-[#1B5E4A]">
                {dest.budgetTier} Friendly
              </span>
              <span className="text-[#4B5550] font-normal">
                Updated{" "}
                <time dateTime={dest.updatedAt}>
                  {new Date(dest.updatedAt).toLocaleDateString("en-IN", {
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-sm text-[#4B5550]">
              <MapPin className="h-4 w-4 text-[#C85A17]" aria-hidden="true" />
              <span>
                {dest.state},{" "}
                <Link
                  href={`/destinations/region/${slugifyCategory(dest.region)}`}
                  className="underline decoration-[#E4DDD0] underline-offset-4 hover:text-[#C85A17]"
                >
                  {dest.region}
                </Link>
              </span>
            </div>

            <h1 className="mt-2 font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
              {dest.name} Travel Guide
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#4B5550]">
              {dest.tagline}
            </p>

            <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-[#EFE8DB] pt-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4B5550]">
                  <Calendar className="h-3.5 w-3.5 text-[#1B5E4A]" aria-hidden="true" />
                  Best Time
                </dt>
                <dd className="mt-1 font-medium text-[#16221D]">
                  {dest.bestTimeToVisit.months}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4B5550]">
                  <Wallet className="h-3.5 w-3.5 text-[#C85A17]" aria-hidden="true" />
                  Est. Budget ({dest.idealDuration})
                </dt>
                <dd className="mt-1 font-medium text-[#16221D]">
                  {dest.estimatedBudget.rangeInr}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4B5550]">
                  <Plane className="h-3.5 w-3.5 text-[#1B5E4A]" aria-hidden="true" />
                  Nearest Airport
                </dt>
                <dd className="mt-1 text-xs font-medium text-[#16221D]">
                  {dest.nearestAirport}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4B5550]">
                  <Train className="h-3.5 w-3.5 text-[#C85A17]" aria-hidden="true" />
                  Nearest Railhead
                </dt>
                <dd className="mt-1 text-xs font-medium text-[#16221D]">
                  {dest.nearestRailhead}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      {/* Quick Answer Snippet + Jump Navigation */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <div
          data-speakable="summary"
          className="rounded-2xl border border-[#E4DDD0] bg-white p-5 sm:p-6 lg:col-span-8"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#1B5E4A]">
            Quick Trip Summary
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-[#35403B] sm:text-base">
            {dest.quickAnswer}
          </p>
        </div>

        <nav
          aria-label="Jump to section"
          className="rounded-2xl border border-[#E4DDD0] bg-white p-5 lg:col-span-4"
        >
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16221D]">
            <ListOrdered className="h-3.5 w-3.5 text-[#C85A17]" aria-hidden="true" />
            Jump to Section
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-2 text-xs font-medium">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-block rounded-lg border border-[#E4DDD0] bg-[#FAF7F2] px-2.5 py-1 text-[#35403B] hover:border-[#C85A17] hover:text-[#C85A17]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Layout */}
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-8">
          {/* Overview */}
          <section aria-labelledby="overview-heading" className="scroll-mt-24">
            <h2
              id="overview-heading"
              className="font-serif text-2xl font-bold text-[#16221D]"
            >
              Destination Overview: {dest.name}
            </h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-[#35403B]">
              {dest.overview.map((para, i) => (
                <p key={i}>
                  <RichText text={para} />
                </p>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section
            aria-labelledby="best-time-heading"
            className="scroll-mt-24 rounded-2xl border border-[#E4DDD0] bg-white p-6"
          >
            <h2
              id="best-time-heading"
              className="flex items-center gap-2 font-serif text-2xl font-bold text-[#16221D]"
            >
              <Calendar className="h-5 w-5 text-[#1B5E4A]" aria-hidden="true" />
              Best Time to Visit {dest.name}
            </h2>
            <p className="mt-2 text-sm text-[#4B5550]">
              {dest.bestTimeToVisit.summary}
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E4DDD0] bg-[#FAF7F2] text-xs font-semibold uppercase tracking-wider text-[#4B5550]">
                    <th className="px-4 py-2.5">Season</th>
                    <th className="px-4 py-2.5">Months</th>
                    <th className="px-4 py-2.5">Travel Conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE8DB]">
                  {dest.bestTimeToVisit.seasons.map((season) => (
                    <tr key={season.label}>
                      <td className="px-4 py-3 font-semibold text-[#C85A17]">
                        {season.label}
                      </td>
                      <td className="px-4 py-3 font-medium text-[#16221D]">
                        {season.period}
                      </td>
                      <td className="px-4 py-3 text-[#4B5550]">{season.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Suggested Itinerary */}
          <section aria-labelledby="itinerary-heading" className="scroll-mt-24">
            <h2
              id="itinerary-heading"
              className="font-serif text-2xl font-bold text-[#16221D]"
            >
              Recommended {dest.idealDuration} {dest.name} Itinerary
            </h2>
            <div className="mt-4 space-y-3">
              {dest.suggestedItinerary.map((stop) => (
                <div
                  key={stop.day}
                  className="rounded-2xl border border-[#E4DDD0] bg-white p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#1B5E4A] px-3 py-0.5 text-xs font-semibold text-white">
                      {stop.day}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#16221D]">
                      {stop.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5550]">
                    {stop.plan}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Top Attractions */}
          <section aria-labelledby="attractions-heading" className="scroll-mt-24">
            <h2
              id="attractions-heading"
              className="flex items-center gap-2 font-serif text-2xl font-bold text-[#16221D]"
            >
              <Compass className="h-5 w-5 text-[#C85A17]" aria-hidden="true" />
              Top Tourist Attractions in {dest.name}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {dest.topAttractions.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-[#E4DDD0] bg-white p-5"
                >
                  <span className="inline-block rounded-full bg-[#FAF7F2] px-2.5 py-0.5 text-[11px] font-semibold text-[#1B5E4A]">
                    {item.type}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-bold text-[#16221D]">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4B5550]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Things to Do */}
          <section aria-labelledby="things-to-do-heading" className="scroll-mt-24">
            <h2
              id="things-to-do-heading"
              className="font-serif text-2xl font-bold text-[#16221D]"
            >
              Things to Do in {dest.name}
            </h2>
            <ul className="mt-3 space-y-2.5">
              {dest.thingsToDo.map((activity) => (
                <li
                  key={activity}
                  className="flex items-start gap-2.5 rounded-xl border border-[#E4DDD0] bg-white px-4 py-3 text-sm text-[#35403B]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#C85A17]" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Local Food */}
          <section aria-labelledby="food-heading" className="scroll-mt-24">
            <h2
              id="food-heading"
              className="flex items-center gap-2 font-serif text-2xl font-bold text-[#16221D]"
            >
              <Utensils className="h-5 w-5 text-[#C85A17]" aria-hidden="true" />
              Local Food Recommendations
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {dest.localFood.map((food) => (
                <div
                  key={food.dish}
                  className="rounded-2xl border border-[#E4DDD0] bg-white p-4"
                >
                  <h3 className="font-serif text-base font-bold text-[#16221D]">
                    {food.dish}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5550]">
                    {food.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Accommodation Guidance */}
          <section
            aria-labelledby="stay-heading"
            className="scroll-mt-24 rounded-2xl border border-[#E4DDD0] bg-white p-6"
          >
            <h2
              id="stay-heading"
              className="flex items-center gap-2 font-serif text-2xl font-bold text-[#16221D]"
            >
              <BedDouble className="h-5 w-5 text-[#1B5E4A]" aria-hidden="true" />
              Accommodation Guidance
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#35403B]">
              <p>
                <strong>Budget Stays:</strong> {dest.accommodationGuidance.budget}
              </p>
              <p>
                <strong>Mid-Range &amp; Families:</strong>{" "}
                {dest.accommodationGuidance.midRange}
              </p>
              <p className="rounded-xl bg-[#FAF7F2] p-3 text-xs text-[#4B5550]">
                <strong>Booking Tip:</strong> {dest.accommodationGuidance.tip}
              </p>
            </div>
          </section>

          {/* How to Reach */}
          <section
            aria-labelledby="reach-heading"
            className="scroll-mt-24 rounded-2xl border border-[#E4DDD0] bg-white p-6"
          >
            <h2
              id="reach-heading"
              className="font-serif text-2xl font-bold text-[#16221D]"
            >
              How to Reach {dest.name}
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#35403B]">
              <div className="flex items-start gap-3">
                <Plane className="mt-0.5 h-4 w-4 shrink-0 text-[#C85A17]" aria-hidden="true" />
                <p>
                  <strong>By Air:</strong> {dest.howToReach.byAir}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Train className="mt-0.5 h-4 w-4 shrink-0 text-[#1B5E4A]" aria-hidden="true" />
                <p>
                  <strong>By Train:</strong> {dest.howToReach.byTrain}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Car className="mt-0.5 h-4 w-4 shrink-0 text-[#C85A17]" aria-hidden="true" />
                <p>
                  <strong>By Road:</strong> {dest.howToReach.byRoad}
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <FaqSection
            faqs={dest.faqs}
            id="faq-heading"
            heading={`${dest.name} Travel FAQs`}
          />
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:col-span-4">
          {/* Estimated Travel Budget */}
          <div
            id="budget-heading"
            className="scroll-mt-24 rounded-2xl border border-[#E4DDD0] bg-white p-6 shadow-sm"
          >
            <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-[#16221D]">
              <Wallet className="h-5 w-5 text-[#C85A17]" aria-hidden="true" />
              Estimated Travel Budget
            </h2>
            <p className="mt-2 text-2xl font-bold text-[#C85A17]">
              {dest.estimatedBudget.rangeInr}
            </p>
            <p className="text-xs font-medium text-[#4B5550]">
              {dest.estimatedBudget.duration}
            </p>

            <table className="mt-4 w-full border-t border-[#EFE8DB] text-left text-sm">
              <thead>
                <tr className="border-b border-[#EFE8DB] text-[11px] uppercase tracking-wider text-[#4B5550]">
                  <th className="py-2 font-semibold">Expense</th>
                  <th className="py-2 text-right font-semibold">Estimate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE8DB]">
                {dest.estimatedBudget.breakdown.map((row) => (
                  <tr key={row.item}>
                    <td className="py-2.5 pr-3 text-xs text-[#4B5550]">
                      {row.item}
                    </td>
                    <td className="py-2.5 text-right text-xs font-semibold text-[#16221D] whitespace-nowrap">
                      {row.estimate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 rounded-xl bg-[#FAF7F2] p-3 text-xs leading-relaxed text-[#4B5550]">
              {dest.estimatedBudget.note}
            </p>
          </div>

          {/* Travel Tips */}
          <div className="rounded-2xl border border-[#E4DDD0] bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-[#16221D]">
              <Lightbulb className="h-5 w-5 text-[#1B5E4A]" aria-hidden="true" />
              Essential Travel Tips
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#35403B]">
              {dest.travelTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B5E4A]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Source */}
          <div className="rounded-2xl border border-[#E4DDD0] bg-[#16221D] p-6 text-white">
            <h2 className="font-serif text-lg font-bold">
              Official Tourism Resource
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-[#C2BCB0]">
              Check current permits, monument timings, and regional travel
              advisories directly from the official portal:
            </p>
            <OutboundLink
              href={dest.officialSource.url}
              label={dest.officialSource.label}
              context={`destination:${dest.slug}`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#C85A17] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#AE4B10]"
            >
              {dest.officialSource.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </OutboundLink>
          </div>
        </aside>
      </div>

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section
          aria-labelledby="related-destinations-heading"
          className="mt-14 border-t border-[#E4DDD0] pt-10"
        >
          <div className="flex items-center justify-between">
            <h2
              id="related-destinations-heading"
              className="font-serif text-2xl font-bold text-[#16221D]"
            >
              Related Destinations in India
            </h2>
            <Link
              href="/destinations"
              className="text-sm font-semibold text-[#C85A17] hover:text-[#16221D]"
            >
              View All
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedDestinations.map((rel) => (
              <DestinationCard key={rel.slug} destination={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Related Blog Articles */}
      {relatedBlogs.length > 0 && (
        <section
          aria-labelledby="related-blogs-heading"
          className="mt-14 border-t border-[#E4DDD0] pt-10"
        >
          <div className="flex items-center justify-between">
            <h2
              id="related-blogs-heading"
              className="font-serif text-2xl font-bold text-[#16221D]"
            >
              Related Travel Articles
            </h2>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#C85A17] hover:text-[#16221D]"
            >
              All Articles
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
