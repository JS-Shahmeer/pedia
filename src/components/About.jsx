import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import Img1 from "@/src/images/additions/2.webp";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="global-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest mb-2">ABOUT US</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            About Write on Pedia
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE WITH BACK LAYER */}
          <div className="relative w-full max-w-xl mx-auto lg:mx-0">
            {/* Background offset layer */}
            <div className="absolute -left-6 -top-6 w-full h-full bg-[#b77b7b] rounded-xl"></div>

            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={Img1}
                alt="About"
                className="w-full h-full max-h-[450px] object-cover"
              />

              {/* Play button overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                  ▶
                </div>
              </div> */}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* <h3 className="text-3xl font-semibold text-[#0f172a] mb-6">
              Michale John
            </h3> */}

            <p className="text-gray-600 leading-relaxed mb-6 text-lg font-medium">
              Write on Pedia is a trusted Wikipedia writing service USA working
              with clients across the country. When you hire Wikipedia writers,
              you need people who understand notability and independent media
              coverage with a neutral tone. Our team studies your coverage
              first. If you qualify, we move forward. If you don’t, we will tell
              you honestly.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-8">
              {[
                "Wikipedia page creation",
                "Page editing & restructuring",
                "Deletion defense",
                "Ongoing monitoring & maintenance",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#b77b7b] text-white">
                    <Check size={14} />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            {/* <div className="flex gap-3">
              {[
                { icon: FaFacebookF, link: "https://facebook.com" },
                { icon: FaXTwitter, link: "https://x.com" },
                { icon: FaLinkedinIn, link: "https://linkedin.com" },
                { icon: FaYoutube, link: "https://youtube.com" },
                { icon: FaWhatsapp, link: "https://wa.me/1234567890" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center bg-[#b77b7b] text-white rounded shadow-md hover:scale-105 transition"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
