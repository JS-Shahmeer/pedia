// SubscribeCTA.jsx
"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const SubscribeCTA = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const response = await fetch("http://localhost:5020/api/newsletter", {
      const response = await fetch("https://api.writeonpedia.com/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Subscribed Successfully!",
          text: "Thank you for subscribing. We'll send you a free notability evaluation soon!",
          confirmButtonColor: "#8b6b5a",
          confirmButtonText: "OK",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#8b6b5a",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-20 flex justify-start items-center"
      style={{
        backgroundImage: `url('https://fixolab.github.io/wonted/one-page-version/assets/images/ctav5.jpg')`,
      }}
    >
      <div className="global-container">
        <div className="bg-[#f9f2ef] p-10 rounded-xl max-w-lg w-full shadow-lg">
          <p className="text-sm text-[#8b6b5a] uppercase mb-2">Subscribe Now</p>
          <h2 className="text-3xl font-bold text-[#1f3342] mb-6">
            Get a Free Notability Evaluation
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b5a]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#8b6b5a] text-white px-6 py-3 rounded-md hover:bg-[#7a5f51] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-3">
            * Enter your email to receive a quick assessment of your eligibility and sourcing strength.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeCTA;
