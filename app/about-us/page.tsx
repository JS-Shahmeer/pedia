import React from "react";
import Navbar from "@/src/components/Navbar";
import AboutBanner from "@/src/components/AboutBanner";
import MissionAndExpertise from "@/src/components/MissionAndExpertise";
import About from "@/src/components/About";
import Footer from "@/src/components/Footer";
import Contact from "@/src/components/Contact";

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />
      <AboutBanner />
      <MissionAndExpertise />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
