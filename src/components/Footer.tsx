import Link from "next/link";
import { Compass, Mail, MapPin, Rss } from "lucide-react";

const TOP_DESTINATIONS = [
  { name: "Manali", href: "/destinations/manali" },
  { name: "Jaipur", href: "/destinations/jaipur" },
  { name: "Goa", href: "/destinations/goa" },
  { name: "Kerala", href: "/destinations/kerala" },
  { name: "Rishikesh", href: "/destinations/rishikesh" },
  { name: "Leh-Ladakh", href: "/destinations/leh-ladakh" },
];

const BLOG_LINKS = [
  { name: "Travel Guides", href: "/blog/category/travel-guides" },
  { name: "Budget Travel", href: "/blog/category/budget-travel" },
  { name: "Hill Stations", href: "/blog/category/hill-stations" },
  { name: "Beaches", href: "/blog/category/beaches" },
  { name: "Weekend Getaways", href: "/blog/category/weekend-getaways" },
  { name: "Cultural Tourism", href: "/blog/category/cultural-tourism" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E4DDD0] bg-[#16221D] text-[#E6E0D4]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#C85A17]">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-bold">Explore India</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#C2BCB0]">
              Discover India, One Destination at a Time. Curated destination
              guides, seasonal tips, and budget-friendly itineraries for
              travellers across India.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#C2BCB0]">
              <MapPin className="h-4 w-4 text-[#E76F51]" aria-hidden="true" />
              <span>Focused on Responsible Travel Across India</span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Popular Destinations
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {TOP_DESTINATIONS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#C2BCB0] transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Travel Categories
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {BLOG_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#C2BCB0] transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore India Info
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-[#C2BCB0] hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#C2BCB0] hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[#C2BCB0] hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-[#C2BCB0] hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-[#C2BCB0] hover:text-white">
                  XML Sitemap
                </Link>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  className="inline-flex items-center gap-1.5 text-[#C2BCB0] hover:text-white"
                >
                  <Rss className="h-3.5 w-3.5 text-[#E76F51]" aria-hidden="true" />
                  RSS Feed
                </a>
              </li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#C2BCB0]">
              <Mail className="h-4 w-4 text-[#E76F51]" aria-hidden="true" />
              <Link href="/contact" className="hover:text-white">
                Reach our editorial team
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#2A3B34] pt-6 text-xs text-[#A39E93] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Explore India. Built as an SEO-first
            academic web project (CSET489).
          </p>
          <p>
            Budget figures are approximate estimates. Always verify seasonal
            advisories with official tourism portals.
          </p>
        </div>
      </div>
    </footer>
  );
}
