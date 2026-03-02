"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to hire a Wikipedia writer?",
    answer:
      "The cost varies depending on research depth, sourcing, and complexity. Professional services typically range from a few hundred to several thousand dollars. However, Wikipedia itself does not charge for creating pages."
  },
  {
    question: "Can I write my own Wikipedia page?",
    answer:
      "Technically yes, but it is strongly discouraged due to conflict of interest guidelines. Wikipedia requires neutral, verifiable content supported by reliable third-party sources."
  },
  {
    question: "Can anyone write a Wikipedia page?",
    answer:
      "Yes. Wikipedia is an open platform where anyone can contribute. However, pages must meet notability guidelines and follow strict editorial standards."
  },
  {
    question: "What makes someone eligible for a Wikipedia page?",
    answer:
      "A person must meet Wikipedia’s notability criteria, meaning they have significant coverage in reliable, independent secondary sources such as major publications or media outlets."
  },
  {
    question: "Will my Wikipedia page stay online forever?",
    answer:
      "Not necessarily. Pages can be edited, flagged, or removed if they fail to meet Wikipedia’s policies or lack sufficient reliable sources."
  },
  {
    question: "Can you update an existing Wikipedia page?",
    answer:
      "Yes, updates can be made as long as they are neutral, properly sourced, and comply with Wikipedia’s guidelines."
  },
  {
    question: "Can I pay someone to write my Wikipedia page?",
    answer:
      "Paid editing is allowed but must be disclosed according to Wikipedia’s terms of use. Transparency and adherence to editorial standards are required."
  },
  {
    question: "How much does it cost to get a Wikipedia page made?",
    answer:
      "Wikipedia does not charge for pages. Costs only apply if hiring professional assistance for research, drafting, and submission support."
  },
  {
    question: "Who writes Wikipedia pages?",
    answer:
      "Wikipedia pages are written and maintained by volunteer contributors around the world who follow community guidelines."
  },
  {
    question: "How to get a Wikipedia page written about you?",
    answer:
      "First ensure you meet notability guidelines. Gather reliable media coverage, then draft a neutral article with proper citations or submit through the Articles for Creation process."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-medium text-black">
          Frequently Asked{" "}
          <span className="text-[#8b6b5a] font-semibold">Questions</span>
        </h2>

        {/* FAQ Items */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-gray-800 text-sm md:text-base font-medium">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Answer */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-6 text-sm md:text-[15px] text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}