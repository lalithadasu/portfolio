"use client";
import React from "react";
import Image from "next/image";
import { activities } from "@/data/activities";

const typeIcon: Record<string, React.ReactElement> = {
  volunteer: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  award: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  scholarship: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  community: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
};

const typeColor: Record<string, { color: string; bg: string }> = {
  volunteer: { color: "#dc2626", bg: "#fee2e2" },
  award: { color: "#d97706", bg: "#fef3c7" },
  scholarship: { color: "#0369a1", bg: "#e0f2fe" },
  community: { color: "#7c3aed", bg: "#f3e8ff" },
};

export default function Activities() {
  return (
    <section
      id="activities"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px 100px",
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            margin: "0 0 8px",
          }}
        >
          Beyond code
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          Activities & Achievements
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {activities.map((activity) => {
          const colors = typeColor[activity.type];
          return (
            <div
              key={activity.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "var(--card-shadow)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "var(--card-shadow-hover)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "var(--card-shadow)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Image if present */}
              {activity.image && (
                <div
                  style={{
                    position: "relative",
                    height: 200,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              )}

              <div style={{ padding: 28, flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Type badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: colors.color,
                    background: colors.bg,
                    borderRadius: 999,
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 14,
                    alignSelf: "flex-start",
                  }}
                >
                  {typeIcon[activity.type]}
                  {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                </div>

                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: "0 0 4px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {activity.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--accent)",
                    margin: "0 0 4px",
                  }}
                >
                  {activity.organization}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    margin: "0 0 14px",
                  }}
                >
                  {activity.period}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    margin: "0 0 16px",
                    flex: 1,
                  }}
                >
                  {activity.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: "var(--tag-text)",
                        background: "var(--tag-bg)",
                        padding: "3px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
