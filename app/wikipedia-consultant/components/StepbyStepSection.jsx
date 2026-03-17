"use client";

import React from "react";
import LeafImg from "@/src/images/leaf.webp";
import Image from "next/image";
import QuoteButton from "@/src/components/QuoteButton";

const steps = [
  {
    title: "Initial Consultation",
    desc: `We start with a detailed discussion about your goals, background, and existing media coverage. Our consultants assess your current online presence and discuss what a Wikipedia page could achieve for you.`,
  },
  {
    title: "Notability Review",
    desc: `Our experts evaluate whether you meet Wikipedia's notability guidelines. We review publications, awards, and independent sources to determine eligibility and identify areas for improvement.`,
  },
  {
    title: "Strategy Development",
    desc: `Based on our assessment, we develop a customized strategy for your Wikipedia presence. This includes timelines, source gathering plans, and content outlines tailored to your unique situation.`,
  },
  {
    title: "Content Guidance",
    desc: `We provide expert guidance on structuring your article, ensuring neutrality, and selecting appropriate content. Our consultants help you draft sections that comply with Wikipedia's standards.`,
  },
  {
    title: "Submission Assistance",
    desc: `When you're ready, we guide you through the submission process. Our team advises on sandbox testing, formatting, and navigating Wikipedia's review channels for the best chance of approval.`,
  },
  {
    title: "Post-Publication Support",
    desc: `After your page goes live, we offer ongoing consultation for maintenance, updates, and addressing any community feedback. Our experts ensure your page remains compliant and current.`,
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

            <p className="my-6 text-gray-600 text-base leading-relaxed">
              Our professional Wikipedia consultants follow a careful process to
              ensure your page meets all Wikipedia standards. This structured
              approach through our consulting service guarantees compliance and
              increases your chances of approval while keeping complete
              transparency.
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
