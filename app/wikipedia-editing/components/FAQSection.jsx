"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a Wikipedia editing service cost?",
    answer:
      "Costs depend on research time and the number of sources required. Contact us so we can give you a clear estimate."
  },
  {
    question: "Can I create my own Wikipedia article?",
    answer:
      "Yes, anyone can contribute to Wikipedia. However, conflict-of-interest rules discourage people from writing about themselves or their own company."
  },
  {
    question: "Why do many Wikipedia pages get rejected?",
    answer:
      "Most rejections happen because the subject does not meet notability requirements or the article lacks reliable sources."
  },
  {
    question: "How long does the Wikipedia approval process take?",
    answer:
      "Review time varies. Some submissions receive feedback within days while others may take several weeks, depending on reviewer availability."
  },
  {
    question: "What makes someone eligible for a Wikipedia article?",
    answer:
      "A person must receive significant coverage from reliable and independent publications such as magazines or academic journals."
  },
  {
    question: "Can an existing Wikipedia article be improved?",
    answer:
      "Yes. A qualified Wikipedia editor can update information, correct formatting issues, and strengthen citations."
  },
  {
    question: "Does Wikipedia charge money for publishing pages?",
    answer:
      "No. Wikipedia does not charge for creating articles. Professional services only charge for research, writing, and editing services."
  },
  {
    question: "Who writes Wikipedia articles?",
    answer:
      "Wikipedia articles come from volunteers around the world who follow community guidelines and editorial standards."
  },
  {
    question: "Can companies have Wikipedia pages?",
    answer:
      "Yes, but they must meet the same notability requirements as individuals and must include strong independent coverage."
  },
  {
    question: "How do I start the process?",
    answer:
      "The first step involves checking whether reliable sources exist. Once notability is confirmed, editors can begin preparing the article draft."
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