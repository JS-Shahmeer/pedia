"use client";

import React from "react";
import LeafImg from "@/src/images/leaf.webp";
import Image from "next/image";
import QuoteButton from "@/src/components/QuoteButton";

import Link from "next/link";

const steps = [
  {
    title: "A Platform People Already Trust",
    desc: `It is one of the first sources people check when they want quick information. Students, journalists, professionals, and everyday readers turn to it because the content is expected to be factual and supported by real sources. When an article is created through proper wikipedia page creation, it allows your story to exist within a platform people already trust.`,
  },
  {
    title: "Global Reach Without Borders",
    desc: `One of the biggest advantages of Wikipedia is its worldwide audience. Articles are read in nearly every country and are often translated into multiple languages over time. That means a single well-written page can reach readers far beyond your immediate network.`,
  },
  {
    title: "Credibility Through Neutral Information",
    desc: `Wikipedia requires articles to remain neutral and supported by independent sources, unlike marketing websites that promote products or services. This approach keeps the focus on facts rather than promotion.`,
  },
  {
    title: "Strong Search Presence",
    desc: (
      <>
        Another reason people hire Wikipedia page creator is visibility in search results. Wikipedia pages frequently appear among the top results on search engines because the platform is considered authoritative. When an article is properly sourced and{" "}
        <Link
          href="/"
          className="underline text-[#b67878] hover:text-black"
        >
          written according to Wikipedia
        </Link>{" "}
        standards it can help people find accurate information about you or your organization without relying on advertising or promotional campaigns.
      </>
    ),
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
              Why the Wikipedia page creation service USA Still Matters
            </h2>

            <p className="my-6 text-gray-600 text-base leading-relaxed">
              People search through websites, blogs, social platforms, and news
              outlets to learn about companies, professionals, and public
              figures in today’s time. Yet despite all these options, Wikipedia
              continues to stand out as one of the most widely used and trusted
              sources of information online.
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
