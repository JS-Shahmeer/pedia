// Chapters.jsx
import React from "react";
import Link from "next/link";

const chapters = [
  {
    id: 1,
    title: "Wikipedia Page Creation Services",
    description:
      "Our Wikipedia Page Creation Services begin with detailed research. We study and confirm notability before drafting anything. We structure citations correctly and adhere to Wikipedia's formatting guidelines.",
    link: "/wikipedia-page-creation",
  },
  {
    id: 2,
    title: "Wikipedia Editing Services",
    description:
      "Our team reviews the content, strengthens references, removes biased language, and fixes structural issues. We focus on clarity so the page meets community expectations.",
    link: "/wikipedia-editing",
  },
  {
    id: 3,
    title: "Wikipedia Publishing Services",
    description:
      "Our Wikipedia Publishing Services guide you through the review process properly. We manage submissions and make necessary adjustments while maintaining neutrality.",
    link: "/wikipedia-publishing",
  },
  {
    id: 4,
    title: "Wikipedia Consultant",
    description:
      "We provide an honest assessment of your situation. We evaluate risks and explain whether it is the right time to proceed.",
    link: "/wikipedia-consultant",
  },
  {
    id: 5,
    title: "Notability & Media Review",
    description:
      "We analyze whether your sources meet Wikipedia’s reliability standards and identify gaps that may affect approval.",
    link: "", // No dedicated page, placeholder
  },
  {
    id: 6,
    title: "Ongoing Monitoring & Page Maintenance",
    description: "Our monitoring and maintenance support helps track significant changes and review new edits for compliance with relevant regulations.",
    link: "", // No dedicated page, placeholder
  },
];

const Chapters = () => {
  return (
    <section className="bg-[#f5ede6] py-20 px-5 md:px-10">
      <div className="global-container">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-widest mb-2">
            OUR CORE SERVICES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our Core Wikipedia Services
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 block"
            >
              {/* <p className="text-sm text-gray-500 mb-2">
                Chapter {chapter.id.toString().padStart(2, "0")}
              </p> */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {chapter.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{chapter.description}</p>
              {chapter.link && chapter.link !== "" && (
                <Link
                  href={chapter.link}
                  className="text-[#b67878] hover:text-black underline text-sm font-medium transition-colors"
                >
                  Learn more
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
