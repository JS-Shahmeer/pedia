import React from "react";
import {
  Globe,
  Shield,
  CheckCircle,
  BookOpen,
  Send,
  Eye,
} from "lucide-react";

export default function SectionTwo() {
  const features = [
    {
      icon: Globe,
      title: "Reach a Wider Audience",
      description:
        "A Wikipedia page lets people around the world learn about you or your organization. Our service makes sure that your page communicates your story clearly and factually without any biased statements.",
    },
    {
      icon: Shield,
      title: "Gain Credibility",
      description:
        "Wikipedia is trusted because it follows strict rules. A properly published article adds authority and trust to your profile or brand.",
    },
    {
      icon: CheckCircle,
      title: "Secure Accurate Representation",
      description:
        "Many pages contain outdated or incorrect information. Our Wikipedia publishing service USA makes sure your article presents verified, up-to-date facts.",
    },
    {
      icon: BookOpen,
      title: "Ensure Proper Citation",
      description:
        "Every claim must have a reliable source. Our editors research and verify references to meet Wikipedia’s standards.",
    },
    {
      icon: Send,
      title: "Simplify the Submission Process",
      description:
        "Submitting a page yourself can be confusing and time-consuming. Our team manages everything from sandbox drafting to final submission. We make the process smooth and stress-free.",
    },
    {
      icon: Eye,
      title: "Support Long-Term Stability",
      description:
        "Our editors monitor your page after publishing. They quickly respond to edits or issues to keep your content accurate and compliant over time.",
    },
  ];

  return (
    <section className="py-16 bg-[#f5ede6]">
      <div className="global-container">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-widest mb-2 uppercase">
            Why choose us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Wikipedia Our Publishing Service USA Helps You Achieve
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
