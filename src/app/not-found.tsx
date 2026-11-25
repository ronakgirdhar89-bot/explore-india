import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF7F2] border border-[#E4DDD0] text-[#C85A17]">
        <Compass className="h-7 w-7" aria-hidden="true" />
      </span>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#C85A17]">
        404 — Page Not Found
      </p>
      <h1 className="mt-2 font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
        This trail doesn&apos;t exist yet
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-[#4B5550] sm:text-base">
        The destination or travel guide you&apos;re looking for may have moved
        or the URL might be mistyped. Explore our active destinations or travel
        blog below.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-[#16221D] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#263830]"
        >
          Back to Home
        </Link>
        <Link
          href="/destinations"
          className="rounded-xl bg-[#C85A17] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#AE4B10]"
        >
          Browse Destinations
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-[#E4DDD0] bg-white px-5 py-2.5 text-sm font-semibold text-[#16221D] hover:bg-[#FAF7F2]"
        >
          Read Travel Blog
        </Link>
      </div>
    </div>
  );
}
