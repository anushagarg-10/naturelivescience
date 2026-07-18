"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/actives", label: "The actives" },
  { href: "/formulary", label: "The formulary" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <nav>
          <Link className="brand" href="/">
            <svg
              className="seal-mark"
              width="44"
              height="44"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <circle cx="24" cy="24" r="22" fill="none" stroke="#C9A24B" strokeWidth="1" />
              <circle cx="24" cy="24" r="18.5" fill="none" stroke="#C9A24B" strokeWidth="1" opacity=".5" />
              <path d="M24 14C19 19 17.5 25 24 34C30.5 25 29 19 24 14Z" fill="none" stroke="#C9A24B" strokeWidth="1.3" />
              <line x1="24" y1="17" x2="24" y2="32" stroke="#C9A24B" strokeWidth="1" />
              <path d="M24 22c-2.2-1.4-4.4-1-5.5 0M24 26c-2.6-1.6-5.2-1-6.6.2M24 22c2.2-1.4 4.4-1 5.5 0M24 26c2.6-1.6 5.2-1 6.6.2" stroke="#C9A24B" strokeWidth="1" fill="none" />
            </svg>
            <span>
              <span className="bn">Nature Life Science</span>
            </span>
          </Link>
          <div className={`navlinks${open ? " open" : ""}`}>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={isActive(n.href) ? "active" : ""}
              >
                {n.label}
              </Link>
            ))}
            <Link className="navcta" href="/contact">
              Technical query
            </Link>
          </div>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
