import React from "react";
import {
  Search,
  BookOpen,
  PenTool,
  Settings,
  Send,
  Eye,
} from "lucide-react";

export default function SectionTwo() {
  const features = [
    {
      icon: Search,
      title: "Notability Review",
      description:
        "We take the time to evaluate whether the subject meets Wikipedia’s notability guidelines before anything is written. These rules require coverage in independent and reliable sources. We examine things like media mentions, interviews, journal publications, and other credible references. If enough evidence exists, we move forward with the article. If not, we provide honest feedback about what may still be needed.",
    },
    {
      icon: BookOpen,
      title: "Source Research",
      description:
        "Our research team gathers independent references that verify the information being included. These may come from established news outlets, magazines, books, academic journals, and other reputable publications. The goal is that a reliable citation must support every statement.",
    },
    {
      icon: PenTool,
      title: "Article Writing",
      description:
        "Once research is complete, the drafting stage begins. This is where our professional Wikipedia page creation really matters. Our writers focus on clarity and present facts without unnecessary commentary. Typical sections may include background information, career milestones, key achievements, and recognized contributions. Everything is written with a focus on verifiable facts.",
    },
    {
      icon: Settings,
      title: "Sandbox Preparation",
      description:
        "The page is usually drafted within Wikipedia’s sandbox environment before being submitted publicly. This allows the article to be reviewed and refined privately before being evaluated by editors. We carefully check formatting, citations, internal links, and structure during this stage.",
    },
    {
      icon: Send,
      title: "Articles for Creation Submission",
      description:
        "Editors within the Wikipedia community review the draft and determine whether it meets publishing standards. If adjustments are requested, we respond accordingly and refine the content where necessary. The objective is not speed but stability.",
    },
    {
      icon: Eye,
      title: "Post-Publication Monitoring",
      description:
        "Our team can assist with verifying updates, correcting inaccurate edits, and maintaining proper citations. This ensures the article remains accurate and compliant over time.",
    },
  ];

  return (
    <section className="py-16 bg-[#f5ede6]">
      <div className="global-container">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-widest mb-2 uppercase">
            What we offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Approach to Wikipedia Page Creation
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="border-2 border-[#8b6b5a86] rounded-2xl p-6 hover:shadow-lg transition hover:bg-[#8b6b5a1a]"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-[#8b6b5a]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
