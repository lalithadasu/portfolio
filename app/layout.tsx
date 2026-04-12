import type { Metadata } from "next";
import { Syne, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/app/components/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lalitha Sravanti Dasu, AI Engineer",
  description:
    "AI Engineer and CS Graduate Researcher at UC Davis. Specializing in LLM fine-tuning, preference optimization, and scalable AI systems. Previously at JPMorgan Chase.",
  keywords: ["AI Engineer", "LLM", "Machine Learning", "UC Davis", "JPMorgan Chase"],
  openGraph: {
    title: "Lalitha Sravanti Dasu, AI Engineer",
    description:
      "AI Engineer and CS Graduate Researcher at UC Davis. LLM fine-tuning, preference optimization, scalable AI systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${cormorant.variable} ${inter.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
