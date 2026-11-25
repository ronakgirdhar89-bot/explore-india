import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Wallet } from "lucide-react";
import type { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  priority?: boolean;
}

export function DestinationCard({ destination, priority = false }: DestinationCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4DDD0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link
        href={`/destinations/${destination.slug}`}
        className="relative aspect-[3/2] w-full overflow-hidden bg-[#EFE8DB]"
      >
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          width={1200}
          height={800}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-[#16221D]/85 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {destination.category}
          </span>
          <span className="rounded-full bg-[#FAF7F2]/95 px-2.5 py-1 text-xs font-semibold text-[#C85A17]">
            {destination.budgetTier}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs font-medium text-[#4B5550]">
          <MapPin className="h-3.5 w-3.5 text-[#C85A17]" aria-hidden="true" />
          <span>
            {destination.state} · {destination.region}
          </span>
        </div>

        <h3 className="mt-1.5 font-serif text-xl font-bold text-[#16221D]">
          <Link
            href={`/destinations/${destination.slug}`}
            className="hover:text-[#C85A17] transition-colors"
          >
            {destination.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#4B5550]">
          {destination.tagline}
        </p>

        <div className="mt-4 space-y-1.5 border-t border-[#EFE8DB] pt-3.5 text-xs text-[#4B5550]">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-[#1B5E4A]" aria-hidden="true" />
            <span>Best time: {destination.bestTimeToVisit.months}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wallet className="h-3.5 w-3.5 text-[#C85A17]" aria-hidden="true" />
            <span>Est. {destination.estimatedBudget.rangeInr}</span>
          </div>
        </div>

        <Link
          href={`/destinations/${destination.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A17] transition-colors hover:text-[#16221D]"
        >
          Explore {destination.name} Guide
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
