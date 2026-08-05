"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Wikipedia page creation service?",
    answer:
      "It’s a service that helps prepare and submit a Wikipedia article properly. This usually includes writing the article and preparing it for review by Wikipedia editors."
  },
  {
    question: "Can anyone have a Wikipedia page?",
    answer:
      "No. Wikipedia only accepts topics that have real coverage in reliable media. If trusted publications have written about a person or company, there is a better chance that a page can be approved."
  },
  {
    question: "Can I write my own Wikipedia page?",
    answer:
      "Yes, but it is not recommended. Writing about yourself or your own business can create bias, and Wikipedia editors often question those pages."
  },
  {
    question: "How long does it take to create a Wikipedia page?",
    answer:
      "There is no fixed timeline. Let’s discuss what you have in mind so we can give you a clear timeline."
  },
  {
    question: "Does Wikipedia charge money for pages?",
    answer:
      "No. Wikipedia is a free platform. It does not charge for publishing articles."
  },
  {
    question: "What sources are accepted on Wikipedia?",
    answer:
      "Wikipedia prefers trusted publications and academic journals. Personal blogs or self-published content usually do not count."
  },
  {
    question: "What happens if my article is rejected?",
    answer:
      "Editors normally explain the reason. In many cases the article can be improved with better sources or formatting and then submitted again."
  },
  {
    question: "Can an existing Wikipedia page be updated?",
    answer:
      "Yes. Information can be updated when new reliable sources are available."
  },
  {
    question: "Why do some Wikipedia pages get removed?",
    answer:
      "Pages are removed if they lack reliable sources or read like advertisements instead of neutral information."
  },
  {
    question: "Why do people hire professionals for Wikipedia pages?",
    answer:
      "Many people prefer professional help to make sure the article follows the platform’s guidelines and avoids common mistakes."
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