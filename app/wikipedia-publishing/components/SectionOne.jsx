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
              alt="Publisher reviewing"
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
              Expert Wikipedia Publishing Service USA - Editors Who Handle The
              Submission
            </h2>
            <p className="text-gray-700 mb-4">
              Publishing a Wikipedia page is more than just clicking submit.
              Wikipedia has strict rules, and even a well-written article can
              get rejected if it does not follow guidelines. Our Wikipedia
              publishing service helps you navigate the entire process so your
              page gets approved and remains stable over time.
            </p>
            <p className="text-gray-700 mb-6">
              Our team includes professional Wikipedia writers who understand
              these requirements deeply. They carefully check all sources,
              structure the content clearly, and ensure it follows Wikipedia
              formatting rules. Hire expert Wikipedia editor from us who will
              handle the publishing process step by step, whether you need a
              biography, corporate page, or professional profile. They focus on
              clarity and compliance so that your page passes Wikipedia’s review
              smoothly.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-[#f4e7dc] text-black px-6 py-3 rounded-lg hover:bg-[#e8d8c7] transition"
              >
                Hire A Wikipedia Publisher
              </a>
              <QuoteButton variant="default"> Let’s Get Started</QuoteButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
