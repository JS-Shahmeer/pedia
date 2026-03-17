"use client";

import React from "react";
import LeafImg from "@/src/images/leaf.webp";
import Image from "next/image";
import QuoteButton from "@/src/components/QuoteButton";

const steps = [
  {
    title: "Build Public Credibility",
    desc: `A well-structured Wikipedia page helps people understand your background quickly. Readers often check Wikipedia first when they research a person or organization. Our editing service presents verified information in a clear format so readers can trust what they see.`,
  },
  {
    title: "Improve Online Visibility",
    desc: `Search engines trust Wikipedia because of its authority and strict editorial standards. A properly written article often appears near the top of search results. Our editors structure the content carefully so your page stays clear, organized, and easy to read.`,
  },
  {
    title: "Strengthen Your Professional Profile",
    desc: `Your Wikipedia page should reflect your work without sounding promotional. This balance matters. If the article sounds like advertising, editors usually reject it. Our team keeps the tone neutral while still presenting important milestones and achievements.`,
  },
  {
    title: "Verify Every Source",
    desc: `Wikipedia requires independent sources. Blogs, self-published content, and promotional materials usually do not qualify. Our editors research and verify reliable publications before adding them as citations.`,
  },
  {
    title: "Organize Your Story Clearly",
    desc: `Many people have strong achievements but struggle to present them properly. A Wikipedia article must follow a structured format. Our editors organize your professional journey, so readers understand the timeline and significance of your work.`,
  },
  {
    title: "Reach a Global Audience",
    desc: `Wikipedia attracts readers from every country. A properly written page allows your story to reach audiences far beyond your local market. Our Wikipedia editing service USA focuses on clarity and credibility so your profile remains useful to readers worldwide.`,
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
              What Our Wikipedia Editor Service Helps You Achieve
            </h2>

            <p className="my-6 text-gray-600 text-base leading-relaxed">
              Our editing service focuses on accuracy, structure, and reliable
              sources so your page follows Wikipedia guidelines and remains
              stable over time. With careful editing and proper citations, your
              profile becomes easier for readers to trust and reference.
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
