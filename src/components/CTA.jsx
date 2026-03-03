"use client";
import React from "react";
import { FaBookReader } from "react-icons/fa";
import QuoteButton from "@/src/components/QuoteButton";

const CTA = ({ bgColor = "bg-[#fdf6f2]" }) => {
  return (
    <section className={`${bgColor} py-16 relative`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Do you have a question? <br />
            Feel free to contact me.
          </h2>
          <h2 className="text-xl md:text-4xl font-bold text-[#b77b7b] mb-6 text-center">
            <a href="tel:+00000000000">+00 (0) 000 000 000</a>
          </h2>
          <div className="flex justify-center">
            <QuoteButton variant="default">Send us a message</QuoteButton>
          </div>
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
