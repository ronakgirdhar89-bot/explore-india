"use client";

import type { ReactNode } from "react";
import { trackOutboundOfficialClick } from "@/lib/analytics";

interface OutboundLinkProps {
  href: string;
  label: string;
  context: string;
  className?: string;
  children: ReactNode;
}

export function OutboundLink({
  href,
  label,
  context,
  className,
  children,
}: OutboundLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackOutboundOfficialClick(label, href, context)}
      className={className}
    >
      {children}
    </a>
  );
}
