import React from "react";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen bg-[#f5ebe6] pb-16 md:pb-24 pt-32 md:pt-40"
    >
      <div className="circle x1 absolute" />
      <div className="circle x2 absolute" />
      <div className="circle x3 absolute" />
      <div className="circle x4 absolute" />
      <div className="circle x5 absolute" />

      <div className="global-container">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Content */}
          <div className="w-full md:w-7/12 lg:w-6/12 mb-10 md:mb-0">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
                Read more and make success the result of perfection.
              </h1>

              <p className="text-gray-500 mb-8 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                harum quibusdam, assumenda quia explicabo.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href=""
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition bg-[#8b6b5a]"
                >
                  Buy now
                </a>

                
              </div>
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
    </section>
  );
}
