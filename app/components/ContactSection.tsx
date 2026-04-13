"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "5bac6ef4-ba29-4ace-9ede-b5cbecb474c2",
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: 14,
    color: "var(--text)",
    background: "var(--bg-warm)",
    border: "1px solid var(--border)",
    borderRadius: 14,
    padding: "16px 20px",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
  };

  return (
    <section
      id="contact"
      style={{
        background: "#fff",
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient blobs */}
      <div style={{
        position: "absolute", top: "-20%", left: "-10%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,123,75,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", right: "-5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,123,75,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          position: "relative",
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 16,
              color: "#aaa",
              marginBottom: 12,
              letterSpacing: "0.02em",
            }}
          >
            got something in mind? let&apos;s make it happen ✦
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "var(--accent)",
              margin: "0 0 24px",
            }}
          >
            Let&apos;s Talk
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              color: "#888",
              marginBottom: 8,
            }}
          >
            dasusravanti@gmail.com
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              color: "#aaa",
            }}
          >
            Davis, CA · Open to opportunities nationwide
          </p>
        </div>

        {/* Right: Form */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 20,
              color: "var(--accent)",
              marginBottom: 24,
              letterSpacing: "0.02em",
            }}
          >
            drop me a message ✦
          </p>

          {status === "success" ? (
            <div
              style={{
                background: "var(--bg-warm)",
                border: "1px solid rgba(201,123,75,0.3)",
                borderRadius: 18,
                padding: "40px 32px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 32, marginBottom: 12 }}>✦</p>
              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--accent)",
                  marginBottom: 8,
                }}
              >
                Message sent!
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  color: "#888",
                  marginBottom: 24,
                }}
              >
                Thanks for reaching out. I&apos;ll get back to you within 24 to 48 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--accent)",
                  background: "transparent",
                  border: "1px solid rgba(201,123,75,0.4)",
                  borderRadius: 999,
                  padding: "8px 22px",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,123,75,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <textarea
                placeholder="What's on your mind?"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
              />

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "#c0392b",
                    margin: 0,
                  }}
                >
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: status === "sending" ? "rgba(201,123,75,0.55)" : "var(--accent)",
                  color: "#fff",
                  border: "none",
                  padding: "15px 32px",
                  borderRadius: 999,
                  fontFamily: "var(--font-inter)",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: status === "sending" ? "default" : "pointer",
                  transition: "opacity 0.15s, background 0.15s",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending")
                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                {status === "sending" ? "Sending…" : "Send Message ✦"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "80px auto 0",
          padding: "0 40px",
          borderTop: "1px solid var(--border)",
          paddingTop: 32,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>
            LD
          </div>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#bbb" }}>
            © 2026 Lalitha Sravanti Dasu. All rights reserved.
          </span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/lalitha-sravanti-dasu" },
            { label: "GitHub",   href: "https://github.com/lalithadasu" },
            { label: "Resume",  href: "/Lalitha_Dasu_Resume.pdf" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "#888",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
