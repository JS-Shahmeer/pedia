"use client";
import QuoteButton from "@/src/components/QuoteButton";

export default function ContactBanner() {
  return (
    <section className="bg-[#f6ede6] pb-20 pt-40">
      <div className="global-container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="mt-4 text-base max-w-md mx-auto text-gray-600 text-center">
          Have questions or want to discuss your Wikipedia project? Our team is
          here to help! Reach out to us for a free consultation and let’s bring
          your Wikipedia vision to life.
        </p>
        <div className="flex justify-center mt-6">
          <QuoteButton variant="default">Send us a message</QuoteButton>
        </div>
      </div>
    </section>
  );
}
