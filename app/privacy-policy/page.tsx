"use client";
import React from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto pb-16 md:pt-32 pt-28 px-4 min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#b67878]">Privacy Policy</h1>
        <p className="mb-4 text-lg">This Privacy Policy describes how Write On Pedia collects, uses, and protects your information when you use our website and services.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Information Collection</h2>
        <p className="mb-4">We collect information you provide directly to us, such as when you contact us or use our services. We may also collect information automatically through cookies and analytics tools.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Use of Information</h2>
        <p className="mb-4">We use your information to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Data Security</h2>
        <p className="mb-4">We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is completely secure.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Your Rights</h2>
        <p className="mb-4">You may have rights regarding your personal information, including accessing, correcting, or deleting your data. Contact us for more information.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#8b6b5a]">Contact</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@writeonpedia.com" className="text-[#b67878] underline">info@writeonpedia.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
