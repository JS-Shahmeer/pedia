"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import PortfolioImage1 from "@/src/images/portfolio/1.webp";
import PortfolioImage2 from "@/src/images/portfolio/2.webp";
import PortfolioImage3 from "@/src/images/portfolio/3.webp";
import PortfolioImage4 from "@/src/images/portfolio/4.webp";
import PortfolioImage5 from "@/src/images/portfolio/5.webp";
import PortfolioImage6 from "@/src/images/portfolio/6.webp";
import Image from "next/image";

const chapters = [
  {
    title: "Storytelling through art",
    image:
      PortfolioImage1,
  },
  {
    title: "Narrative-driven game design",
    image:
      PortfolioImage2,
  },
  {
    title: "Olympic curling champion",
    image:
      PortfolioImage3,
  },
  {
    title: "Icons Across Industries",
    image:
      PortfolioImage4,
  },
  {
    title: "Legacy in Focus",
    image:
      PortfolioImage5,
  },
  {
    title: "Brands & Beyond",
    image:
      PortfolioImage6,
  }
];

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="bg-white py-16 relative">
      <div className="global-container">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest mb-2">
            CASE STUDIES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our Work
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        {/* HORIZONTAL PANELS */}
        <div className="w-full">
          <div className="flex md:flex-row flex-col md:gap-6 gap-2 w-full h-[65vh] min-h-[420px] max-h-[720px] overflow-hidden">
            {chapters.map((chapter, index) => {
              const isActive = active === index;
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (!isActive) {
                      setActive(index);
                    }
                  }}
                  className={`relative md:py-0 py-2.5 overflow-hidden transition-all duration-700 ease-in-out flex items-center justify-center rounded-xl group
            ${isActive ? "flex-[9]" : "flex-[1] bg-[#f5ede6]"}
          `}
                >
                  {isActive && (
                    <>
                      <div
                        className="absolute inset-0 bg-center bg-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                        style={{
                          backgroundColor: "#f5ede6",
                          backgroundImage: `url(${chapter.image.src})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => setLightbox({ image: chapter.image, title: chapter.title })}
                          className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#b67878] hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          See Full Preview
                        </button>
                      </div>
                    </>
                  )}

                  {!isActive && (
                    <h3
                      className="relative z-10 text-black font-semibold tracking-wider text-sm md:rotate-[-90deg] whitespace-nowrap opacity-70"
                    >
                      {chapter.title}
                    </h3>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {lightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setLightbox(null)}
                className="fixed cursor-pointer top-4 right-4 text-white bg-[#b67878] rounded-full p-2 hover:bg-black/70"
              >
                <X size={24} />
              </button>
              <div className="text-center bg-white p-4 border-b border-[#b67878] rounded-tl-xl rounded-tr-xl">
                <h3 className="text-black text-2xl font-bold">{lightbox.title}</h3>
              </div>
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full h-auto shadow-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
