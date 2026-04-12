import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";
import WorkSection from "@/app/components/WorkSection";
import AboutSection from "@/app/components/AboutSection";
import ResumeSection from "@/app/components/ResumeSection";
import FAQSection from "@/app/components/FAQSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <WorkSection />
      <AboutSection />
      <ResumeSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
