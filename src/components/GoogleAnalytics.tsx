"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import Script from "next/script";

const GA_MEASUREMENT_ID_PATTERN = /^(G|GT|AW)-[A-Z0-9]+$/i;

function getValidatedGaId(): string | null {
  const raw =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-H77MTNBDT0";
  if (!raw || !GA_MEASUREMENT_ID_PATTERN.test(raw)) {
    return null;
  }
  return raw;
}

function GaRouteAndVitalsTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrlRef = useRef<string | null>(null);
  const isInitialLoadRef = useRef(true);

  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      lastTrackedUrlRef.current = url;
      return;
    }

    if (lastTrackedUrlRef.current === url) {
      return;
    }
    lastTrackedUrlRef.current = url;

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: url,
        send_to: gaId,
      });
    }
  }, [pathname, searchParams, gaId]);

  useReportWebVitals((metric) => {
    if (typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", metric.name, {
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
      non_interaction: true,
    });
  });

  return null;
}

export function GoogleAnalytics() {
  const gaId = getValidatedGaId();
  const debugMode = process.env.NEXT_PUBLIC_GA_DEBUG === "true";

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(gaId)}, {
            anonymize_ip: true${debugMode ? ", debug_mode: true" : ""}
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <GaRouteAndVitalsTracker gaId={gaId} />
      </Suspense>
    </>
  );
}
