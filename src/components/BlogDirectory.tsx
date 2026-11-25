"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { BLOG_CATEGORIES, type BlogCategory, type BlogPost } from "@/data/blogs";
import { BlogCard } from "@/components/BlogCard";
import { trackSearch } from "@/lib/analytics";
import { slugifyCategory } from "@/lib/seo";

interface BlogDirectoryProps {
  posts: BlogPost[];
}

export function BlogDirectory({ posts }: BlogDirectoryProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "All">(
    BLOG_CATEGORIES.includes(initialCategory as BlogCategory)
      ? (initialCategory as BlogCategory)
      : "All"
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCat =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.targetKeyword.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [posts, query, selectedCategory]);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      trackSearch(trimmed, "blog_directory", filtered.length);
    }, 600);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query, filtered.length]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-[#E4DDD0] bg-white p-5 shadow-sm">
        <div className="relative max-w-md">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4B5550]"
            aria-hidden="true"
          />
          <label htmlFor="blog-search" className="sr-only">
            Search travel blog articles
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Manali Volvo, Himachal, Goa, budget..."
            className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] py-2.5 pl-10 pr-4 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              selectedCategory === "All"
                ? "bg-[#16221D] text-white"
                : "bg-[#FAF7F2] text-[#4B5550] hover:bg-[#EFE8DB]"
            }`}
          >
            All Articles ({posts.length})
          </button>
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-[#C85A17] text-white"
                  : "bg-[#FAF7F2] text-[#4B5550] hover:bg-[#EFE8DB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <nav
          aria-label="Category hub pages"
          className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-[#EFE8DB] pt-3 text-xs text-[#4B5550]"
        >
          <span className="font-semibold text-[#16221D]">Topic Hubs:</span>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${slugifyCategory(cat)}`}
              className="hover:text-[#C85A17] underline decoration-[#E4DDD0] underline-offset-4"
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-[#E4DDD0] bg-white p-10 text-center">
          <h2 className="font-serif text-xl font-bold text-[#16221D]">
            No articles match your search
          </h2>
          <p className="mt-2 text-sm text-[#4B5550]">
            Try another keyword or switch back to all categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 rounded-xl bg-[#C85A17] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#AE4B10]"
          >
            View All Articles
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
