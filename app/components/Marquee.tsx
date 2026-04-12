const items = [
  "LLM Fine-tuning",
  "✦",
  "PyTorch",
  "✦",
  "AlpacaEval 2",
  "✦",
  "vLLM",
  "✦",
  "Spring Boot",
  "✦",
  "SimPO · DPO",
  "✦",
  "β-VAE",
  "✦",
  "UMAP",
  "✦",
  "Mistral-7B",
  "✦",
  "SLURM",
  "✦",
  "Java 21",
  "✦",
  "Next.js",
  "✦",
  "Zero-Trust Security",
  "✦",
  "Generative Modeling",
  "✦",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "var(--dark)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        padding: "18px 0",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: item === "✦" ? "serif" : "var(--font-syne)",
              fontSize: item === "✦" ? 12 : 13,
              fontWeight: item === "✦" ? 400 : 600,
              color: item === "✦" ? "var(--accent)" : "rgba(255,255,255,0.45)",
              textTransform: item === "✦" ? "none" : "uppercase",
              letterSpacing: item === "✦" ? 0 : "0.1em",
              paddingRight: 32,
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
