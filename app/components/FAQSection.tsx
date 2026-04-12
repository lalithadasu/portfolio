"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What roles are you looking for?",
    a: "I'm actively looking for AI Engineer, ML Engineer, and Software Engineer (AI/ML) roles for summer 2026 internship. I'm particularly drawn to teams working on LLM systems, inference infrastructure, or applied ML.",
  },
  {
    q: "What's your current research focus?",
    a: "At Rubinet Lab (UC Davis), I'm working on LLM preference optimization: fine-tuning Mistral-7B with SimPO and DPO, building AlpacaEval 2 pipelines, and developing evaluation infrastructure that matches GPT-4 Turbo accuracy using local judges (Qwen3.5 via vLLM) on an 8x A100 HPC cluster.",
  },
  {
    q: "How does your backend experience connect to AI engineering?",
    a: "At JPMorgan Chase, I built production-grade Spring Boot microservices and APIs at scale, and that same discipline applies directly to AI systems: model serving, API design, async job management, and observability. I've shipped real production systems, which means I understand reliability, latency, and failure modes, not just training metrics.",
  },
  {
    q: "Are you open to relocation?",
    a: "Yes, I'm open to opportunities across the US. Currently based in Davis, CA, but happy to relocate for the right role. I'm also open to remote-first positions.",
  },
  {
    q: "What's the best way to reach you?",
    a: "Email is best: dasusravanti@gmail.com. I usually respond within 24 to 48 hours. You can also reach me on LinkedIn, where I check messages regularly.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      style={{
        background: "var(--bg-warm)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            textAlign: "center",
            margin: "0 0 12px",
          }}
        >
          Common{" "}
          <em
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 600,
              color: "var(--accent)",
            }}
          >
            Questions
          </em>{" "}
          <span style={{ color: "var(--accent)", fontSize: "0.7em" }}>✦</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: 18,
            color: "#999",
            textAlign: "center",
            margin: "0 0 60px",
          }}
        >
          everything you might want to know before we connect
        </p>

        <div
          className="faq-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left: Meta info */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                color: "#666",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Answers to questions to help you understand{" "}
              <a
                href="#contact"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  fontWeight: 600,
                  textUnderlineOffset: 3,
                }}
              >
                my background and how we can work together.
              </a>
            </p>

            {[
              { label: "RESPONSE TIME", value: "Within 24–48 hrs" },
              { label: "AVAILABILITY", value: "Open to work ✦" },
              { label: "BASED IN", value: "Davis, California" },
              { label: "TARGET ROLES", value: "AI / ML Engineer" },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#999",
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--text)",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}

            {/* CTA */}
            <a
              href="mailto:dasusravanti@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 28,
                background: "var(--accent)",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 24px",
                borderRadius: 999,
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 600,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Email Me ✦
            </a>
          </div>

          {/* Right: Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 14,
                  border: "1px solid var(--border)",
                  marginBottom: 10,
                  background: "#fff",
                  overflow: "hidden",
                  transition: "box-shadow 0.2s",
                  boxShadow: open === i ? "var(--card-shadow-hover)" : "var(--card-shadow)",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: open === i ? "var(--accent)" : "var(--text)",
                      letterSpacing: "-0.01em",
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: open === i ? "var(--accent)" : "#f0f0ec",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.2s",
                      color: open === i ? "#fff" : "var(--text)",
                      fontSize: 18,
                      fontWeight: 300,
                    }}
                  >
                    {open === i ? "×" : "+"}
                  </span>
                </button>
                {open === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 14,
                        lineHeight: 1.75,
                        color: "#555",
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
