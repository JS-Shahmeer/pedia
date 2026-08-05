"use client";

import React from "react";
import LeafImg from "@/src/images/leaf.webp";
import Image from "next/image";
import QuoteButton from "@/src/components/QuoteButton";

const steps = [
  {
    title: "Notability Check",
    desc: `We check whether your achievements meet Wikipedia’s notability standards before we write anything. This is a crucial first step because Wikipedia only accepts subjects that have significant coverage from independent, reliable sources. Our team reviews media mentions and other publications to confirm your eligibility. We explain clearly what qualifies and what might need stronger references, so you know exactly where your page stands before we start writing.`,
  },
  {
    title: "Source Compilation",
    desc: `Reliable sources are the backbone of a Wikipedia page. After confirming notability, we collect and verify references that support every statement in your article. Our editors double-check newspapers, academic journals, industry publications, and other trustworthy sources. This careful verification prevents problems during submission and ensures your page remains credible over time.`,
  },
  {
    title: "Draft Creation in Sandbox",
    desc: `We create your Wikipedia draft in the sandbox environment, which is Wikipedia’s safe testing space. This allows us to organize content correctly, format it properly, and maintain a neutral, fact-based tone. Our editors pay close attention to every section, from introduction to references, so your draft follows Wikipedia’s guidelines and reads naturally for every visitor.`,
  },
  {
    title: "Internal Review",
    desc: `Once the draft is ready, it goes through multiple internal reviews by senior editors. We check for structure, clarity, grammar, compliance with Wikipedia rules, and the correct use of citations. These layers of review reduce the risk of rejection and make sure your page is polished and professional before it goes live.`,
  },
  {
    title: "Submission Through Official Channels",
    desc: `After the draft passes review, we submit it via Wikipedia’s official channels, including Articles for Creation or other approved methods. Our editors handle all technical steps and communication with Wikipedia reviewers. This ensures full transparency, ethical compliance, and a smooth approval process.`,
  },
  {
    title: "Ongoing Monitoring",
    desc: `Publishing is not the final step. Wikipedia pages can be edited or challenged at any time. Our team continues to monitor your page after publication, responding quickly to unauthorized edits or policy changes. This keeps your information accurate, up-to-date, and trustworthy for all readers.`,
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
              Our Wikipedia Page Creation & Publishing Process
            </h2>

            <p className="my-6 text-gray-600 text-base leading-relaxed">
              Publishing a Wikipedia page requires care, accuracy, and strict
              adherence to rules. Our <a href="/wikipedia-page-creation" className="underline text-[#b67878] hover:text-black">Wikipedia page</a> service guides
              your page from idea to live article while keeping every step
              transparent and compliant. Each stage ensures your profile or
              organization is presented clearly and in a format that Wikipedia
              editors accept.
            </p>

            <QuoteButton variant="default"> Let’s Get Started</QuoteButton>
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
