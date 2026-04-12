export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "AI & ML",
    icon: "Brain",
    skills: [
      "LLM Fine-tuning",
      "PyTorch",
      "scikit-learn",
      "β-VAE",
      "UMAP",
      "K-Means",
      "GMM",
      "SimPO",
      "DPO",
      "AlpacaEval",
      "vLLM",
      "Mel Spectrograms",
      "MFCC",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    skills: [
      "Spring Boot",
      "React.js",
      "Next.js",
      "Node.js",
      "Flask",
      "Prisma",
      "librosa",
    ],
  },
  {
    category: "Infrastructure & Tools",
    icon: "Server",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "SLURM",
      "HPC Clusters",
      "Postman",
      "Jira",
      "Splunk",
      "Fortify",
      "GitHub Copilot",
      "Claude",
      "Repomix",
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MySQL", "MongoDB", "Sybase"],
  },
];
