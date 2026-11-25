"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type GaEventParams = Record<string, string | number | boolean | undefined>;

/**
 * Safely dispatches a Google Analytics 4 custom event when gtag is loaded.
 */
export function trackEvent(eventName: string, params: GaEventParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
}

export function trackSearch(query: string, source: string, resultsCount?: number): void {
  const cleaned = query.trim();
  if (!cleaned) return;
  trackEvent("search", {
    search_term: cleaned,
    search_source: source,
    ...(typeof resultsCount === "number" ? { results_count: resultsCount } : {}),
  });
}

export function trackOutboundOfficialClick(label: string, url: string, context: string): void {
  trackEvent("outbound_official_click", {
    link_text: label,
    link_url: url,
    click_context: context,
  });
}

export function trackLeadConversion(formType: "newsletter" | "contact", topic?: string): void {
  trackEvent("generate_lead", {
    form_type: formType,
    ...(topic ? { lead_topic: topic } : {}),
  });
}

export function trackShareAction(method: string, contentTitle: string, url: string): void {
  trackEvent("share", {
    method,
    content_type: "article",
    item_id: url,
    content_title: contentTitle,
  });
}

export function trackFaqToggle(question: string, pagePath: string, expanded: boolean): void {
  if (!expanded) return;
  trackEvent("faq_toggle", {
    question_text: question.slice(0, 100),
    page_path: pagePath,
  });
}
