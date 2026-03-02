import React from "react";
import Head from "next/head";
import Hero from "./components/Hero";
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

export default function WikipediaPublishingServicesPage() {
  return (
    <main className="relative overflow-x-clip">
      <Head>
        <title>Wikipedia Publishing Services – Write on Pedia</title>
        <meta name="description" content="Reliable Wikipedia publishing services to ensure your article gets live." />
        <link rel="canonical" href="https://yourdomain.com/wikipedia-publishing-services" />
      </Head>
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
