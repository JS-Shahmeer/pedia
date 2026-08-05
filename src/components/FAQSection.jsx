"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to hire Wikipedia writers?",
    answer:
      "Costs depend on research depth and source availability. Wikipedia does not charge for pages. You only pay when you hire Wikipedia writers for professional help."
  },
  {
    question: "Is it allowed to hire Wikipedia writers?",
    answer:
      "Yes. Paid editing is allowed if it is properly disclosed."
  },
  {
    question: "Why should I hire Wikipedia writer support instead of writing myself?",
    answer:
      "Wikipedia discourages self-written pages due to conflicts of interest. Professional writers understand neutrality and citation rules."
  },
  {
    question: "What makes someone eligible for a Wikipedia page?",
    answer:
      "You need strong coverage in reliable and independent sources."
  },
  {
    question: "Will my page stay online forever?",
    answer:
      "No page is guaranteed to stay live. It must continue to meet policies."
  },
  {
    question: "Can you edit an existing page?",
    answer:
      "Yes, we can. Our Wikipedia Editing Services improve structure and sourcing."
  },
  {
    question: "Can a Wikipedia page be removed after it is published?",
    answer:
      "Yes, it can. If editors believe the page does not meet notability standards or violates content policies, it may be nominated for deletion."
  },
  {
    question: "How long does it take to get a Wikipedia page approved?",
    answer:
      "Some submissions are reviewed within weeks, while others take longer, which depends on the backlog and editor availability."
  },
  {
    question: "Do I need media coverage before creating a Wikipedia page?",
    answer:
      "A page is unlikely to qualify without reliable third-party sources, such as social media and press releases. So, yes, independent media coverage is essential."
  },
  {
    question: "Do you provide support after the page goes live?",
    answer:
      "Yes. After publication, we offer monitoring support to review major edits and maintain compliance."
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
        <h2 className="text-center text-3xl md:text-5xl font-medium text-black">
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