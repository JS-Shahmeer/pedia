import React from "react";
import {
  Search,
  BookOpen,
  PenTool,
  Shield,
  Send,
  Eye,
} from "lucide-react";

export default function SectionTwo() {
  const features = [
    {
      icon: Search,
      title: "Notability Assessment",
      description:
        "We evaluate your eligibility for a Wikipedia page by reviewing media coverage, publications, and independent sources. Our consultants provide clear feedback on what qualifies and strategies to strengthen your profile.",
    },
    {
      icon: BookOpen,
      title: "Source Strategy",
      description:
        "Reliable sources are crucial for Wikipedia. We guide you in identifying and compiling trustworthy references from newspapers, journals, and academic publications to support your article.",
    },
    {
      icon: PenTool,
      title: "Content Planning",
      description:
        "Our experts help structure your Wikipedia article with neutral, factual content. We outline sections, ensure balance, and focus on presenting information objectively without bias.",
    },
    {
      icon: Shield,
      title: "Compliance Guidance",
      description:
        "Wikipedia has strict rules. We advise on policies, ethical standards, and best practices to avoid rejections and ensure your page meets community guidelines.",
    },
    {
      icon: Send,
      title: "Submission Strategy",
      description:
        "Navigating Wikipedia's submission process can be complex. Our consultants guide you through drafting, sandbox testing, and official channels for smooth approval.",
    },
    {
      icon: Eye,
      title: "Ongoing Advice",
      description: (
        <>
          <a href="/wikipedia-publishing" className="underline text-[#b67878] hover:text-black">After publication</a>, pages need maintenance. We provide ongoing consultation to{' '}
          <a href="/wikipedia-editing" className="underline text-[#b67878] hover:text-black">monitor edits</a>, update information, and address any challenges that arise.
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-[#f5ede6]">
      <div className="global-container">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-widest mb-2 uppercase">
            What we offer
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
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
