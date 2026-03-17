"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Wikipedia consulting?",
    answer:
      "Wikipedia consulting involves expert guidance on creating and maintaining Wikipedia pages. Our consultants assess eligibility, provide strategy advice, and help navigate the complex process of getting approved."
  },
  {
    question: "How much does Wikipedia consulting cost?",
    answer:
      "Consulting fees vary based on the scope of advice needed. We offer packages for notability assessment, strategy development, and ongoing guidance. Contact us for a customized quote."
  },
  {
    question: "Do you create the Wikipedia page for me?",
    answer:
      "As consultants, we provide guidance and strategy, but we don't directly create or edit pages. We help you understand the process and prepare your materials for submission."
  },
  {
    question: "What makes someone eligible for a Wikipedia page?",
    answer:
      "Eligibility depends on notability guidelines. You need significant coverage in independent, reliable sources. Our consultants evaluate your media presence and advise on strengthening it."
  },
  {
    question: "How long does the consulting process take?",
    answer:
      "The timeline depends on your needs. A basic notability assessment can be completed in days, while comprehensive strategy development may take weeks to gather all necessary information."
  },
  {
    question: "Can you help with existing Wikipedia pages?",
    answer:
      "Yes, we provide consultation on improving existing pages, addressing community feedback, and maintaining compliance with Wikipedia policies."
  },
  {
    question: "What if my notability assessment shows I'm not ready?",
    answer:
      "If you don't meet current guidelines, we provide specific recommendations for building your media presence and suggest timelines for re-evaluation."
  },
  {
    question: "Do you provide ongoing support after consultation?",
    answer:
      "Yes, we offer follow-up consultations to address questions during the submission process and provide advice on maintaining your page post-publication."
  },
  {
    question: "Is consulting allowed under Wikipedia's rules?",
    answer:
      "Yes, providing strategic advice and guidance is permitted. However, direct editing or writing must be disclosed if paid services are involved."
  },
  {
    question: "Who can benefit from Wikipedia consulting?",
    answer:
      "Individuals, organizations, and businesses seeking to establish or enhance their online credibility through Wikipedia can benefit from our consulting services."
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