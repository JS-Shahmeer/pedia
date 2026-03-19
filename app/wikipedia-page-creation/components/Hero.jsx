import React from "react";
import { PlayCircle } from "lucide-react";

import AwardsGroupImg from "@/src/images/awards-group.png";
import BgImage from "@/src/images/banner-bg.webp";
import LeafImg from "@/src/images/leaf.webp";
import Image from "next/image";
import Img1 from "@/src/images/additions/5.webp";
import QuoteButton from "@/src/components/QuoteButton";

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
          <div className="w-full md:w-6/12 mb-10 md:mb-0">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">
                Professional Wikipedia Page Creation Service USA
              </h1>

              <p className="text-gray-500 mb-8 text-lg">
                Our wikipedia page creation service USA is designed for
                individuals and organizations that want to approach the platform
                the right way. We focus on the research and writing style that
                Wikipedia expects instead of guessing what might work.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <QuoteButton variant="default">Get your own Wikipedia Page</QuoteButton>
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
          <div className="w-full md:w-6/12 md:ml-auto text-center mt-10 md:mt-0">
            <Image
              src={Img1}
              alt="Lady Image"
              className="mx-auto w-[300px] md:w-[700px] h-auto"
            />
          </div>
        </div>
      </div>
      {/* <Image
        src={LeafImg}
        alt="Leaf"
        className="absolute -bottom-10 right-10 w-[50%] z-20"
      /> */}
    </section>
  );
}
