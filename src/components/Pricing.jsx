"use client";
import React, { useState } from "react";

export default function Pricing() {
  return (
    <section className="bg-[#f5ede6] py-16 relative">
      <div className="global-container">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest mb-2">PRICING</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Pricing based on their version
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "E-Book",
              price: "$05",
              highlight: false,
              features: [
                "Full digital edition of the book",
                "Downloadable PDF & EPUB formats",
                "Instant access after purchase",
                "Lifetime file updates included",
              ],
            },
            {
              title: "Bundle",
              price: "$15",
              highlight: true,
              features: [
                "Complete digital edition (PDF + EPUB)",
                "Premium hardcover printed copy",
                "Free worldwide shipping",
                "Exclusive bonus resources",
              ],
            },
            {
              title: "Hardcover",
              price: "$10",
              highlight: false,
              features: [
                "Beautifully printed hardcover book",
                "High-quality paper and finish",
                "Perfect for collectors & gifting",
                "Access to companion downloads",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-white px-10 py-12 text-center flex flex-col justify-between transition-all duration-300
      hover:shadow-[0_20px_60px_-10px_rgba(124,90,90,0.45)]
      ${
        plan.highlight
          ? "shadow-[0_20px_60px_-10px_rgba(124,90,90,0.45)] scale-[1.03]"
          : "shadow-sm"
      }`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#1f3b57] mb-4">
                  {plan.title}
                </h3>

                <p className="text-5xl font-bold text-[#1f3b57] mb-10">
                  {plan.price}
                </p>

                <ul className="text-[#1f3b57] text-base">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="border-t border-[#cecece] py-4">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-10 px-8 py-3 text-sm tracking-widest transition-all duration-300
        ${
          plan.highlight
            ? "bg-[#b97b7b] text-white hover:bg-[#a46868]"
            : "border border-[#b97b7b] text-[#b97b7b] hover:bg-[#b97b7b] hover:text-white"
        }`}
              >
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
