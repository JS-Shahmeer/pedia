"use client";

import React from "react";
import LeafImg from "@/src/images/leaf.webp";
import Image from "next/image";

const steps = [
  {
    title: "Eligibility & Notability Check",
    desc: `Our professional Wikipedia consultants conduct a detailed notability check, evaluating your media coverage, recognition, and independent sources against Wikipedia’s strict eligibility criteria. This complimentary consultation determines if your achievements qualify and outlines the next steps for Wikipedia page strategy.`,
  },
  {
    title: "Source Compilation & Verification",
    desc: `We carefully compile and verify citations from reliable sources that support your notability and credibility. Our experienced consultants research media mentions, academic references, and industry publications to ensure every claim meets Wikipedia’s strict sourcing standards.`,
  },
  {
    title: "Draft Creation in Sandbox",
    desc: `Our skilled Wikipedia consultant prepares a neutral, fact-checked draft in Wikipedia’s Sandbox, following all content guidelines. This key step in our premium consulting service ensures every detail is objective, well-formatted, and compliant with the encyclopedia’s professional standards.`,
  },
  {
    title: "Internal Compliance Review",
    desc: `Multiple senior consultants review your draft for tone, formatting, citations, and compliance from every angle. This quality check within our Wikipedia consulting services ensures top advisory standards, reducing the risk of rejection and ensuring smooth community approval.`,
  },
  {
    title: "Submission via Articles for Creation",
    desc: `We transparently submit your page through Wikipedia’s official Articles for Creation process, managing all technical steps and editor communications. Our professional Wikipedia consultants ensure full compliance with ethical standards and submission protocols for conflict-free, transparent Wikipedia publishing.`,
  },
  {
    title: "Ongoing Page Stewardship",
    desc: `We offer ongoing monitoring to maintain your page’s accuracy and compliance after publication. Our Wikipedia consultants provide regular updates, protect against edits, and swiftly address issues—ensuring your digital legacy remains stable and credible over time.`,
  },
];

export default function StepbyStepSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Background Shape */}
      <Image
        alt="leaf-img"
        src={LeafImg}
        className="absolute right-0 top-48 w-1/2 hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold leading-tight text-gray-800">
              Our Step-By-Step
              <br />
              Wikipedia Consulting
              <br />
              Service Process
            </h2>

            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Our professional Wikipedia consultants follow a careful process to
              ensure your page meets all Wikipedia standards. This structured
              approach through our consulting service guarantees compliance and
              increases your chances of approval while keeping complete
              transparency.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 bg-[#8b6b5a] hover:bg-[#7a5a4a] text-white px-6 py-3 rounded-full text-sm font-medium transition">
              Let’s Get Started
              <span className="text-lg">➜</span>
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
