"use client";

import QuoteButton from "@/src/components/QuoteButton";

export default function AboutBanner() {
  return (
    <section className="bg-[#f6ede6] pb-20 pt-40">
      <div className="global-container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          About Us
        </h2>
        <p className="mt-4 text-base text-gray-600 max-w-md mx-auto text-center">
          Our expert team of researchers, writers, and editors helps
          individuals, brands, entrepreneurs, and organizations build strong
          online credibility through authentic and well-researched Wikipedia
          content.
        </p>
        <div className="flex justify-center mt-6">
            <QuoteButton variant="default">Send us a message</QuoteButton>
        </div>
      </div>
    </section>
  );
}
