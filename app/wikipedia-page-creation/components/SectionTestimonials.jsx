"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";

export default function SectionTestimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 4.5,
      text: "I needed someone to write a Wikipedia page that truly reflected my research career. They delivered a compliant article. Wiki Creator writer assigned to my project wrote with such clarity and neutrality that the...",
      name: "Emily Carter",
      role: "Expert & Research Scholar",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      rating: 4,
      text: "When our company page was wrongly flagged for deletion, the team fully restored it and strengthened its references. After months of failed attempts, our page was finally published and has now become a trusted resource in our...",
      name: "Jonathan Patel",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      rating: 3,
      text: "They helped create a comprehensive Wikipedia presence that authentically represents our organization's mission. Their editor also guided us on how to properly structure and write content that meets all compliance standards.",
      name: "Laura Mendes",
      role: "Communications Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      rating: 4.5,
      text: "During a content dispute, their experts resolved what seemed like an impossible situation with complete professionalism. They navigated Wikipedia's most complex policies with precision, securing our page's future.",
      name: "Michael Grant",
      role: "Author & Historian",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      id: 5,
      rating: 3,
      text: "The publishing strategy they created made all the difference. They thought of aspects we never would have considered on our own. They didn't just create a page, they helped us tell our organization's story in a way that truly...",
      name: "Karen Owens",
      role: "Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      id: 6,
      rating: 4.5,
      text: "It's such a relief knowing our page is protected and maintained properly. They've protected our reputation and could have damaged our business had we tried handling it ourselves.",
      name: "Alicia Monroe",
      role: "Artist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < fullStars
                ? "fill-yellow-400 text-yellow-400"
                : i === fullStars && hasHalfStar
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 font-semibold ml-2">
          {rating}/5
        </span>
      </div>
    );
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="global-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 tracking-widest mb-2 uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Why Our Clients Trust and Love Us
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                {/* Star Rating */}
                <div className="mb-4">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <p className="text-sm md:text-base text-gray-600 mb-6 flex-grow line-clamp-4">
                  {testimonial.text}
                </p>

                {/* Divider */}
                <div className="">
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-3 border-yellow-400"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
