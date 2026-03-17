"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a Wikipedia publishing service cost?",
    answer:
      "Costs are based on research, writing, and submission requirements. Prices depend on the complexity of the page and the number of sources needed."
  },
  {
    question: "Can I publish my own Wikipedia page?",
    answer:
      "Yes, but Wikipedia discourages self-promotion. Pages must stay neutral and rely on independent, reliable sources."
  },
  {
    question: "What is included in your Wikipedia publishing service USA?",
    answer:
      "We handle notability checks, source verification, drafting, submission, and ongoing monitoring after publication."
  },
  {
    question: "How long does it take to publish a Wikipedia page?",
    answer:
      "Approval time depends on the review queue and article complexity. It can take a few days to several weeks."
  },
  {
    question: "Who writes Wikipedia pages?",
    answer:
      "Volunteer contributors and professional Wikipedia writers create and edit pages following strict guidelines."
  },
  {
    question: "Can an existing Wikipedia article be updated?",
    answer:
      "Yes. Our editors can improve existing pages, correct information, and strengthen citations."
  },
  {
    question: "Does Wikipedia charge for publishing?",
    answer:
      "No. Wikipedia is free. Costs apply only if you hire professionals for research, drafting, and submission assistance."
  },
  {
    question: "Who can use this service?",
    answer:
      "Individuals, organizations, authors, and businesses that meet Wikipedia’s notability and source requirements can benefit from our service."
  },
  {
    question: "How do I get started with Wikipedia publishing?",
    answer:
      "The first step is a notability assessment. Once confirmed, our editors can draft your page, verify sources, and handle submission."
  },
  {
    question: "Will my Wikipedia page remain online forever?",
    answer:
      "Wikipedia pages can change or be removed if they no longer meet guidelines. Our team monitors pages to maintain accuracy and compliance."
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