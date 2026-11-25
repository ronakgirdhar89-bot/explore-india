"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { trackLeadConversion } from "@/lib/analytics";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed || !emailPattern.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setMessage(
      `Thanks for subscribing! Seasonal India travel guides will be sent to ${trimmed}.`
    );
    trackLeadConversion("newsletter");
    setEmail("");
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="rounded-3xl border border-[#E4DDD0] bg-[#16221D] px-6 py-10 text-white sm:px-10 sm:py-12"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#24362E] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F4A261]">
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          Travel Dispatch
        </span>
        <h2
          id="newsletter-heading"
          className="mt-3 font-serif text-2xl font-bold sm:text-3xl"
        >
          Plan Smarter Trips Across India
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-[#C2BCB0] sm:text-base">
          Get seasonal destination checklists, budget travel routes, and new
          guide alerts—no spam, unsubscribe anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="you@example.com"
            required
            className="flex-1 rounded-xl border border-[#32473E] bg-[#1E2E27] px-4 py-3 text-sm text-white placeholder-[#8D9A93] focus:border-[#E76F51] focus:outline-none focus:ring-2 focus:ring-[#E76F51]/40"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#C85A17] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#AE4B10] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
          >
            Subscribe
          </button>
        </form>

        {status === "error" && (
          <p role="alert" className="mt-3 text-sm text-[#FCA5A5]">
            {message}
          </p>
        )}
        {status === "success" && (
          <p
            role="status"
            className="mt-3 inline-flex items-center justify-center gap-2 text-sm text-[#86EFAC]"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{message}</span>
          </p>
        )}
      </div>
    </section>
  );
}
