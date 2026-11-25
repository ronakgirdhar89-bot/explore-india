import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  ListOrdered,
  User,
} from "lucide-react";
import {
  BLOG_POSTS,
  getBlogBySlug,
  getBlogWordCount,
  getComputedReadingMinutes,
} from "@/data/blogs";
import { getDestinationBySlug } from "@/data/destinations";
import {
  absoluteUrl,
  blogPostingSchema,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  slugifyCategory,
} from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ShareArticle } from "@/components/ShareArticle";
import { BlogCard } from "@/components/BlogCard";
import { DestinationCard } from "@/components/DestinationCard";
import { RichText } from "@/components/RichText";
import { FaqSection } from "@/components/FaqSection";
import { OutboundLink } from "@/components/OutboundLink";
import { ScrollDepthTracker } from "@/components/ScrollDepthTracker";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return { title: "Article Not Found | Explore India" };
  }
  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    imageWidth: 1200,
    imageHeight: 800,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    section: post.category,
    keywords: [post.targetKeyword, post.category, "India travel guide"],
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const wordCount = getBlogWordCount(post);
  const readingMinutes = getComputedReadingMinutes(post);
  const categorySlug = slugifyCategory(post.category);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Travel Blog", path: "/blog" },
    { name: post.category, path: `/blog/category/${categorySlug}` },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const relatedBlogs = post.relatedBlogSlugs
    .map((s) => getBlogBySlug(s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const relatedDestinations = post.relatedDestinationSlugs
    .map((s) => getDestinationBySlug(s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <ScrollDepthTracker
        showProgressBar
        contentType="blog"
        slug={post.slug}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={blogPostingSchema({
          headline: post.title,
          description: post.metaDescription,
          path: `/blog/${post.slug}`,
          image: post.image,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          authorName: post.author,
          section: post.category,
          keywords: [post.targetKeyword, post.category, "Explore India"],
          wordCount,
          timeRequired: `PT${readingMinutes}M`,
          aboutDestinations: relatedDestinations.map((d) => ({
            name: d.name,
            path: `/destinations/${d.slug}`,
          })),
        })}
      />
      <JsonLd data={faqSchema(post.faqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <header>
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#4B5550]">
          <Link
            href={`/blog/category/${categorySlug}`}
            className="rounded-full bg-[#1B5E4A] px-3 py-1 font-semibold text-white hover:bg-[#144738]"
          >
            {post.category}
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 hover:text-[#C85A17]"
          >
            <User className="h-3.5 w-3.5" aria-hidden="true" />
            {post.author}
          </Link>
          <span>·</span>
          <time dateTime={post.updatedAt}>
            Updated{" "}
            {new Date(post.updatedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {readingMinutes} min read
          </span>
        </div>

        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#16221D] sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#4B5550]">
          {post.excerpt}
        </p>

        <div className="mt-6 overflow-hidden rounded-3xl border border-[#E4DDD0] bg-[#EFE8DB]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={800}
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 960px"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </header>

      {/* Quick Answer & Key Takeaways (AEO / Featured Snippet Box) */}
      <div className="mt-8 grid gap-6 md:grid-cols-12">
        <div
          data-speakable="summary"
          className="rounded-2xl border border-[#E4DDD0] bg-white p-5 sm:p-6 md:col-span-7"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#1B5E4A]">
            Quick Answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#35403B] sm:text-base">
            {post.quickAnswer}
          </p>
        </div>

        <div className="rounded-2xl border border-[#E4DDD0] bg-[#F3EDE2]/70 p-5 sm:p-6 md:col-span-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[#C85A17]">
            Key Takeaways
          </p>
          <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-[#35403B] sm:text-sm">
            {post.keyTakeaways.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#1B5E4A]"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Table of Contents */}
      <nav
        aria-label="Table of contents"
        className="mt-8 rounded-2xl border border-[#E4DDD0] bg-white p-5 sm:p-6"
      >
        <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#16221D]">
          <ListOrdered className="h-4 w-4 text-[#C85A17]" aria-hidden="true" />
          In This Guide
        </h2>
        <ol className="mt-3 space-y-2 text-sm">
          {post.sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-flex items-center gap-2 text-[#4B5550] hover:text-[#C85A17]"
              >
                <span className="font-semibold text-[#C85A17]">
                  {index + 1}.
                </span>
                <span>{section.heading}</span>
              </a>
            </li>
          ))}
          {post.faqs.length > 0 && (
            <li>
              <a
                href="#article-faqs"
                className="inline-flex items-center gap-2 text-[#4B5550] hover:text-[#C85A17]"
              >
                <span className="font-semibold text-[#C85A17]">
                  {post.sections.length + 1}.
                </span>
                <span>Frequently Asked Questions</span>
              </a>
            </li>
          )}
        </ol>
      </nav>

      {/* Article Body */}
      <div className="mt-10 space-y-10">
        {post.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="font-serif text-2xl font-bold text-[#16221D]">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-[#35403B]">
              {section.paragraphs.map((p, idx) => (
                <p key={idx}>
                  <RichText text={p} />
                </p>
              ))}
            </div>

            {section.table && (
              <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E4DDD0] bg-white">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="border-b border-[#E4DDD0] bg-[#FAF7F2] px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#16221D]">
                    {section.table.caption}
                  </caption>
                  <thead>
                    <tr className="border-b border-[#E4DDD0] bg-[#FAF7F2]/60 text-xs font-semibold uppercase tracking-wider text-[#4B5550]">
                      {section.table.headers.map((header) => (
                        <th key={header} className="px-4 py-3">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE8DB]">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#FAF7F2]/50">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`px-4 py-3 ${
                              cIdx === 0
                                ? "font-semibold text-[#16221D]"
                                : "text-[#4B5550]"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.subsections && (
              <div className="mt-5 space-y-5">
                {section.subsections.map((sub) => (
                  <div
                    key={sub.heading}
                    className="rounded-2xl border border-[#E4DDD0] bg-white p-5"
                  >
                    <h3 className="font-serif text-lg font-bold text-[#16221D]">
                      {sub.heading}
                    </h3>
                    <div className="mt-2 space-y-2 text-sm leading-relaxed text-[#4B5550]">
                      {sub.paragraphs.map((sp, sIdx) => (
                        <p key={sIdx}>
                          <RichText text={sp} />
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="mt-4 space-y-2.5">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 rounded-xl border border-[#E4DDD0] bg-white px-4 py-3 text-sm leading-relaxed text-[#35403B]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C85A17]" />
                    <span>
                      <RichText text={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex flex-wrap gap-3">
              {section.internalLink && (
                <Link
                  href={section.internalLink.href}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-4 py-2 text-xs font-semibold text-[#C85A17] hover:bg-[#EFE8DB]"
                >
                  {section.internalLink.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              )}
              {section.externalLink && (
                <OutboundLink
                  href={section.externalLink.href}
                  label={section.externalLink.label}
                  context={`blog:${post.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E4DDD0] bg-white px-4 py-2 text-xs font-semibold text-[#1B5E4A] hover:bg-[#FAF7F2]"
                >
                  {section.externalLink.label}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </OutboundLink>
              )}
            </div>
          </section>
        ))}

        {/* FAQs */}
        <FaqSection
          faqs={post.faqs}
          id="article-faqs"
          heading="Frequently Asked Questions"
        />
      </div>

      {/* Editorial Verification Note (E-E-A-T) */}
      <aside className="mt-10 rounded-2xl border border-[#E4DDD0] bg-white p-5 text-xs leading-relaxed text-[#4B5550]">
        <strong className="text-[#16221D]">Editorial Note:</strong> Checked by{" "}
        {post.author}. Costs and seasonal schedules represent approximate
        planning estimates; verify current permit rules and IRCTC/state transport
        timings before booking.{" "}
        <Link href="/about" className="font-semibold text-[#C85A17] hover:underline">
          Read our editorial standards
        </Link>
        .
      </aside>

      {/* Share */}
      <div className="mt-6">
        <ShareArticle
          title={post.title}
          url={absoluteUrl(`/blog/${post.slug}`)}
        />
      </div>

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section
          aria-labelledby="blog-related-dest-heading"
          className="mt-12 border-t border-[#E4DDD0] pt-10"
        >
          <h2
            id="blog-related-dest-heading"
            className="font-serif text-2xl font-bold text-[#16221D]"
          >
            Destinations Featured in This Guide
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedDestinations.map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section
          aria-labelledby="blog-related-posts-heading"
          className="mt-12 border-t border-[#E4DDD0] pt-10"
        >
          <h2
            id="blog-related-posts-heading"
            className="font-serif text-2xl font-bold text-[#16221D]"
          >
            Related Travel Articles
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {relatedBlogs.map((rel) => (
              <BlogCard key={rel.slug} post={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
