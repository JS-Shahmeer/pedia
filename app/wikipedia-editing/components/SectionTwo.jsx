import React from "react";
import {
  Shield,
  Search,
  Briefcase,
  CheckCircle,
  List,
  Globe,
} from "lucide-react";

export default function SectionTwo() {
  const features = [
    {
      icon: Shield,
      title: "Build Public Credibility",
      description:
        "A well-structured Wikipedia page helps people understand your background quickly. Readers often check Wikipedia first when they research a person or organization. Our editing service presents verified information in a clear format so readers can trust what they see.",
    },
    {
      icon: Search,
      title: "Improve Online Visibility",
      description:
        "Search engines trust Wikipedia because of its authority and strict editorial standards. A properly written article often appears near the top of search results. Our editors structure the content carefully so your page stays clear and easy to read.",
    },
    {
      icon: Briefcase,
      title: "Strengthen Your Professional Profile",
      description:
        "Your Wikipedia page should reflect your work without sounding promotional. This balance matters. If the article sounds like advertising, editors usually reject it. Our team keeps the tone neutral while still presenting important milestones and achievements.",
    },
    {
      icon: CheckCircle,
      title: "Verify Every Source",
      description:
        "Wikipedia requires independent sources. Blogs, self-published content, and promotional materials usually do not qualify. Our editors research and verify reliable publications before adding them as citations.",
    },
    {
      icon: List,
      title: "Organize Your Story Clearly",
      description:
        "Many people have strong achievements but struggle to present them properly. A Wikipedia article must follow a structured format. Our editors organize your professional journey, so readers understand the timeline and significance of your work.",
    },
    {
      icon: Globe,
      title: "Reach a Global Audience",
      description:
        "Wikipedia attracts readers from every country. A properly written page allows your story to reach audiences far beyond your local market. Our Wikipedia editing service USA focuses on clarity and credibility so your profile remains useful to readers worldwide.",
    },
  ];

  return (
    <section className="py-16 bg-[#f5ede6]">
      <div className="global-container">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-widest mb-2 uppercase">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Professional Wikipedia Page Creation <br className="md:block hidden" /> Helps You Achieve
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
