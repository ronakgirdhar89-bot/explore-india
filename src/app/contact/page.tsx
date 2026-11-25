import { Mail, MapPin, Clock } from "lucide-react";
import { breadcrumbSchema, buildMetadata, webPageSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Contact Us | Explore India",
  description:
    "Get in touch with the Explore India editorial team for destination questions, travel guide updates, or collaboration inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={webPageSchema({
          type: "ContactPage",
          name: "Contact Explore India",
          description:
            "Contact the Explore India editorial team for route corrections, destination questions, or feedback.",
          path: "/contact",
        })}
      />
      <Breadcrumbs items={breadcrumbs} />

      <header className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A17]">
          Get in Touch
        </span>
        <h1 className="mt-1 font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
          Contact Explore India
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#4B5550]">
          Have a question about a destination, spotted an outdated route detail,
          or want to suggest a new travel guide? Send us a message below.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <aside className="space-y-4 lg:col-span-5">
          <div className="rounded-2xl border border-[#E4DDD0] bg-white p-6">
            <h2 className="font-serif text-xl font-bold text-[#16221D]">
              Editorial Desk
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-[#4B5550]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C85A17]" aria-hidden="true" />
                <span>Coverage: All Indian States &amp; Union Territories</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#1B5E4A]" aria-hidden="true" />
                <span>Editorial inquiries handled via the contact form</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#C85A17]" aria-hidden="true" />
                <span>Typical response window: 2–3 business days</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
