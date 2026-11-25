import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogCategory,
} from "@/data/blogs";
import {
  breadcrumbSchema,
  buildMetadata,
  collectionPageSchema,
  slugifyCategory,
} from "@/lib/seo";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const CATEGORY_DETAILS: Record<
  BlogCategory,
  { title: string; description: string; intro: string }
> = {
  "Travel Guides": {
    title: "India Travel Guides & Route Plans | Explore India",
    description:
      "In-depth India travel guides with seasonal advice, local transport options, and itineraries for Manali, Kerala, and classic routes.",
    intro:
      "Comprehensive destination playbooks combining seasonal climate advice, reliable public transit choices, and day-by-day route logic.",
  },
  "Budget Travel": {
    title: "Budget Travel Guides in India (INR) | Explore India",
    description:
      "Student and solo budget travel guides across India with real IRCTC train fares, HRTC Volvo pricing, hostel tips, and under-₹8,000 trip math.",
    intro:
      "Honest, itemized rupee breakdowns for students and backpackers looking to travel safely by Indian Railways, state buses, and clean hostels.",
  },
  "Adventure Travel": {
    title: "Adventure Travel Guides in India | Explore India",
    description:
      "Adventure travel guides for Leh-Ladakh high passes, Rishikesh Grade I–III white-water rafting, permits, and mountain safety.",
    intro:
      "Safety-first guides covering river rafting rapid grades, Himalayan altitude acclimatization, permit procedures, and gear checklists.",
  },
  "Hill Stations": {
    title: "Best Hill Stations in India Guides | Explore India",
    description:
      "Compare India's top mountain retreats—Shimla vs Manali, Himachal Pradesh top 10, Darjeeling, and summer hill stations across India.",
    intro:
      "Escape summer heat or plan snowy winter holidays across Himachal Pradesh, Uttarakhand, West Bengal, and South India's Western Ghats.",
  },
  Beaches: {
    title: "Indian Beach & Island Travel Guides | Explore India",
    description:
      "Beach and island travel guides for North vs South Goa and 5-day Andaman itineraries covering Port Blair, Havelock, and Neil Island ferries.",
    intro:
      "Practical coastal and island guides comparing lively beaches, quiet lagoons, catamaran ferry timetables, and coral-safe snorkelling.",
  },
  "Cultural Tourism": {
    title: "Indian Heritage & Cultural Travel Guides | Explore India",
    description:
      "Explore India's living heritage in Rajasthan and Varanasi with family circuit routes, ghat etiquette, and fort museum tips.",
    intro:
      "Deep-dive heritage itineraries built around Rajput forts, lakeside palaces, river ghats, and UNESCO monuments across India.",
  },
  "Weekend Getaways": {
    title: "Best Weekend Getaways From Delhi | Explore India",
    description:
      "Discover weekend getaways near Delhi under 6 hours by Gatimaan Express, Vande Bharat, and expressways—Agra, Jaipur, Rishikesh, and Shimla.",
    intro:
      "Smart 2-to-3-day itineraries engineered around Friday night trains and early-morning expressway departures.",
  },
};

function getCategoryFromSlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((cat) => slugifyCategory(cat) === slug);
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    category: slugifyCategory(category),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryFromSlug(slug);
  if (!category) {
    return { title: "Category Not Found | Explore India" };
  }
  const details = CATEGORY_DETAILS[category];
  const firstPost = BLOG_POSTS.find((p) => p.category === category);

  return buildMetadata({
    title: details.title,
    description: details.description,
    path: `/blog/category/${slug}`,
    image: firstPost?.image,
    imageAlt: firstPost?.imageAlt,
    keywords: [category, `${category} India`, "India travel blog"],
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryFromSlug(slug);

  if (!category) {
    notFound();
  }

  const posts = BLOG_POSTS.filter((p) => p.category === category);
  const details = CATEGORY_DETAILS[category];
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Travel Blog", path: "/blog" },
    { name: category, path: `/blog/category/${slug}` },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={collectionPageSchema({
          name: `${category} — Explore India Blog`,
          description: details.description,
          path: `/blog/category/${slug}`,
          items: posts.map((p) => ({
            name: p.title,
            path: `/blog/${p.slug}`,
            image: p.image,
          })),
        })}
      />

      <Breadcrumbs items={breadcrumbs} />

      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1B5E4A]">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          Blog Category
        </span>
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
          {category} in India
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#4B5550]">
          {details.intro}
        </p>
      </header>

      <nav aria-label="Blog categories" className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className="rounded-full border border-[#E4DDD0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#16221D] hover:bg-[#EFE8DB]"
        >
          All Categories ({BLOG_POSTS.length})
        </Link>
        {BLOG_CATEGORIES.map((cat) => {
          const catSlug = slugifyCategory(cat);
          const active = cat === category;
          return (
            <Link
              key={cat}
              href={`/blog/category/${catSlug}`}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "bg-[#C85A17] text-white"
                  : "border border-[#E4DDD0] bg-white text-[#4B5550] hover:bg-[#EFE8DB]"
              }`}
            >
              {cat}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
