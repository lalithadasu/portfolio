"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [dcHovered, setDcHovered] = useState(false);

  return (
    <section
      style={{
        background: "var(--bg-warm)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 68,
      }}
    >
      {/* Subtle gradient blobs */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,123,75,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", left: "-10%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,123,75,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 40px",
          display: "flex",
          alignItems: "center",
          gap: 40,
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-inner"
      >
        {/* Left: Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Memoji avatar + category label row */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            {/* Memoji badge */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 20,
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
              }}
            >
              <Image
                src="/memoji.png"
                alt="Lalitha memoji"
                width={72}
                height={72}
                unoptimized
                style={{ objectFit: "contain", objectPosition: "center center", display: "block" }}
              />
            </div>

            {/* Category pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.15)",
                background: "rgba(255,255,255,0.8)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                  margin: 0,
                }}
              >
                AI Engineer · Graduate Researcher
              </p>
            </div>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(52px, 8vw, 110px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              margin: "0 0 32px",
            }}
          >
            LALITHA
            <br />
            <span style={{ color: "rgba(0,0,0,0.28)", fontSize: "0.85em" }}>
              SRAVANTI
            </span>
            <br />
            <span style={{ color: "rgba(0,0,0,0.28)", fontSize: "0.85em" }}>
              DASU
            </span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "rgba(0,0,0,0.55)",
              lineHeight: 1.6,
              maxWidth: 440,
              marginBottom: 36,
            }}
          >
            Building intelligent systems at the intersection of LLM research, AI engineering,
            and production-scale software. Based in Davis, CA.
          </p>

          {/* Open to work badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(201,123,75,0.10)",
              border: "1px solid rgba(201,123,75,0.3)",
              borderRadius: 999,
              padding: "10px 20px",
              marginBottom: 36,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--accent-dark)",
              }}
            >
              Open to work
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                color: "rgba(0,0,0,0.4)",
              }}
            >
              · AI / ML Engineer roles
            </span>
          </div>

          {/* CTA row */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="#work"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                background: "var(--text)",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: 999,
                transition: "opacity 0.15s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              View my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="mailto:dasusravanti@gmail.com"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(0,0,0,0.6)",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.18)",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#111";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(0,0,0,0.6)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.18)";
              }}
            >
              Say hello
            </a>
          </div>
        </div>

        {/* Right: Polaroid photos */}
        <div
          className="hero-photos hide-mobile"
          style={{
            position: "relative",
            width: 380,
            height: 460,
            flexShrink: 0,
          }}
        >
          {/* Back polaroid (DC photo) - hover to bring forward */}
          <div
            className="polaroid"
            style={{
              width: 210,
              position: "absolute",
              top: 20,
              right: 0,
              transform: "rotate(7deg)",
              zIndex: dcHovered ? 3 : 1,
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, z-index 0s",
            }}
            onMouseEnter={(e) => {
              setDcHovered(true);
              (e.currentTarget as HTMLElement).style.transform = "rotate(4deg) scale(1.06)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              setDcHovered(false);
              (e.currentTarget as HTMLElement).style.transform = "rotate(7deg)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
            }}
          >
            <div style={{ position: "relative", width: "100%", paddingBottom: "115%", overflow: "hidden" }}>
              <Image
                src="/lalitha3.jpeg"
                alt="Lalitha at Washington DC"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <p style={{
              textAlign: "center", paddingTop: 6, fontSize: 11,
              color: "#555", fontFamily: "var(--font-inter)", letterSpacing: "0.02em",
            }}>
              Washington D.C. ✈️
            </p>
          </div>

          {/* Front polaroid (garden photo) */}
          <div
            className="polaroid"
            style={{
              width: 220,
              position: "absolute",
              bottom: 20,
              left: 10,
              transform: "rotate(-6deg)",
              zIndex: dcHovered ? 1 : 2,
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, z-index 0s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "rotate(-6deg) scale(1.04)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "rotate(-6deg)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
            }}
          >
            <div style={{ position: "relative", width: "100%", paddingBottom: "120%", overflow: "hidden" }}>
              <Image
                src="/lalitha.jpeg"
                alt="Lalitha"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <p style={{
              textAlign: "center", paddingTop: 6, fontSize: 11,
              color: "#555", fontFamily: "var(--font-inter)", letterSpacing: "0.02em",
            }}>
              That&apos;s me! 🌿
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  );
}
