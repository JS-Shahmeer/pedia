"use client";

import React from "react";
import QuoteModal from "./QuoteModal";
import { useQuoteModal } from "@/src/hooks/useQuoteModal";

const QuoteButton = ({ variant = "default", children = "Get Free Quote" }) => {
  const { isOpen, openModal, closeModal } = useQuoteModal();

  return (
    <>
      <button
        onClick={openModal}
        className={`
          transition-all cursor-pointer duration-300
          ${
            variant === "default"
              ? "bg-[#b67878] hover:bg-[#a56565] text-white px-6 py-3 rounded-lg font-medium"
              : variant === "outline"
              ? "border-2 border-[#b67878] text-[#b67878] hover:bg-[#b67878] hover:text-white px-6 py-3 rounded-lg font-medium"
              : "text-[#b67878] hover:text-[#a56565] font-medium underline"
          }
        `}
      >
        {children}
      </button>
      <QuoteModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default QuoteButton;
