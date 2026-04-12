"use client";
import { about } from "@/data/about";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* CTA row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "var(--text-primary)",
                margin: "0 0 4px",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s build something together.
            </p>
            <p style={{ fontSize: 14, color: "var(--text-muted)", margin: 0 }}>
              Open to AI Engineer, ML Engineer, and SWE (AI/ML) roles.
            </p>
          </div>
          <a
            href="mailto:dasusravanti@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--text-primary)",
              color: "var(--surface)",
              textDecoration: "none",
              padding: "12px 28px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 700,
              transition: "opacity 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Get in touch →
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border)" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
            © 2026 Lalitha Sravanti Dasu · Built with Next.js and Claude Code
          </p>

          <div style={{ display: "flex", gap: 20 }}>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              LinkedIn
            </a>
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              GitHub
            </a>
            <a
              href="mailto:dasusravanti@gmail.com"
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
