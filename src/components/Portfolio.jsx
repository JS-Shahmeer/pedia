"use client";
import React, { useState } from "react";

const chapters = [
  {
    title: "Business Profile Case Study",
    image:
      "https://fixolab.github.io/wonted/one-page-version/assets/images/chapter-preview/6.png",
  },
  {
    title: "Public Figure Biography",
    image:
      "https://fixolab.github.io/wonted/one-page-version/assets/images/chapter-preview/7.png",
  },
  {
    title: "Author Profile Restoration",
    image:
      "https://fixolab.github.io/wonted/one-page-version/assets/images/chapter-preview/8.png",
  },
  {
    title: "Corporate Page Recovery",
    image:
      "https://fixolab.github.io/wonted/one-page-version/assets/images/chapter-preview/9.png",
  },
  {
    title: "Research Scholar Page Creation",
    image:
      "https://fixolab.github.io/wonted/one-page-version/assets/images/chapter-preview/10.png",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 relative">
      <div className="global-container">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest mb-2">
            CASE STUDIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
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
                  onClick={() => setActive(index)}
                  className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out flex items-center justify-center rounded-xl group
            ${isActive ? "flex-[9]" : "flex-[1] bg-[#f5ede6]"}
          `}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-center bg-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundColor: "#f5ede6",
                        backgroundImage: `url(${chapter.image})`,
                      }}
                    />
                  )}
                  {/* <div
                    className={`absolute inset-0 ${isActive ? "bg-[#f5ede6]/20" : "bg-[#f5ede6]"}`}
                  /> */}
                  <h3
                    className={`relative z-10 text-black font-semibold tracking-wider ${isActive ? "text-3xl mb-8" : "text-sm md:rotate-[-90deg] whitespace-nowrap opacity-70"}`}
                  >
                    {chapter.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
