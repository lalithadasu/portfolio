export interface Activity {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  image?: string;
  tags: string[];
  type: "volunteer" | "award" | "scholarship" | "community";
}

export const activities: Activity[] = [
  {
    id: "brains-to-classrooms",
    title: "Brains to Classrooms",
    organization: "Rubinet Lab, UC Davis",
    period: "Mar 2026",
    description:
      "Volunteered with Rubinet Lab's outreach program to teach neuroscience concepts to K–8 students at St. Hope PS7. Led interactive sessions on brain anatomy, helping students explore how the brain controls movement, memory, and emotion.",
    image: "/brainstoclassroom.png",
    tags: ["STEM Outreach", "Education", "Neuroscience"],
    type: "volunteer",
  },
  {
    id: "sepathon",
    title: "SEPathon Hackathon Winner",
    organization: "JPMorgan Chase & Co.",
    period: "2023",
    description:
      "Won the company-wide SEPathon hackathon at JPMorgan Chase. Selected as a member of the JPMorgan AI for Tech research team based on project innovation and business impact.",
    tags: ["Hackathon", "AI", "Innovation"],
    type: "award",
  },
  {
    id: "mrd-scholarship",
    title: "MRD Merit Scholarship",
    organization: "PES University",
    period: "2019 – 2023",
    description:
      "Awarded the PES University MRD Scholarship for academic excellence, ranked in the top 20% of the Computer Science batch in Semesters 2, 3, and 4.",
    tags: ["Scholarship", "Academic Excellence"],
    type: "scholarship",
  },
  {
    id: "carnatic-music",
    title: "Carnatic Classical Singer",
    organization: "Karnataka Music Examination Board",
    period: "10 years of training",
    description:
      "Trained Carnatic classical vocalist for 10 years. Completed the Karnataka Music Junior Grade Examination with Distinction. Music is where I find the intersection of structure, creativity, and emotion, not unlike writing elegant code.",
    tags: ["Carnatic Music", "Performing Arts", "Karnataka Music Exam"],
    type: "community",
  },
];
