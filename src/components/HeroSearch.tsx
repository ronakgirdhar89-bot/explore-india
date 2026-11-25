"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { trackSearch } from "@/lib/analytics";

const QUICK_SEARCHES = ["Manali", "Goa", "Jaipur", "Kerala", "Leh-Ladakh"];

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      trackSearch(q, "hero_search");
      router.push(`/destinations?q=${encodeURIComponent(q)}`);
    } else {
      router.push("/destinations");
    }
  }

  return (
    <div className="mt-7 max-w-xl">
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search destinations in India"
        className="flex flex-col gap-2.5 rounded-2xl bg-white/95 p-2 shadow-xl backdrop-blur-md sm:flex-row sm:items-center"
      >
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4B5550]"
            aria-hidden="true"
          />
          <label htmlFor="hero-destination-search" className="sr-only">
            Search destinations, states, or travel styles
          </label>
          <input
            id="hero-destination-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Manali, Goa, Kerala, Heritage..."
            className="w-full rounded-xl bg-transparent py-3 pl-10 pr-3 text-sm text-[#16221D] placeholder-[#6B726D] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl bg-[#C85A17] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#AE4B10]"
        >
          Explore Places
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/90">
        <span className="font-medium text-white/75">Popular:</span>
        {QUICK_SEARCHES.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => {
              trackSearch(term, "hero_quick_chip");
              router.push(`/destinations?q=${encodeURIComponent(term)}`);
            }}
            className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
