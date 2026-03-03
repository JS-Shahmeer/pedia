// Chapters.jsx
import React from "react";

const chapters = [
  {
    id: 1,
    title: "Wikipedia Page Creation",
    description:
      "We research, verify independent sources, draft neutral content, structure citations, and manage submission.",
  },
  {
    id: 2,
    title: "Wikipedia Editing & Improvements",
    description:
      "We improve weak sourcing, remove biased language, fix formatting issues, and strengthen compliance.",
  },
  {
    id: 3,
    title: "Deletion Defense",
    description:
      "If your page is nominated for deletion or rejected, we assess policy gaps and respond strategically.",
  },
  {
    id: 4,
    title: "Notability Assessment",
    description:
      "Before drafting anything, we evaluate eligibility based on reliable third-party media coverage.",
  },
  {
    id: 5,
    title: "Content Dispute Resolution",
    description:
      "We assist with talk page discussions and policy clarification.",
  },
  {
    id: 6,
    title: "Monitoring & Maintenance",
    description: "After publication, we monitor edits and maintain compliance.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Core Wikipedia Services
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* <p className="text-sm text-gray-500 mb-2">
                Chapter {chapter.id.toString().padStart(2, "0")}
              </p> */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {chapter.title}
              </h3>
              <p className="text-gray-600 text-sm">{chapter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
