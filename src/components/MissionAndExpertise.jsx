"use client";

import { Check } from "lucide-react";

export default function MissionAndExpertise() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="global-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Our Mission */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our mission is to provide reliable, ethical, and high-quality
              Wikipedia solutions that help our clients establish authority and
              digital presence worldwide. We aim to:
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "Create accurate and verified Wikipedia content",
                "Follow strict Wikipedia standards",
                "Build long-term online reputation",
                "Deliver result-driven services",
                "Maintain client confidentiality",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#b77b7b] text-white">
                    <Check size={11} />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Our Expertise */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              With years of experience in Wikipedia writing and publishing, we
              understand how Wikipedia works. Our expertise includes:
            </p>
            <ul className="space-y-3 mt-6">
              {[
                "In-depth research and citation",
                "Neutral and policy-compliant writing",
                "Page approval strategies",
                "Notability assessment",
                "Content monitoring and maintenance",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#b77b7b] text-white">
                    <Check size={11} />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
