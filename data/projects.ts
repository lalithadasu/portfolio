export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  context: string;
  period: string;
  gradient: string;
  category: "project";
  categoryLabel: string;
  paperUrl?: string;
  githubUrl?: string;
  overview: string;
  timeline: string;
  role: string;
  tools: string[];
  bullets: string[];
  tags: string[];
  highlight?: string;
}

export const projects: Project[] = [
  {
    id: "beta-vae-music",
    number: "01",
    title: "Music Genre Discovery via β-VAE",
    subtitle: "Unsupervised Deep Learning",
    context: "UC Davis, Unsupervised Learning Course, Winter 2026",
    period: "Winter 2026",
    gradient: "linear-gradient(135deg, #4F46E5 0%, #9333EA 60%, #C084FC 100%)",
    category: "project",
    categoryLabel: "ML Research",
    overview:
      "Can a neural network discover music genres without ever being told what a genre is? This project explores that question using a convolutional β-Variational Autoencoder trained entirely without labels on the GTZAN dataset, learning to organize 10 music genres purely from the structure of sound.",
    timeline: "Jan 2026 to Mar 2026",
    role: "Sole Researcher & Engineer",
    tools: ["PyTorch", "UMAP", "scikit-learn", "librosa", "NumPy", "Matplotlib"],
    bullets: [
      "Built a convolutional β-VAE in PyTorch on GTZAN dataset (9,981 mel spectrogram segments, 10 genres) with zero label supervision.",
      "Designed KL warmup scheduler with 128-dim latent space; achieved validation loss 134.51 and reconstruction MSE 0.003–0.006.",
      "Applied post-hoc GMM clustering on UMAP-reduced latents: ARI = 0.1841, NMI = 0.2798, competitive with supervised baselines in the literature.",
      "Validated generative quality via MFCC/spectral KDE comparison; demonstrated smooth Classical → Metal genre interpolation in latent space.",
    ],
    tags: ["PyTorch", "β-VAE", "UMAP", "GMM", "Mel Spectrograms", "MFCC", "Generative Modeling"],
    highlight: "Generative AI · Music",
  },
  {
    id: "risk-auth",
    number: "02",
    title: "Risk-Based Adaptive Identity Authentication System",
    subtitle: "Published Research · Zero-Trust Security",
    context: "PES University, B.Tech Capstone, 2023",
    period: "2023",
    gradient: "linear-gradient(135deg, #0F766E 0%, #10B981 60%, #6EE7B7 100%)",
    category: "project",
    categoryLabel: "Published Research",
    paperUrl: "#",
    overview:
      "A dynamic zero-trust authentication system that continuously scores user risk in real time across five behavioral dimensions: travel, location, device, browser, and credential patterns. Published in Cybernetics and Information Technologies, Vol. 23, No. 2, 2023. Won Best Capstone Project 2023 at PES University.",
    timeline: "Aug 2022 to May 2023",
    role: "Lead Developer & Researcher",
    tools: ["Java", "Spring Boot", "MySQL", "Azure AD", "Microsoft Graph API", "REST APIs"],
    bullets: [
      "Designed zero-trust risk-scoring algorithms for 5 real-time use cases: travel, location, device, browser, and credential risk.",
      "Built a dynamic risk analysis system (Java, Spring Boot, MySQL) integrating Microsoft Graph API and Azure AD logs.",
      "Displayed risk scores on an admin dashboard; mitigated risky users via Azure AD Risk Investigation group.",
      "Published in Cybernetics and Information Technologies, Vol. 23, No. 2, 2023.",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "Zero-Trust Security", "Azure AD", "Microsoft Graph API"],
    highlight: "Published · Best Capstone 2023",
  },
];
