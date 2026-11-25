"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

interface ScrollDepthTrackerProps {
  showProgressBar?: boolean;
  contentType: "destination" | "blog";
  slug: string;
}

const MILESTONES = [25, 50, 75, 90];

export function ScrollDepthTracker({
  showProgressBar = false,
  contentType,
  slug,
}: ScrollDepthTrackerProps) {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const reachedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    reachedRef.current = new Set();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      if (showProgressBar) {
        setProgress(pct);
      }
      for (const milestone of MILESTONES) {
        if (pct >= milestone && !reachedRef.current.has(milestone)) {
          reachedRef.current.add(milestone);
          trackEvent("scroll_depth", {
            percent_scrolled: milestone,
            content_type: contentType,
            content_slug: slug,
            page_path: pathname,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentType, slug, pathname, showProgressBar]);

  if (!showProgressBar) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-[#C85A17] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
