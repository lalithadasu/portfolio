"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

// Combine all entries
function getAllEntries() {
  return [
    ...projects.map((p) => ({ ...p, entryType: "project" as const })),
    ...experiences.map((e) => ({ ...e, entryType: "experience" as const })),
  ];
}

type Params = { id: string };

export default function WorkDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = use(params);
  const all = getAllEntries();
  const entry = all.find((e) => e.id === id);

  if (!entry) notFound();

  const isProject = entry.entryType === "project";
  const categoryLabel = isProject
    ? (entry as typeof projects[number]).categoryLabel
    : (entry as typeof experiences[number]).typeLabel;

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 40px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              fontWeight: 500,
              color: "#666",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Work
          </Link>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            {isProject ? "Project" : "Experience"}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "60px 40px 100px",
        }}
      >
        {/* Category label */}
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: 18,
            color: "var(--accent)",
            marginBottom: 16,
            letterSpacing: "0.02em",
          }}
        >
          {isProject ? "Research Project" : "Industry Experience"}
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            color: "var(--text)",
            margin: "0 0 12px",
          }}
        >
          {isProject
            ? (entry as typeof projects[number]).title
            : (entry as typeof experiences[number]).role}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "clamp(18px, 2.5vw, 26px)",
            color: "#999",
            margin: "0 0 48px",
            fontWeight: 400,
          }}
        >
          {isProject
            ? (entry as typeof projects[number]).subtitle
            : (entry as typeof experiences[number]).company}
          {" · "}
          {isProject
            ? (entry as typeof projects[number]).context
            : (entry as typeof experiences[number]).location}
        </p>

        {/* Overview box */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "32px 36px",
            marginBottom: 48,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 32,
          }}
          className="overview-grid"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 8,
              }}
            >
              Timeline
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.5,
              }}
            >
              {entry.timeline}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 8,
              }}
            >
              {isProject ? "Role" : "Type"}
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.5,
              }}
            >
              {isProject
                ? (entry as typeof projects[number]).role
                : `${(entry as typeof experiences[number]).typeLabel} · ${categoryLabel}`}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 8,
              }}
            >
              Tools Used
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {entry.tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#555",
                    background: "var(--bg-warm)",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    padding: "3px 9px",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Overview section */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 12,
            }}
          >
            Overview
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              margin: "0 0 20px",
              lineHeight: 1.25,
            }}
          >
            {isProject
              ? "What was built"
              : "What I did here"}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              lineHeight: 1.85,
              color: "#555",
            }}
          >
            {entry.overview}
          </p>
        </div>

        {/* Gradient bar */}
        <div
          style={{
            height: 4,
            borderRadius: 999,
            background: entry.gradient,
            marginBottom: 48,
          }}
        />

        {/* Key contributions */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 24,
            }}
          >
            Key Contributions
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {entry.bullets.map((bullet, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "20px 24px",
                  background: "var(--bg-warm)",
                  borderRadius: 14,
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--accent)",
                    opacity: 0.5,
                    flexShrink: 0,
                    paddingTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#444",
                    margin: 0,
                  }}
                >
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 14,
            }}
          >
            Tech Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {entry.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#555",
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 999,
                  padding: "6px 16px",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Paper link for projects */}
        {isProject && (entry as typeof projects[number]).paperUrl && (
          <a
            href={(entry as typeof projects[number]).paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent)",
              color: "#fff",
              textDecoration: "none",
              padding: "12px 28px",
              borderRadius: 999,
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              fontWeight: 700,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View Published Paper ↗
          </a>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .overview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
