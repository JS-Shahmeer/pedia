"use client";
import React from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto pb-16 md:pt-32 pt-28 px-4 min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#b67878]">Terms and Conditions</h1>
        <p className="mb-4 text-lg">These Terms and Conditions govern your use of the Write On Pedia website and services. By accessing or using our site, you agree to these terms.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Use of Service</h2>
        <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for your use of the site.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Intellectual Property</h2>
        <p className="mb-4">All content on this site is the property of Write On Pedia or its licensors. You may not reproduce, distribute, or create derivative works without permission.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Limitation of Liability</h2>
        <p className="mb-4">Write On Pedia is not liable for any damages arising from your use of the site. The site is provided "as is" without warranties of any kind.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Changes to Terms</h2>
        <p className="mb-4">We may update these terms from time to time. Continued use of the site constitutes acceptance of the new terms.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Contact</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@writeonpedia.com" className="text-[#b67878] underline">info@writeonpedia.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
