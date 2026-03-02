import React from "react";
import Hero from "./components/Hero";

export const metadata = {
  title: "Wikipedia Writing Services – Write on Pedia",
  description: "Professional Wikipedia writing services tailored to your needs.",
  alternates: { canonical: "https://yourdomain.com/wikipedia-writing-services" },
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
import FAQSection from "@/src/components/FAQSection";

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
