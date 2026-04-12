"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const baseBg = scrolled
    ? "rgba(253,252,251,0.92)"
    : "transparent";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: baseBg,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Monogram */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            borderRadius: 10,
            background: "rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.12)",
            color: "var(--text)",
            textDecoration: "none",
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: 17,
            letterSpacing: "-0.02em",
          }}
        >
          LD
        </Link>

        {/* Desktop links */}
        <div
          className="hide-mobile"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(0,0,0,0.6)",
                textDecoration: "none",
                padding: "7px 16px",
                borderRadius: 8,
                transition: "all 0.15s",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#111";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(0,0,0,0.6)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Lalitha_Dasu_Resume.pdf"
            target="_blank"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--text)",
              textDecoration: "none",
              padding: "7px 16px",
              borderRadius: 8,
              border: "1px solid rgba(0,0,0,0.2)",
              transition: "all 0.15s",
              fontFamily: "var(--font-inter)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Resume
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.12)",
            borderRadius: 8,
            padding: "8px 10px",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 20,
                height: 2,
                background: "#111",
                borderRadius: 2,
                transition: "all 0.2s",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="show-mobile"
          style={{
            background: "rgba(253,252,251,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            padding: "16px 40px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {[...links, { label: "Resume ↗", href: "/Lalitha_Dasu_Resume.pdf" }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(0,0,0,0.75)",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(0,0,0,0.07)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
