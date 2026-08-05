import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaFileAlt, FaDice, FaBullseye } from "react-icons/fa"; // Using react-icons for example

const cards = [
  {
    icon: <FaFileAlt className="text-white w-6 h-6" />,
    title: "Credible Presence",
    description:
      "A Wikipedia page builds trust when it is written the right way. Our Wikipedia writing service focuses on facts, not marketing language.",
  },
  {
    icon: <FaDice className="text-white w-6 h-6" />,
    title: "Stronger Approval Chances",
    description:
      "We check notability before writing. We use reliable sources. We format citations properly. You reduce avoidable mistakes when you hire Wikipedia writer from us.",
  },
  {
    icon: <FaBullseye className="text-white w-6 h-6" />,
    title: "Long-Term Stability",
    description:
      "Wikipedia pages can be edited or challenged. Our Wikipedia writers for hire structure content carefully to meet community standards.",
  },
];

const marginClasses = ["md:mt-0", "md:mt-8", "md:mt-16"];

const HomeServices = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="global-container flex flex-col gap-12">
        {/* Section Title */}
        <div className="text-center">
          <p className="text-gray-600 mb-4 uppercase tracking-widest text-sm">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            What You Will Accomplish
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl transition-all hover:shadow-xl shadow-lg border border-gray-100 relative ${marginClasses[index]}`}
            >
              <div className="bg-[#7c5a59] p-4 w-12 h-12 flex items-center justify-center rounded shadow mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              {/* <Link
                href="/contact-us"
                className="text-[#7c5a59] hover:text-black font-medium cursor-pointer flex items-center"
              >
                Read more <ChevronRight size={16} className="ml-1" />
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
