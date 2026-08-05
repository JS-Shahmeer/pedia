import React from "react";
import { PlayCircle } from "lucide-react";
import QuoteButton from "@/src/components/QuoteButton";
import Img1 from "@/src/images/additions/10.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#f5ebe6] pb-0 pt-32 md:pt-28"
    >
      <div className="circle x1 absolute" />
      <div className="circle x2 absolute" />
      <div className="circle x3 absolute" />
      <div className="circle x4 absolute" />
      <div className="circle x5 absolute" />

      <div className="global-container">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-6/12 mb-10 md:mb-0">
            <div className="relative">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 capitalize">
                Professional <br className="md:block hidden" />
                <span className="text-[#a96969]">Wikipedia writers</span>{" "}
                <br className="md:block hidden" /> You Can Trust
              </h1>

              <p className="text-gray-500 mb-8 text-lg">
                Looking to build a real presence on Wikipedia? Our experienced
                Wikipedia writers help you create and publish pages that follow
                all rules and policies.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <QuoteButton variant="default">
                  Get a Free Notability Review
                </QuoteButton>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-6/12 text-center mt-10 md:mt-0">
            <Image
              src={Img1}
              alt="Lady Image"
              className="mx-auto w-[300px] md:w-[700px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
