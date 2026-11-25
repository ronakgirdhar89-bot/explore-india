import Link from "next/link";
import { Compass, Globe2, ShieldCheck, Users } from "lucide-react";
import { breadcrumbSchema, buildMetadata, webPageSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "About Explore India — Mission & Editorial Guide",
  description:
    "Learn about Explore India, our mission to help travellers plan responsible, budget-friendly journeys across India, and our factual editorial standards.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={webPageSchema({
          type: "AboutPage",
          name: "About Explore India",
          description:
            "Mission, editorial standards, and responsible tourism guidelines behind Explore India.",
          path: "/about",
        })}
      />
      <Breadcrumbs items={breadcrumbs} />

      <header className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A17]">
          About Explore India
        </span>
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
          Discover India, One Destination at a Time.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#4B5550]">
          Explore India is an independent travel and tourism guide built to help
          students, families, solo backpackers, and international visitors
          navigate India&apos;s diverse landscapes with clarity and confidence.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-[#E4DDD0] bg-white p-6">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#C85A17]">
            <Compass className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-serif text-2xl font-bold text-[#16221D]">
            Our Mission
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#4B5550]">
            To organize practical, transparent travel information—covering best
            seasons, public transport routes, local food, and approximate
            budgets—so anyone can plan a safe, rewarding trip across India.
          </p>
        </section>

        <section className="rounded-2xl border border-[#E4DDD0] bg-white p-6">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#1B5E4A]">
            <Globe2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-serif text-2xl font-bold text-[#16221D]">
            Our Vision
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#4B5550]">
            To encourage responsible, culturally respectful tourism across every
            region of India—from popular Himalayan towns to lesser-known coastal
            and heritage circuits.
          </p>
        </section>
      </div>

      <section className="mt-10 rounded-2xl border border-[#E4DDD0] bg-white p-6 sm:p-8">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#16221D]">
          <ShieldCheck className="h-5 w-5 text-[#1B5E4A]" aria-hidden="true" />
          Editorial &amp; Factual Integrity
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5550]">
          <p>
            Travel costs, monument timings, and mountain road conditions change
            frequently. Explore India clearly labels all trip budgets as
            approximate estimates and links directly to official state tourism
            boards, Indian Railways, and Archaeological Survey of India portals.
          </p>
          <p>
            This platform was also engineered as a comprehensive Search Engine
            Optimization (SEO) academic project for CSET489, demonstrating
            semantic HTML, structured JSON-LD schema, Core Web Vitals
            optimization, and search-intent content architecture.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/destinations"
            className="rounded-xl bg-[#C85A17] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#AE4B10]"
          >
            Browse Destinations
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-5 py-2.5 text-sm font-semibold text-[#16221D] hover:bg-[#EFE8DB]"
          >
            <Users className="h-4 w-4" aria-hidden="true" />
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
