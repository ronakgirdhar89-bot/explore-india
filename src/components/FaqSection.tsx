"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { trackFaqToggle } from "@/lib/analytics";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  id?: string;
  heading?: string;
}

export function FaqSection({
  faqs,
  id = "faq-heading",
  heading = "Frequently Asked Questions",
}: FaqSectionProps) {
  const pathname = usePathname();

  if (!faqs.length) return null;

  return (
    <section aria-labelledby={id} className="scroll-mt-24">
      <h2 id={id} className="font-serif text-2xl font-bold text-[#16221D]">
        {heading}
      </h2>
      <div className="mt-4 space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            open={index === 0}
            onToggle={(e) => {
              const el = e.currentTarget;
              trackFaqToggle(faq.question, pathname, el.open);
            }}
            className="group rounded-2xl border border-[#E4DDD0] bg-white p-5 transition-colors open:border-[#C85A17]/50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-bold text-[#16221D]">
              <span>{faq.question}</span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-[#C85A17] transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-2.5 text-sm leading-relaxed text-[#4B5550]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
