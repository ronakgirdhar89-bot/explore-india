import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getComputedReadingMinutes, type BlogPost } from "@/data/blogs";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const readingMinutes = getComputedReadingMinutes(post);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4DDD0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[3/2] w-full overflow-hidden bg-[#EFE8DB]"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={800}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#1B5E4A] px-3 py-1 text-xs font-medium text-white shadow-sm">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-[#4B5550]">
          <time dateTime={post.updatedAt}>
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

        <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[#16221D]">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-[#C85A17] transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#4B5550]">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[#C85A17] hover:text-[#16221D]"
        >
          Read Article
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
