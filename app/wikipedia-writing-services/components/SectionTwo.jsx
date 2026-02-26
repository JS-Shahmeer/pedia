import React from "react";
import {
  Rocket,
  Building2,
  Image,
  Users,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function SectionTwo() {
  const features = [
    {
      icon: Rocket,
      title: "Expand Your Global Visibility",
      description:
        "A professionally written Wikipedia page positions your story to millions of global readers daily. Our Wikipedia writing service creates an authoritative presence that significantly expands your reach and recognition across Wikipedia's vast international audience.",
    },
    {
      icon: Building2,
      title: "Enhance Search Presence",
      description:
        "Leverage Wikipedia's authoritative domain status to enhance your online presence. Our professional Wiki writing creates content that search engines trust and prioritize - helping your name or brand appear more prominently in Google's search results.",
    },
    {
      icon: Image,
      title: "Build Trust Through Credibility",
      description:
        "Gain instant authority with a verified and neutral Wikipedia presence. Our Wikipedia writing service produces fact-based content that enhances your reputation and encourages citations from credible media and industry sources.",
    },
    {
      icon: Users,
      title: "Verify Authentic Sources",
      description:
        "Our researchers meticulously confirm every citation using independent, reliable publications. We insist on extremely strict source validation standards the same expected of Wikipedia editors to ensure long-term page stability.",
    },
    {
      icon: FileText,
      title: "Document Your Achievements",
      description:
        "Highlight your professional journey through carefully curated neutral content. Our Wikipedia writers highlight significant accomplishments while keeping the objectivity that keeps your article compliant with Wikipedia standards.",
    },
    {
      icon: TrendingUp,
      title: "Attract New Opportunities",
      description:
        "Connect with broader audiences through strategic Wikipedia placement. Our Wikipedia page writing service creates profiles that resonate with your targeted demographics while following all community guidelines.",
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
            Build Credibility with Wikipedia
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
