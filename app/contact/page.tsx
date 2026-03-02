import React from "react";
import Navbar from "@/src/components/Navbar";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import ContactBanner from "@/app/contact/ContactBanner";

export default function ContactPage() {
  return (
    <main className="relative">
      <Navbar />
      <ContactBanner />
      <Contact />
      <Footer />
    </main>
  );
}
