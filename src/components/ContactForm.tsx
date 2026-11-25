"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { trackLeadConversion } from "@/lib/analytics";

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Destination Question");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (name.trim().length < 2) {
      next.name = "Please enter your full name (at least 2 characters).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please provide a valid email address.";
    }
    if (message.trim().length < 15) {
      next.message = "Please write a message of at least 15 characters.";
    }
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    trackLeadConversion("contact", topic);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-[#E4DDD0] bg-white p-6 shadow-sm sm:p-8"
    >
      {submitted && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-[#86EFAC] bg-[#F0FDF4] p-4 text-sm text-[#166534]"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">Message received!</p>
            <p className="mt-0.5">
              Thank you for contacting Explore India. Our editorial team will
              review your inquiry shortly.
            </p>
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-semibold text-[#16221D]"
        >
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Aarav Sharma"
          aria-invalid={Boolean(errors.name)}
          className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-[#B91C1C]">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-semibold text-[#16221D]"
        >
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-[#B91C1C]">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="mb-1.5 block text-sm font-semibold text-[#16221D]"
        >
          Topic
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
        >
          <option value="Destination Question">Destination Question</option>
          <option value="Content Correction / Update">
            Content Correction / Update
          </option>
          <option value="Collaboration">Collaboration</option>
          <option value="Feedback">General Feedback</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-semibold text-[#16221D]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us which destination or travel guide you have a question about..."
          aria-invalid={Boolean(errors.message)}
          className="w-full rounded-xl border border-[#E4DDD0] bg-[#FAF7F2] px-4 py-2.5 text-sm text-[#16221D] focus:border-[#C85A17] focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[#B91C1C]">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl bg-[#C85A17] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#AE4B10]"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </button>
    </form>
  );
}
