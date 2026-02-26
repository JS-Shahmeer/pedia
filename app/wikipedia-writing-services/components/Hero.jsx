import React from "react";
import { PlayCircle } from "lucide-react";

import AwardsGroupImg from "@/src/images/awards-group.png";
import BgImage from "@/src/images/banner-bg.webp";
import LeafImg from "@/src/images/leaf.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pb-16 md:pb-24 pt-32 md:pt-40 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage.src})` }}
    >
      <div className="circle x1 absolute" />
      <div className="circle x2 absolute" />
      <div className="circle x3 absolute" />
      <div className="circle x4 absolute" />
      <div className="circle x5 absolute" />

      <div className="global-container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-7/12 lg:w-6/12 mb-10 md:mb-0">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
                Hire Expert Wikipedia Writers For your Page
              </h1>

              <p className="text-gray-500 mb-8 text-lg">
                Our certified Wikipedia writers write neutral, compliant
                Wikipedia pages that meet notability standards and stand the
                test of time. We handle everything from research to publication.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href=""
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition bg-[#8b6b5a]"
                >
                  Get your own Wikipedia Page
                </a>

                {/* <a
                  href=""
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <PlayCircle className="w-5 h-5" />
                  About Book
                </a> */}
              </div>
              <Image
                src={AwardsGroupImg}
                alt="Awards Group"
                className="mt-8 w-full max-w-sm"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-5/12 lg:w-5/12 lg:ml-auto text-center mt-10 md:mt-0">
            <img
              src="https://fixolab.github.io/wonted/one-page-version/assets/images/book2.png"
              alt="Book"
              className="mx-auto w-[300px] md:w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
      <Image
        src={LeafImg}
        alt="Leaf"
        className="absolute -bottom-10 right-10 w-[50%] opacity-70 z-[1]"
      />
    </section>
  );
}
