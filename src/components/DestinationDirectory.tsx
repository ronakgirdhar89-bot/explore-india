"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RotateCcw, Search } from "lucide-react";
import {
  DESTINATION_CATEGORIES,
  DESTINATION_REGIONS,
  type BudgetTier,
  type Destination,
  type DestinationCategory,
  type DestinationRegion,
} from "@/data/destinations";
import { DestinationCard } from "@/components/DestinationCard";
import { trackSearch } from "@/lib/analytics";
import { slugifyCategory } from "@/lib/seo";

interface DestinationDirectoryProps {
  destinations: Destination[];
}

const BUDGET_TIERS: BudgetTier[] = ["Budget", "Mid-Range", "Flexible"];

export function DestinationDirectory({
  destinations,
}: DestinationDirectoryProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCat = searchParams.get("category") ?? "All";

  return (
    <DestinationDirectoryInner
      key={`${initialQuery}:${initialCat}`}
      destinations={destinations}
      initialQuery={initialQuery}
      initialCategory={initialCat}
    />
  );
}

function DestinationDirectoryInner({
  destinations,
  initialQuery,
  initialCategory,
}: {
  destinations: Destination[];
  initialQuery: string;
  initialCategory: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [region, setRegion] = useState<DestinationRegion | "All">("All");
  const [category, setCategory] = useState<DestinationCategory | "All">(
    DESTINATION_CATEGORIES.includes(initialCategory as DestinationCategory)
      ? (initialCategory as DestinationCategory)
      : "All"
  );
  const [budget, setBudget] = useState<BudgetTier | "All">("All");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinations.filter((d) => {
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.state.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q);

      const matchesRegion = region === "All" || d.region === region;
      const matchesCategory = category === "All" || d.category === category;
      const matchesBudget = budget === "All" || d.budgetTier === budget;

      return matchesQuery && matchesRegion && matchesCategory && matchesBudget;
    });
  }, [destinations, query, region, category, budget]);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      trackSearch(trimmed, "destination_directory", filtered.length);
    }, 600);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query, filtered.length]);

  function resetFilters() {
    setQuery("");
    setRegion("All");
    setCategory("All");
    setBudget("All");
  }

  return (
    <div>
      <nav aria-label="Browse destinations by region" className="mb-5 flex flex-wrap gap-2">
        <span className="self-center text-xs font-semibold uppercase tracking-wider text-[#4B5550] mr-1">
          Regions:
        </span>
        {DESTINATION_REGIONS.map((r) => (
          <Link
            key={r}
            href={`/destinations/region/${slugifyCategory(r)}`}
            className="rounded-full border border-[#E4DDD0] bg-white px-3.5 py-1 text-xs font-semibold text-[#16221D] transition-colors hover:border-[#C85A17] hover:text-[#C85A17]"
          >
            {r}
          </Link>
        ))}
      </nav>

      <div className="rounded-2xl border border-[#E4DDD0] bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <label
              htmlFor="dest-search"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#4B5550]"
            >
              Search
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4B5550]"
                aria-hidden="true"
              />
              <input
                id="dest-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="City, state, or theme..."
                className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] py-2.5 pl-9 pr-3 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="dest-region"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#4B5550]"
            >
              Region
            </label>
            <select
              id="dest-region"
              value={region}
              onChange={(e) => setRegion(e.target.value as DestinationRegion | "All")}
              className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-3 py-2.5 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
            >
              <option value="All">All Regions</option>
              {DESTINATION_REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="dest-category"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#4B5550]"
            >
              Travel Style
            </label>
            <select
              id="dest-category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as DestinationCategory | "All")
              }
              className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-3 py-2.5 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
            >
              <option value="All">All Styles</option>
              {DESTINATION_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="dest-budget"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#4B5550]"
            >
              Budget Tier
            </label>
            <select
              id="dest-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value as BudgetTier | "All")}
              className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-3 py-2.5 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
            >
              <option value="All">All Budgets</option>
              {BUDGET_TIERS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#EFE8DB] pt-3 text-xs text-[#4B5550]">
          <p>
            Showing <strong className="text-[#16221D]">{filtered.length}</strong> of{" "}
            {destinations.length} destinations
          </p>
          {(query || region !== "All" || category !== "All" || budget !== "All") && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 font-semibold text-[#C85A17] hover:text-[#16221D]"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-[#E4DDD0] bg-white p-10 text-center">
          <h2 className="font-serif text-xl font-bold text-[#16221D]">
            No matching destinations found
          </h2>
          <p className="mt-2 text-sm text-[#4B5550]">
            Try clearing your search term or selecting a broader region or budget
            filter.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 rounded-xl bg-[#C85A17] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#AE4B10]"
          >
            Show All Destinations
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dest, idx) => (
            <DestinationCard key={dest.slug} destination={dest} priority={idx < 3} />
          ))}
        </div>
      )}
    </div>
  );
}
