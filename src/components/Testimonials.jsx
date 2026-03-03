"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Brightlight books",
    role: "CEO, Technology Company",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200",
    text: "They strengthened our sourcing and handled the deletion discussion professionally.",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Publishing House",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    text: "Outstanding service! Their expertise helped us establish our Wikipedia presence seamlessly.",
  },
  {
    name: "David Chen",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    text: "Fantastic support throughout the entire process. Highly recommend to anyone seeking guidance.",
  },
  {
    name: "Michael Thompson",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    text: "The team's professionalism and attention to detail made all the difference.",
  },

];

const Testimonials = () => {
  return (
    <section className="bg-[#fdf6f2] py-16">
      <div className="global-container">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 tracking-[4px] uppercase mb-3">
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say About Us
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-18"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md px-8 py-10 text-center h-full flex flex-col justify-between transition hover:shadow-xl">
                
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-[#d17c7c] font-medium mb-5">{item.role}</p>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Style Override */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #e5c9c3;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #c98c8c;
          width: 22px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
