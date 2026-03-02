import React from "react";
import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import ContactBanner from "@/app/contact/ContactBanner";

export default function ContactPage() {
  return (
    <main className="relative">
      <Head>
        <title>Contact Us – Write on Pedia</title>
        <meta name="description" content="Get in touch with our Wikipedia experts for writing, editing, publishing and consultation services." />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Head>
      <Navbar />
      <ContactBanner />
      <Contact />
      <Footer />
    </main>
  );
}
