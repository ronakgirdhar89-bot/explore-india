import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Privacy Policy | Explore India",
  description:
    "Read the Explore India privacy policy explaining how we handle contact form inquiries, newsletter signups, and optional Google Analytics 4 cookies.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="font-serif text-3xl font-bold text-[#16221D] sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-xs text-[#4B5550]">Last updated: November 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#35403B]">
        <section>
          <h2 className="font-serif text-xl font-bold text-[#16221D]">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            Explore India only collects information you voluntarily submit
            through our Contact Us form (such as your name, email address, and
            message) or Newsletter subscription form (your email address).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#16221D]">
            2. Analytics and Cookies
          </h2>
          <p className="mt-2">
            When configured in production, Explore India may use Google
            Analytics 4 (GA4) to measure aggregate page views and understand
            which destination guides are most helpful. No personally
            identifiable information is sold or shared with third-party data
            brokers.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-[#16221D]">
            3. External Links
          </h2>
          <p className="mt-2">
            Our guides link to official government tourism boards, Indian
            Railways, and heritage portals. Once you leave Explore India, their
            respective privacy policies apply.
          </p>
        </section>
      </div>
    </article>
  );
}
