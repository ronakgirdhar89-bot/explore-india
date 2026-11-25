import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Travel & Content Disclaimer | Explore India",
  description:
    "Important disclaimer regarding approximate travel budgets, seasonal weather advisories, monument timings, and official tourism sources on Explore India.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
        Travel &amp; Content Disclaimer
      </h1>
      <p className="mt-2 text-xs text-[#4B5550]">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#35403B]">
        <section>
          <h2 className="font-serif text-xl font-bold text-[#16221D]">
            1. Approximate Budget Estimates
          </h2>
          <p className="mt-2">
            All travel budgets, hotel price ranges, and transport fares listed
            on Explore India are approximate estimates intended solely for trip
            planning. Actual costs vary significantly by season, booking lead
            time, fuel prices, and personal travel preferences.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#16221D]">
            2. Weather, Permits &amp; Safety Advisories
          </h2>
          <p className="mt-2">
            Mountain highways, ferry schedules, and high-altitude passes (such
            as in Himachal Pradesh, Ladakh, and the Andaman Islands) are
            subject to weather conditions and local administrative rules.
            Always verify current advisories, permit requirements, and monument
            opening hours with official tourism portals before travelling.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#16221D]">
            3. Academic Project Notice
          </h2>
          <p className="mt-2">
            Explore India is developed as a production-ready SEO implementation
            project for CSET489, demonstrating real-world technical SEO,
            structured data, and content architecture.
          </p>
        </section>
      </div>
    </article>
  );
}
