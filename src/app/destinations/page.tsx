import { Suspense } from "react";
import { DESTINATIONS } from "@/data/destinations";
import {
  breadcrumbSchema,
  buildMetadata,
  collectionPageSchema,
} from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DestinationDirectory } from "@/components/DestinationDirectory";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Best Destinations in India: Travel Guide | Explore India",
  description:
    "Browse 12 curated destinations across India—Manali, Shimla, Jaipur, Udaipur, Goa, Kerala, Rishikesh, Varanasi, Leh-Ladakh, Darjeeling, Agra, and Andaman.",
  path: "/destinations",
  keywords: [
    "Best destinations in India",
    "Places to visit in India",
    "Best tourist places in India",
  ],
});

export default function DestinationsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={collectionPageSchema({
          name: "Explore India Destination Directory",
          description:
            "Searchable directory of India's top tourist destinations with season charts, routes, and INR budgets.",
          path: "/destinations",
          items: DESTINATIONS.map((d) => ({
            name: `${d.name} Travel Guide`,
            path: `/destinations/${d.slug}`,
            image: d.image,
          })),
        })}
      />
      <Breadcrumbs items={breadcrumbs} />

      <header className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A17]">
          Destination Directory
        </span>
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
          Explore India&apos;s Best Destinations
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#4B5550]">
          Filter by region, travel style, or budget tier to find your next
          journey—from Himalayan passes and heritage forts to coastal lagoons.
        </p>
      </header>

      <div className="mt-8">
        <Suspense
          fallback={
            <div className="rounded-2xl border border-[#E4DDD0] bg-white p-8 text-sm text-[#4B5550]">
              Loading destination directory...
            </div>
          }
        >
          <DestinationDirectory destinations={DESTINATIONS} />
        </Suspense>
      </div>
    </div>
  );
}
