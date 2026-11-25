"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/blog", label: "Travel Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4DDD0] bg-[#FAF7F2]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-[#16221D] focus:outline-none"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#C85A17] text-white shadow-sm">
            <Compass className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-tight">
              Explore India
            </span>
            <span className="hidden text-[11px] font-medium tracking-wide text-[#4B5550] sm:block">
              Discover India, One Destination at a Time
            </span>
          </span>
        </Link>

        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#16221D] text-white"
                    : "text-[#16221D] hover:bg-[#EFE8DB] hover:text-[#C85A17]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/destinations"
            className="ml-2 rounded-lg bg-[#C85A17] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#AE4B10]"
          >
            Plan a Trip
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-lg border border-[#E4DDD0] p-2 text-[#16221D] md:hidden hover:bg-[#EFE8DB]"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-[#E4DDD0] bg-[#FAF7F2] px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3.5 py-2.5 text-sm font-medium ${
                      isActive
                        ? "bg-[#16221D] text-white"
                        : "text-[#16221D] hover:bg-[#EFE8DB]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
