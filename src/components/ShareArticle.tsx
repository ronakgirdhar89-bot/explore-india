"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { trackShareAction } from "@/lib/analytics";

interface ShareArticleProps {
  title: string;
  url: string;
}

export function ShareArticle({ title, url }: ShareArticleProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackShareAction("copy_link", title, url);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap items-center gap-2.5 rounded-2xl border border-[#E4DDD0] bg-[#FAF7F2] px-4 py-3">
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4B5550]">
        <Share2 className="h-4 w-4 text-[#C85A17]" aria-hidden="true" />
        Share Guide:
      </span>
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackShareAction("whatsapp", title, url)}
        className="rounded-lg border border-[#E4DDD0] bg-white px-3 py-1.5 text-xs font-medium text-[#16221D] transition-colors hover:border-[#1B5E4A] hover:text-[#1B5E4A]"
      >
        WhatsApp
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackShareAction("x_twitter", title, url)}
        className="rounded-lg border border-[#E4DDD0] bg-white px-3 py-1.5 text-xs font-medium text-[#16221D] transition-colors hover:border-[#C85A17] hover:text-[#C85A17]"
      >
        X / Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackShareAction("linkedin", title, url)}
        className="rounded-lg border border-[#E4DDD0] bg-white px-3 py-1.5 text-xs font-medium text-[#16221D] transition-colors hover:border-[#C85A17] hover:text-[#C85A17]"
      >
        LinkedIn
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4DDD0] bg-white px-3 py-1.5 text-xs font-medium text-[#16221D] transition-colors hover:bg-[#EFE8DB]"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-[#1B5E4A]" aria-hidden="true" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            Copy Link
          </>
        )}
      </button>
    </div>
  );
}
