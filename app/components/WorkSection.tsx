"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

// Pre-compute stable stacked + fan transforms for each tab
function getStackedTransform(i: number, total: number): string {
  const rotations = [-8, -3, 2, 7, 12];
  const xOffsets  = [0, 4, 8, 12, 16];
  return `translateX(${xOffsets[i % xOffsets.length]}px) rotate(${rotations[i % rotations.length]}deg)`;
}

function getFanTransform(i: number, total: number): string {
  if (total === 1) return "rotate(0deg)";
  // Spread across an arc; cards pivot from bottom-center
  const maxAngle = total <= 2 ? 18 : total <= 3 ? 24 : 30;
  const step = (maxAngle * 2) / (total - 1);
  const angle = -maxAngle + i * step;
  // Horizontal separation grows with angle
  const xSpread = total <= 2 ? 60 : total <= 3 ? 50 : 44;
  const x = (i - (total - 1) / 2) * xSpread;
  return `translateX(${x}px) rotate(${angle}deg)`;
}

interface FolderPanelProps {
  label: string;
  count: number;
  countLabel: string;
  dateRange: string;
  cards: {
    id: string;
    title: string;
    gradient: string;
    number: string;
    tags: string[];
    href: string;
  }[];
}

function FolderPanel({ label, count, countLabel, dateRange, cards }: FolderPanelProps) {
  const [hovered, setHovered] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div>
      {/* Orange pill label */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
        <span
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontFamily: "var(--font-inter)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            padding: "7px 22px",
            borderRadius: 999,
          }}
        >
          {label}
        </span>
      </div>

      {/* Dark folder */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setActiveCard(null); }}
        style={{
          background: "#1C1C1E",
          borderRadius: 24,
          padding: "26px 28px 22px",
          position: "relative",
          overflow: "visible",
          minHeight: 380,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              {count} {countLabel}
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              color: "rgba(255,255,255,0.28)",
              letterSpacing: "0.06em",
            }}
          >
            {dateRange}
          </span>
        </div>

        {/* Cards area — cards pivot from bottom-center */}
        <div
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: 250,
            marginTop: 8,
          }}
        >
          {cards.map((card, i) => {
            const isActive = activeCard === i;
            const baseTransform = hovered
              ? getFanTransform(i, cards.length)
              : getStackedTransform(i, cards.length);
            const liftY = isActive ? -16 : 0;

            return (
              <Link
                key={card.id}
                href={card.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  onMouseEnter={() => setActiveCard(i)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    marginLeft: -80,
                    width: 160,
                    height: 220,
                    borderRadius: 18,
                    background: card.gradient,
                    transform: `${baseTransform} translateY(${liftY}px)`,
                    transformOrigin: "bottom center",
                    transition: "transform 0.45s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.3s ease, z-index 0s",
                    zIndex: isActive ? cards.length + 1 : i,
                    boxShadow: isActive
                      ? "0 24px 60px rgba(0,0,0,0.7)"
                      : "0 8px 32px rgba(0,0,0,0.5)",
                    padding: "14px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: hovered ? "pointer" : "default",
                    overflow: "hidden",
                  }}
                >
                  {/* Tag row */}
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 8.5,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.4,
                    }}
                  >
                    {card.tags.slice(0, 2).join(" · ")}
                  </span>

                  {/* Title + number watermark */}
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        bottom: -14,
                        right: -4,
                        fontFamily: "var(--font-syne)",
                        fontSize: 88,
                        fontWeight: 800,
                        color: "rgba(0,0,0,0.15)",
                        lineHeight: 1,
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {card.number}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: 1.25,
                        margin: 0,
                        position: "relative",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            paddingTop: 16,
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Lalitha Dasu
          </span>
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 13,
              color: hovered ? "var(--accent)" : "rgba(255,255,255,0.28)",
              transition: "color 0.3s",
            }}
          >
            {hovered ? "select a card \u2191" : "hover to open \u2192"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const projectCards = projects.map((p) => ({
    id: p.id,
    title: p.title,
    gradient: p.gradient,
    number: p.number,
    tags: p.tags,
    href: `/work/${p.id}`,
  }));

  const expCards = experiences.map((e) => ({
    id: e.id,
    title: e.role,
    gradient: e.gradient,
    number: e.number,
    tags: e.tags,
    href: `/work/${e.id}`,
  }));

  return (
    <section
      id="work"
      style={{
        background: "var(--dark-2)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* Hint text */}
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: 15,
            color: "rgba(255,255,255,0.3)",
            marginBottom: 36,
            letterSpacing: "0.03em",
          }}
        >
          hover the folder to see what&apos;s inside
        </p>

        {/* Two panels */}
        <div
          className="work-panels"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }}
        >
          <FolderPanel
            label="Projects"
            count={projectCards.length}
            countLabel="Works"
            dateRange="2022 to 2026"
            cards={projectCards}
          />
          <FolderPanel
            label="Work Experience"
            count={expCards.length}
            countLabel="Roles"
            dateRange="2023 to Present"
            cards={expCards}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-panels { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
