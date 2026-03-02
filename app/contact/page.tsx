import React from "react";
import Navbar from "@/src/components/Navbar";

export const metadata = {
  title: "Contact Us – Write on Pedia",
  description: "Get in touch with our Wikipedia experts for writing, editing, publishing and consultation services.",
  alternates: { canonical: "https://yourdomain.com/contact" },
};
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
