import { ChevronRight } from "lucide-react";
import React from "react";
import { FaFileAlt, FaDice, FaBullseye } from "react-icons/fa"; // Using react-icons for example

const cards = [
  {
    icon: <FaFileAlt className="text-white w-6 h-6" />,
    title: "Credibility",
    description:
      "A properly structured and well-sourced Wikipedia presence enhances trust and public perception.",
  },
  {
    icon: <FaDice className="text-white w-6 h-6" />,
    title: "Stability",
    description:
      "We build pages designed to withstand scrutiny, community review, and policy checks.",
  },
  {
    icon: <FaBullseye className="text-white w-6 h-6" />,
    title: "Compliance",
    description:
      "Every draft follows neutrality, citation standards, and formatting guidelines.",
  },
];

const marginClasses = ["md:mt-0", "md:mt-8", "md:mt-16"];

const HomeServices = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="global-container flex flex-col gap-12">
        {/* Section Title */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            WHAT YOU’LL ACHIEVE
          </h2>
          <p className="text-gray-600 max-w-xl">
            What You’ll Achieve With Our Services.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative ${marginClasses[index]}`}
            >
              <div className="bg-[#7c5a59] p-4 w-12 h-12 flex items-center justify-center rounded shadow mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <span className="text-[#7c5a59] font-medium cursor-pointer flex items-center">
                Read more <ChevronRight size={16} className="ml-1" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
