"use client";
import { useEffect, useRef } from "react";

// Portfolio color palette
const COLORS = [
  "#C97B4B", // accent orange
  "#A8622C", // accent dark
  "#E8C4A0", // mid peach
  "#F5EDE4", // light peach
  "#D4956A", // warm mid
  "#B86A3A", // deep amber
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;       // 0..1, decreasing
  decay: number;      // how fast it fades
  size: number;
  color: string;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    if (!canvas || !dot) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let mouseX = -300;
    let mouseY = -300;
    let prevX = -300;
    let prevY = -300;
    let visible = false;
    const particles: Particle[] = [];
    let animFrame: number;

    const spawnParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 2.0;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4, // slight upward bias
          life: 1,
          decay: 0.018 + Math.random() * 0.022,
          size: 2.5 + Math.random() * 3.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        dot.style.opacity = "1";
        visible = true;
      }

      // Snap dot to cursor
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      // Spawn particles proportional to speed
      const dx = mouseX - prevX;
      const dy = mouseY - prevY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 4) {
        const count = Math.min(Math.ceil(dist / 6), 5);
        spawnParticles(mouseX, mouseY, count);
        prevX = mouseX;
        prevY = mouseY;
      }
    };

    const onDocLeave = () => {
      dot.style.opacity = "0";
      visible = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;   // gentle gravity
        p.vx *= 0.97;   // slight drag
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const radius = p.size * p.life;
        ctx.save();
        ctx.globalAlpha = p.life * 0.85;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onDocLeave);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseleave", onDocLeave);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99998,
        }}
      />
      {/* Cursor dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#C97B4B",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          willChange: "transform",
        }}
      />
    </>
  );
}
