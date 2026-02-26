import React from "react";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionCTA from "./components/SectionCTA";
import SectionTestimonials from "./components/SectionTestimonials";
import Navbar from "@/src/components/Navbar";

export default function WikipediaWritingServicesPage() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionTestimonials />
      <SectionCTA />
    </main>
  );
}
