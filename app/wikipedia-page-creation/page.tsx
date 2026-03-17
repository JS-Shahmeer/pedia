import React from "react";
import Hero from "./components/Hero";

export const metadata = {
  title: "Best Wikipedia Page Creation Service USA for Brands & Authors",
  description: "Our Wikipedia page creation service USA helps individuals and companies create accurate Wikipedia pages that follow platform guidelines and use verified sources.",
  alternates: { canonical: "https://writeonpedia.com/wikipedia-page-creation" },
};
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionCTA from "./components/SectionCTA";
import SectionTestimonials from "./components/SectionTestimonials";
import Navbar from "@/src/components/Navbar";
import StepbyStepSection from "./components/StepbyStepSection";
import Portfolio from "@/src/components/Portfolio";
import CTA from "@/src/components/CTA";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import FAQSection from "./components/FAQSection";

export default function WikipediaWritingServicesPage() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Portfolio />
      <SectionCTA />
      <SectionTestimonials />
      <StepbyStepSection />
      <FAQSection />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
