"use client";
import React from "react";
import { FaBookReader } from "react-icons/fa";

const CTA = ({ bgColor = "bg-[#fdf6f2]" }) => {
  return (
    <section className={`${bgColor} py-16 relative`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Do you have a question? <br />
            Feel free to contact me.
          </h2>
          <h2 className="text-xl md:text-4xl font-bold text-[#b77b7b] mb-6">
            <a href="tel:+00000000000">+00 (0) 000 000 000</a>
          </h2>
          <a
            href=""
            className="inline-block bg-[#b77b7b] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a86b6b] transition-colors"
          >
            Send me a message
          </a>
        </div>

        {/* Icon */}
        <div className="text-[#b77b7b] text-6xl md:text-7xl hidden md:flex justify-center md:justify-end absolute top-1/2 transform -translate-1/2">
          <FaBookReader />
        </div>
      </div>
    </section>
  );
};

export default CTA;
