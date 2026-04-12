"use client";
import Image from "next/image";
import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px 80px",
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <p className="section-label" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          About me
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
          Who I am
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Bio text */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: 32,
            boxShadow: "var(--card-shadow)",
          }}
        >
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {about.bio}
          </p>
        </div>

        {/* Photos + Personal facts */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Photos grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {/* Travelling photo */}
            <div
              style={{
                position: "relative",
                height: 220,
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "var(--card-shadow)",
                gridColumn: "1 / 2",
              }}
            >
              <Image
                src="/lalitha3.jpeg"
                alt="Lalitha travelling at Washington DC"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px 12px 10px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                Washington D.C. ✈️
              </div>
            </div>

            {/* Brains to classroom */}
            <div
              style={{
                position: "relative",
                height: 220,
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <Image
                src="/brainstoclassroom.png"
                alt="Brains to Classrooms volunteering"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px 12px 10px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                Brains to Classrooms 🧠
              </div>
            </div>
          </div>

          {/* Personal chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {[
              { icon: "✈️", text: "Avid traveller" },
              { icon: "🎵", text: "Carnatic classical singer · 10 yrs" },
              { icon: "🏆", text: "Karnataka Music Junior Grade · Distinction" },
              { icon: "🤝", text: "STEM outreach volunteer" },
              { icon: "🧠", text: "LLM researcher" },
              { icon: "☕", text: "Coffee + code enthusiast" },
            ].map((chip) => (
              <span
                key={chip.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 999,
                  padding: "6px 14px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  boxShadow: "var(--card-shadow)",
                  whiteSpace: "nowrap",
                }}
              >
                <span>{chip.icon}</span>
                <span>{chip.text}</span>
              </span>
            ))}
          </div>

          {/* Education */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: 24,
              boxShadow: "var(--card-shadow)",
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                margin: "0 0 16px",
              }}
            >
              Education
            </p>
            {about.education.map((edu, i) => (
              <div
                key={edu.school}
                style={{
                  paddingBottom: i < about.education.length - 1 ? 16 : 0,
                  marginBottom: i < about.education.length - 1 ? 16 : 0,
                  borderBottom: i < about.education.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: "0 0 2px",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    margin: "0 0 2px",
                  }}
                >
                  {edu.school}
                </p>
                <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
