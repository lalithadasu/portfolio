export interface Experience {
  id: string;
  number: string;
  company: string;
  role: string;
  type: "internship" | "fulltime" | "research" | "parttime";
  typeLabel: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string | null;
  logo?: string;
  gradient: string;
  category: "experience";
  overview: string;
  timeline: string;
  context: string;
  tools: string[];
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "rubinet-lab",
    number: "01",
    company: "Rubinet Lab, UC Davis",
    role: "Graduate Researcher",
    type: "research",
    typeLabel: "Research",
    location: "Davis, CA",
    period: "Mar 2026 – Present",
    startDate: "2026-03",
    endDate: null,
    gradient: "linear-gradient(135deg, #D97706 0%, #F59E0B 60%, #FDE68A 100%)",
    category: "experience",
    overview:
      "Conducting active research on LLM preference optimization at UC Davis's Rubinet Lab. Building and evaluating fine-tuned language models using SimPO and DPO on HPC infrastructure, while developing scalable evaluation pipelines that match frontier model (GPT-4 Turbo) accuracy at a fraction of the cost.",
    timeline: "Mar 2026 – Present",
    context: "Graduate Research · UC Davis",
    tools: ["Python", "PyTorch", "vLLM", "SLURM", "Mistral-7B", "AlpacaEval 2", "A100 GPUs"],
    bullets: [
      "Implemented AlpacaEval 2 pipeline with Qwen3.5-9B as local judge, matching GPT-4 Turbo within 1% accuracy for SimPO and DPO evaluation.",
      "Resolved Qwen3.5 parsing failures by migrating to vLLM server with logprob-based judging, annotating 805 samples.",
      "Fine-tuned Mistral-7B with SimPO and DPO on HPC cluster (SLURM, 8× A100 GPUs) for preference optimization research.",
    ],
    tags: ["LLM Fine-tuning", "AlpacaEval 2", "vLLM", "SimPO", "DPO", "Mistral-7B", "SLURM"],
  },
  {
    id: "jpmc-swe",
    number: "02",
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer I",
    type: "fulltime",
    typeLabel: "Full-time",
    location: "Bengaluru, India",
    period: "Jun 2023 – Aug 2025",
    startDate: "2023-06",
    endDate: "2025-08",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #60A5FA 100%)",
    category: "experience",
    overview:
      "Backend engineer on the Mortgage-Backed Securities (MBS) desk, building and scaling financial systems that support over 20 downstream applications. Owned several critical components including a trade booking application that replaced a legacy system worth $2.1M in annual operational savings.",
    timeline: "Jun 2023 – Aug 2025",
    context: "Full-time · JPMorgan Chase",
    tools: ["Java 21", "Spring Boot 3.3", "SQL", "Splunk", "Fortify", "GitHub Copilot", "Postman"],
    bullets: [
      "Designed and deployed scalable RESTful APIs and Spring Boot microservices for the MBS desk, supporting 20+ downstream applications.",
      "Built a Java/Spring Boot trade booking application replacing legacy systems, saving $2.1M annually.",
      "Redesigned bulk data loading jobs using Java parallel processing and SQL optimization, reducing runtime by 63%.",
      "Improved code quality via GitHub Copilot-assisted refactoring, upgrading 5+ legacy systems to Java 21 and Spring Boot 3.3.x.",
      "Configured Splunk dashboards and logging for 4 components to monitor API health and reduce production debugging time.",
      "Remediated security vulnerabilities across 8 Java components using Fortify static code analysis.",
      "Delivered production hot fixes within 5 hours during support rotations, maintaining system reliability.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "Microservices", "SQL", "Splunk", "Fortify"],
  },
  {
    id: "jpmc-intern",
    number: "03",
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer Intern",
    type: "internship",
    typeLabel: "Internship",
    location: "Bengaluru, India",
    period: "Feb 2023 – Jun 2023",
    startDate: "2023-02",
    endDate: "2023-06",
    gradient: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 60%, #93C5FD 100%)",
    category: "experience",
    overview:
      "Joined the MBS desk engineering team at JPMorgan Chase as a Software Engineer Intern. Contributed to backend microservice development, gained hands-on experience with production-scale financial systems, and won the company-wide SEPathon hackathon, which led to selection for the JPMorgan AI for Tech research team.",
    timeline: "Feb 2023 – Jun 2023",
    context: "Internship · JPMorgan Chase",
    tools: ["Java", "Spring Boot", "REST APIs", "Postman", "Jira"],
    bullets: [
      "Contributed to backend microservice development and testing on the MBS desk engineering team.",
      "Gained hands-on experience with Spring Boot, REST API design, and large-scale financial production systems.",
      "Won the SEPathon company-wide hackathon and was selected for the JPMorgan AI for Tech research team based on project impact.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "Hackathon Winner"],
  },
  {
    id: "asucd-pantry",
    number: "04",
    company: "ASUCD Pantry, UC Davis",
    role: "Software Developer",
    type: "parttime",
    typeLabel: "Part-time",
    location: "Davis, CA",
    period: "Oct 2025 – Present",
    startDate: "2025-10",
    endDate: null,
    logo: "/pantrylogo.png",
    gradient: "linear-gradient(135deg, #166534 0%, #16A34A 60%, #6EE7B7 100%)",
    category: "experience",
    overview:
      "Building a full-stack volunteer management system for the ASUCD Pantry, UC Davis's student-run food pantry serving hundreds of students in need. The system supports over 100 active volunteers with role-based access, shift scheduling, and university CAS authentication.",
    timeline: "Oct 2025 – Present",
    context: "Part-time · UC Davis",
    tools: ["Next.js", "React", "Prisma", "TypeScript", "CAS Auth", "PostgreSQL"],
    bullets: [
      "Developed a full-stack volunteer management system (Next.js, React, Prisma) with CAS authentication, scaling to 100+ active volunteers.",
    ],
    tags: ["Next.js", "React", "Prisma", "CAS Auth", "TypeScript"],
  },
];
