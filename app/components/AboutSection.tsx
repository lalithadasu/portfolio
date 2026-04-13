"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg-warm)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle blob */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,123,75,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative" }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            margin: "0 0 64px",
            textAlign: "center",
          }}
        >
          A bit about{" "}
          <em
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              color: "var(--accent)",
            }}
          >
            Myself
          </em>{" "}
          <span style={{ color: "var(--accent)", fontSize: "0.7em" }}>✦</span>
        </h2>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          {/* Left: Bio */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                color: "var(--accent)",
                marginBottom: 20,
                letterSpacing: "-0.01em",
              }}
            >
              Namesake! I&apos;m Lalitha ✦
            </p>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                lineHeight: 1.85,
                color: "#444",
                marginBottom: 20,
              }}
            >
              I&apos;m an AI Engineer and CS graduate student at UC Davis, building intelligent systems
              at the intersection of LLM research, AI engineering, and production-scale software.
              With 2+ years at JPMorgan Chase and active research at Rubinet Lab, I bring both
              industry rigor and research depth to the table.
            </p>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                lineHeight: 1.85,
                color: "#444",
                marginBottom: 20,
              }}
            >
              My current research focuses on LLM preference optimization: fine-tuning Mistral-7B
              with SimPO and DPO, and building evaluation pipelines that match GPT-4 Turbo&apos;s
              accuracy at a fraction of the cost. 
            </p>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 16,
                lineHeight: 1.85,
                color: "#444",
                marginBottom: 32,
              }}
            >
              Beyond code, I&apos;m a passionate traveller who loves discovering new places and
              meeting people from all walks of life. I&apos;m also a trained Carnatic classical singer
              with 10 years of vocal training, and completed the{" "}
              <strong>Karnataka Music Junior Grade Examination with Distinction</strong>.
              Music, for me, is where math meets emotion, not unlike writing elegant code.
            </p>

            {/* Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
              {[
                "✈️  Avid traveller",
                "🎵  Carnatic classical singer · 10 yrs",
                "🏆  Karnataka Music Exam · Distinction",
                "🧠  LLM researcher",
                "🤝  STEM outreach volunteer",
                "🤖  Built this site with Claude Code",
              ].map((chip) => (
                <span
                  key={chip}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "#555",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 999,
                    padding: "7px 16px",
                    boxShadow: "var(--card-shadow)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Social row */}
            <div style={{ display: "flex", gap: 16 }}>
              <a
                href="https://linkedin.com/in/lalitha-sravanti-dasu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--accent)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/lalithadasu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--accent)",
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right: Photo + facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Main photo */}
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "4px solid #fff",
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                position: "relative",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src="/lalitha2.jpeg"
                alt="Lalitha"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  padding: "40px 20px 16px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                  color: "#fff",
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                where things come together 🌿
              </div>
            </div>

            {/* Education card */}
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 18,
                padding: 24,
                boxShadow: "var(--card-shadow)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                Education
              </p>
              {[
                {
                  degree: "M.S. Computer Science",
                  school: "UC Davis",
                  period: "Sep 2025 – Jun 2027",
                },
                {
                  degree: "B.Tech CS & Engineering",
                  school: "PES University, Bengaluru",
                  period: "Aug 2019 – May 2023",
                },
              ].map((edu, i) => (
                <div
                  key={edu.school}
                  style={{
                    paddingBottom: i === 0 ? 14 : 0,
                    marginBottom: i === 0 ? 14 : 0,
                    borderBottom: i === 0 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 2px" }}>
                    {edu.degree}
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#666", margin: "0 0 2px" }}>
                    {edu.school}
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#999", margin: 0 }}>
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
