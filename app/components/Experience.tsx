"use client";
import { experiences, type Experience } from "@/data/experience";

const typeConfig: Record<
  Experience["type"],
  { label: string; color: string; bg: string }
> = {
  research: {
    label: "Research",
    color: "#7c3aed",
    bg: "#f3e8ff",
  },
  fulltime: {
    label: "Full-time",
    color: "#0369a1",
    bg: "#e0f2fe",
  },
  internship: {
    label: "Internship",
    color: "#b45309",
    bg: "#fef3c7",
  },
  parttime: {
    label: "Part-time",
    color: "#16a34a",
    bg: "#dcfce7",
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px 80px",
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
          Career
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
          Experience
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {experiences.map((exp) => {
          const badge = typeConfig[exp.type];
          return (
            <div
              key={exp.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 32,
                boxShadow: "var(--card-shadow)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
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
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      flexWrap: "wrap",
                      marginBottom: 6,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: badge.color,
                        background: badge.bg,
                        padding: "3px 10px",
                        borderRadius: 999,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--accent)",
                      margin: "0 0 4px",
                    }}
                  >
                    {exp.company}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      margin: 0,
                    }}
                  >
                    {exp.location}
                  </p>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    background: "var(--tag-bg)",
                    padding: "6px 14px",
                    borderRadius: 8,
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul
                style={{
                  margin: "0 0 20px",
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "var(--text-secondary)",
                      paddingLeft: 4,
                    }}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
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
          );
        })}
      </div>
    </section>
  );
}
