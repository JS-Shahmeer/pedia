import React from "react";
import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import AboutBanner from "@/src/components/AboutBanner";
import MissionAndExpertise from "@/src/components/MissionAndExpertise";
import About from "@/src/components/About";
import Footer from "@/src/components/Footer";
import Contact from "@/src/components/Contact";

export default function AboutPage() {
  return (
    <main className="relative">
      <Head>
        <title>About Us – Write on Pedia</title>
        <meta name="description" content="Learn more about Write on Pedia and our mission to provide top-notch Wikipedia services." />
        <link rel="canonical" href="https://yourdomain.com/about-us" />
      </Head>
      <Navbar />
      <AboutBanner />
      <MissionAndExpertise />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
