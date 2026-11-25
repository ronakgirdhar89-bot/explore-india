import Link from "next/link";
import { Fragment } from "react";

interface RichTextProps {
  text: string;
}

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Safely renders inline markdown links `[label](href)` within editorial paragraphs.
 */
export function RichText({ text }: RichTextProps) {
  const parts: Array<string | { label: string; href: string }> = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const idx = match.index ?? 0;
    if (idx > lastIndex) {
      parts.push(text.slice(lastIndex, idx));
    }
    parts.push({ label: match[1], href: match[2] });
    lastIndex = idx + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === "string") {
          return <Fragment key={i}>{part}</Fragment>;
        }
        if (part.href.startsWith("/")) {
          return (
            <Link
              key={i}
              href={part.href}
              className="font-medium text-[#C85A17] underline decoration-[#C85A17]/40 underline-offset-4 transition-colors hover:text-[#16221D] hover:decoration-[#16221D]"
            >
              {part.label}
            </Link>
          );
        }
        return (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1B5E4A] underline decoration-[#1B5E4A]/40 underline-offset-4 transition-colors hover:text-[#16221D]"
          >
            {part.label}
          </a>
        );
      })}
    </>
  );
}
