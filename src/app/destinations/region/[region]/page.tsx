import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Compass } from "lucide-react";
import {
  DESTINATIONS,
  DESTINATION_REGIONS,
  type DestinationRegion,
} from "@/data/destinations";
import {
  breadcrumbSchema,
  buildMetadata,
  collectionPageSchema,
  slugifyCategory,
} from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DestinationCard } from "@/components/DestinationCard";
import { JsonLd } from "@/components/JsonLd";

const REGION_DETAILS: Record<
  DestinationRegion,
  { title: string; description: string; summary: string }
> = {
  "North India": {
    title: "Best Places in North India: Himalayas & Taj | Explore India",
    description:
      "Explore top North India travel guides—Manali, Shimla, Rishikesh, Varanasi, Leh-Ladakh, and Agra—with seasons, routes, and budgets.",
    summary:
      "North India stretches from the high-altitude trans-Himalayan passes of Leh-Ladakh and pine valleys of Himachal Pradesh down to spiritual ghats along the Ganga and Mughal monuments in Agra.",
  },
  "West India": {
    title: "Best Places in West India: Rajasthan & Goa | Explore India",
    description:
      "Discover West India travel guides covering Jaipur's forts, Udaipur's lakes, and North vs South Goa beaches with budgets and best seasons.",
    summary:
      "West India pairs Rajasthan's royal sandstone forts and Udaipur's Aravalli lakes with Goa's palm-lined Arabian Sea coastline and UNESCO Indo-Portuguese heritage.",
  },
  "South India": {
    title: "Best Places in South India: Kerala & Hills | Explore India",
    description:
      "Plan a South India trip with our Kerala guide covering Alleppey backwaters, Munnar tea gardens, Fort Kochi, local food, and December tips.",
    summary:
      "South India rewards slow travellers with misty Western Ghats tea estates, serene backwater village canals, historic spice ports, and lush coastal cliffs.",
  },
  "East India": {
    title: "Best Places in East India: Darjeeling Guide | Explore India",
    description:
      "Explore East India travel guides starting with Darjeeling's tea gardens, Tiger Hill Kanchenjunga sunrise, and UNESCO Himalayan Toy Train.",
    summary:
      "East India welcomes travellers to misty Himalayan tea ridges, heritage narrow-gauge mountain railways, and crisp Kanchenjunga sunrise views.",
  },
  Islands: {
    title: "Andaman & Nicobar Islands Travel Guides | Explore India",
    description:
      "Plan an Indian island holiday with our Andaman & Nicobar guide covering Port Blair, Havelock, Neil Island ferries, diving, and 5-day budgets.",
    summary:
      "India's Bay of Bengal islands protect crystal coral reefs, powdery white-sand beaches, and quiet mangrove lagoons connected by scenic ferries.",
  },
};

function getRegionFromSlug(slug: string): DestinationRegion | undefined {
  return DESTINATION_REGIONS.find((r) => slugifyCategory(r) === slug);
}

export function generateStaticParams() {
  return DESTINATION_REGIONS.map((region) => ({
    region: slugifyCategory(region),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getRegionFromSlug(slug);
  if (!region) {
    return { title: "Region Not Found | Explore India" };
  }
  const details = REGION_DETAILS[region];
  const firstDest = DESTINATIONS.find((d) => d.region === region);

  return buildMetadata({
    title: details.title,
    description: details.description,
    path: `/destinations/region/${slug}`,
    image: firstDest?.image,
    imageAlt: firstDest?.imageAlt,
    keywords: [
      `places to visit in ${region}`,
      `${region} travel guide`,
      "India destinations by region",
    ],
  });
}

export default async function RegionDestinationsPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: slug } = await params;
  const region = getRegionFromSlug(slug);

  if (!region) {
    notFound();
  }

  const regionalDestinations = DESTINATIONS.filter((d) => d.region === region);
  const details = REGION_DETAILS[region];
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: region, path: `/destinations/region/${slug}` },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={collectionPageSchema({
          name: `${region} Travel Guides`,
          description: details.description,
          path: `/destinations/region/${slug}`,
          items: regionalDestinations.map((d) => ({
            name: `${d.name} Travel Guide`,
            path: `/destinations/${d.slug}`,
            image: d.image,
          })),
        })}
      />

      <Breadcrumbs items={breadcrumbs} />

      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A17]">
          <Compass className="h-3.5 w-3.5" aria-hidden="true" />
          Regional Hub
        </span>
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
          Best Places to Visit in {region}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#4B5550]">
          {details.summary}
        </p>
      </header>

      <nav aria-label="Other Indian regions" className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/destinations"
          className="rounded-full border border-[#E4DDD0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#16221D] hover:bg-[#EFE8DB]"
        >
          All Regions
        </Link>
        {DESTINATION_REGIONS.map((r) => {
          const rSlug = slugifyCategory(r);
          const active = r === region;
          return (
            <Link
              key={r}
              href={`/destinations/region/${rSlug}`}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "bg-[#16221D] text-white"
                  : "border border-[#E4DDD0] bg-white text-[#4B5550] hover:bg-[#EFE8DB]"
              }`}
            >
              {r}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {regionalDestinations.map((dest, idx) => (
          <DestinationCard
            key={dest.slug}
            destination={dest}
            priority={idx < 3}
          />
        ))}
      </div>
    </div>
  );
}
