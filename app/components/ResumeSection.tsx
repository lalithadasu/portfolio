import { experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";

export default function ResumeSection() {
  const education = [
    {
      degree: "M.S. in Computer Science",
      school: "University of California, Davis",
      period: "Sep 2025 – Jun 2027 (Expected)",
      detail: "Statistics for ML · Visual Analytics · Foundations of LLMs · Unsupervised Learning",
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "PES University, Bengaluru",
      period: "Aug 2019 – May 2023",
      detail: "Top 20% of batch · MRD Merit Scholarship",
    },
  ];

  return (
    <section
      id="resume"
      style={{
        background: "#fff",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* Two-column: Experience + Education */}
        <div
          className="resume-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            marginBottom: 72,
          }}
        >
          {/* Experience */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 8,
              }}
            >
              Experience
            </p>
            <div
              style={{
                height: 1,
                background: "var(--border)",
                marginBottom: 28,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  style={{ display: "flex", gap: 16 }}
                >
                  <div className="orange-dot" style={{ marginTop: 5 }} />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "var(--text)",
                        margin: "0 0 2px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {exp.role}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 13,
                        color: "#666",
                        margin: "0 0 2px",
                      }}
                    >
                      {exp.company} · {exp.location}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 12,
                        color: "#999",
                        margin: 0,
                      }}
                    >
                      {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 8,
              }}
            >
              Education
            </p>
            <div
              style={{
                height: 1,
                background: "var(--border)",
                marginBottom: 28,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {education.map((edu) => (
                <div key={edu.school} style={{ display: "flex", gap: 16 }}>
                  <div className="orange-dot" style={{ marginTop: 5 }} />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "var(--text)",
                        margin: "0 0 2px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 13,
                        color: "#666",
                        margin: "0 0 2px",
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 12,
                        color: "#999",
                        margin: "0 0 4px",
                      }}
                    >
                      {edu.period}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 12,
                        color: "#aaa",
                        margin: 0,
                        fontStyle: "italic",
                      }}
                    >
                      {edu.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 8,
                marginTop: 40,
              }}
            >
              Certifications & Awards
            </p>
            <div style={{ height: 1, background: "var(--border)", marginBottom: 28 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "SEPathon Hackathon Winner", org: "JPMorgan Chase, 2023" },
                { title: "JPMorgan AI for Tech Research Team", org: "Selected 2023" },
                { title: "MRD Merit Scholarship", org: "PES University (Top 20% · Sem 2, 3, 4)" },
                { title: "Karnataka Music Junior Grade · Distinction", org: "Karnataka Music Exam Board" },
              ].map((ach) => (
                <div key={ach.title} style={{ display: "flex", gap: 16 }}>
                  <div className="orange-dot" style={{ marginTop: 5 }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-syne)", fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 2px" }}>
                      {ach.title}
                    </p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#999", margin: 0 }}>
                      {ach.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills block */}
        <div
          style={{
            background: "var(--bg-warm)",
            borderRadius: 24,
            padding: "48px 48px",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 40,
            }}
          >
            {skillGroups.map((group) => (
              <div key={group.category}>
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
                  {group.category}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#555",
                        background: "#fff",
                        border: "1px solid var(--border)",
                        borderRadius: 999,
                        padding: "4px 13px",
                        boxShadow: "var(--card-shadow)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .resume-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
