"use client";

import { Phone } from "lucide-react";
import CTABgImage from "@/src/images/cta-bg.png";

export default function SectionCTA() {
  return (
    <section
      className="relative md:pt-20 md:pb-32 pt-12 pb-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${CTABgImage.src})`,
      }}
    >
      <div className="global-container max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
          Ready to <span className="font-extrabold">Hire</span> a Wikipedia Editor?
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-xl text-black mb-8 md:mb-10 lg:mb-12 leading-relaxed px-4 md:px-0">
          Let our professional Wikipedia editors handle everything from notability checks to final approval, all with complete transparency and ethical practices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
          {/* Hire Button */}
          <button className="w-full sm:w-auto bg-[#8b6b5a] hover:bg-[#7a5a4a] text-white font-semibold py-3 md:py-3.5 px-6 md:px-8 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl">
            <span>Hire a Wikipedia Editor</span>
            <Phone size={18} className="ml-1" />
          </button>

          {/* Phone Number */}
          <a
            href="tel:+15127680328"
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#8b6b5a] font-semibold py-3 md:py-3.5 px-6 md:px-8 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone size={18} />
            <span>(512) 768-0328</span>
          </a>
        </div>
      </div>
    </section>
  );
}
