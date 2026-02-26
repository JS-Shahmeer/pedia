// Chapters.jsx
import React from "react";

const chapters = [
  {
    id: 1,
    title: "Getting started",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
  {
    id: 2,
    title: "The language of gossip box",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
  {
    id: 3,
    title: "The rise of trend Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
  {
    id: 4,
    title: "The rise of trend Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
  {
    id: 5,
    title: "The rise of trend Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
  {
    id: 6,
    title: "The rise of trend Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
  {
    id: 7,
    title: "Literary Jatra",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
  {
    id: 8,
    title: "Non-technical literature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
  {
    id: 9,
    title: "Where is the author?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quod sit amet aspernatur minima deleniti.",
  },
];

const Chapters = () => {
  return (
    <section className="bg-[#f5ede6] py-20 px-5 md:px-10">
      <div className="global-container">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-widest mb-2">CHAPTERS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Chapters we've covered
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-sm text-gray-500 mb-2">
                Chapter {chapter.id.toString().padStart(2, "0")}
              </p>
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
