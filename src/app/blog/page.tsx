import { Suspense } from "react";
import { BLOG_POSTS } from "@/data/blogs";
import {
  breadcrumbSchema,
  buildMetadata,
  collectionPageSchema,
} from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogDirectory } from "@/components/BlogDirectory";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "India Travel Blog: Itineraries & Budgets | Explore India",
  description:
    "Read original India travel guides, Delhi-to-Manali student budgets, Himachal & Rajasthan circuits, Goa vs Andaman itineraries, and Leh-Ladakh safety tips.",
  path: "/blog",
  keywords: [
    "India travel blog",
    "India travel guide",
    "Budget travel in India",
    "Weekend getaways near Delhi",
  ],
});

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Travel Blog", path: "/blog" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={collectionPageSchema({
          name: "Explore India Travel Blog",
          description:
            "Original India travel itineraries, budget breakdowns, and seasonal planning articles.",
          path: "/blog",
          items: BLOG_POSTS.map((p) => ({
            name: p.title,
            path: `/blog/${p.slug}`,
            image: p.image,
          })),
        })}
      />
      <Breadcrumbs items={breadcrumbs} />

      <header className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1B5E4A]">
          Explore India Journal
        </span>
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
          Travel Guides, Itineraries &amp; Budget Tips
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#4B5550]">
          Practical, well-researched articles across seven categories to help
          you plan smarter journeys across India.
        </p>
      </header>

      <div className="mt-8">
        <Suspense
          fallback={
            <div className="rounded-2xl border border-[#E4DDD0] bg-white p-8 text-sm text-[#4B5550]">
              Loading travel articles...
            </div>
          }
        >
          <BlogDirectory posts={BLOG_POSTS} />
        </Suspense>
      </div>
    </div>
  );
}
