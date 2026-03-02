import React from "react";
import Img1 from "@/src/images/writing-1.webp";
import Img2 from "@/src/images/writing-2.webp";
import Image from "next/image";
import { Star } from "lucide-react";
import { BsStarFill } from "react-icons/bs";

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
              Expert Wikipedia Editors Who Navigate the Rules with Precision
            </h2>
            <p className="text-gray-700 mb-4">
              Our team of expert Wikipedia editors includes former editors of
              Wikipedia who deeply understand the platform's complex system.
              These experienced Wiki editors work strictly within Wikipedia's
              guidelines, mastering neutral tone, verified source requirements,
              and proper submission processes through Articles for Creation
              (AfC) and Sandbox protocols.
            </p>
            <p className="text-gray-700 mb-6">
              With extensive experience across biographies, corporate profiles,
              and creative professional pages, our Wikipedia editors ensure each
              page meets the strict community standards while authentically
              representing your work. We have successfully worked through
              thousands of submissions, making us the trusted choice for clients
              who value compliance and results over empty promises.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-[#f4e7dc] text-black px-6 py-3 rounded-lg hover:bg-[#e8d8c7] transition"
              >
                Hire A Wikipedia Editor
              </a>
              <a
                href="#"
                className="bg-[#8b6b5a] text-white px-6 py-3 rounded-lg hover:bg-[#7a5a4a] transition"
              >
                Live Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
