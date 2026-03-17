import React from "react";
import Img1 from "@/src/images/writing-1.webp";
import Img2 from "@/src/images/writing-2.webp";
import Image from "next/image";
import { Star } from "lucide-react";
import { BsStarFill } from "react-icons/bs";
import QuoteButton from "@/src/components/QuoteButton";

export default function SectionOne() {
  return (
    <section className="md:py-24 py-16 bg-white">
      <div className="global-container">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* left image stack */}
          <div className="relative md:w-1/2 w-full">
            {/* large bottom-left image */}
            <Image
              src={Img1}
              alt="Editor reviewing"
              className="rounded-xl shadow-lg w-full md:w-[400px] md:ml-auto"
            />
            {/* small top-right image */}
            <Image
              src={Img2}
              alt="Person typing"
              className="rounded-xl shadow-lg w-3/5 md:w-[370px] "
            />
            <div className="absolute top-24 left-0 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-sm text-gray-500">successful projects</p>
            </div>
            <div className="absolute bottom-24 right-0 bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex items-center gap-1">
                <BsStarFill className="w-5 h-5 text-yellow-400" />
                <BsStarFill className="w-5 h-5 text-yellow-400" />
                <BsStarFill className="w-5 h-5 text-yellow-400" />
                <BsStarFill className="w-5 h-5 text-yellow-400" />
                <BsStarFill className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="ml-2 text-sm">4.9 rating</span>
            </div>
          </div>

          {/* right text */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experienced Wikipedia Editors Who Understand the Platform
            </h2>
            <p className="text-gray-700 mb-4">
              Our team includes experienced Wikipedia editor specialists who
              understand these expectations well. They study every project
              carefully before they start writing or editing. Our editors check
              existing media coverage and organize the information in a format
              that fits the encyclopedia’s style.
            </p>
            <p className="text-gray-700 mb-6">
              Clients often ask about professional Wikipedia page creation
              because they want their achievements presented correctly. That
              requires structure and strong references. Our editors work through
              each section patiently so the final draft reads clearly and
              naturally. Every project follows reliable sources and strict
              compliance with Wikipedia policies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-[#f4e7dc] text-black px-6 py-3 rounded-lg hover:bg-[#e8d8c7] transition"
              >
                Hire A Wikipedia Editor
              </a>
              <QuoteButton variant="default"> Let’s Get Started</QuoteButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
