"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "@/src/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
          text: "Thank you for subscribing to our newsletter. Stay tuned for updates!",
          confirmButtonColor: "#b67878",
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
        confirmButtonColor: "#b67878",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#f6ede6] pt-12 pb-6 text-gray-800">
      <div className="global-container">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Logo & About */}
          <div>
            <Link href="/" className="logo flex items-center shrink-0">
              <Image
                src={Logo}
                alt="Write on Pedia"
                className="h-16 w-auto min-w-40 object-contain object-left"
              />
            </Link>
            <p className="leading-relaxed text-gray-700 mt-3">
              Write on Pedia is your trusted partner for professional Wikipedia
              services. We specialize in creating, editing, publishing, and
              consulting on Wikipedia articles to enhance your online presence
              and credibility.
            </p>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/wikipedia-page-creation"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Wikipedia Page Creation Services
                </Link>
              </li>
              <li>
                <Link
                  href="/wikipedia-editing"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Wikipedia Editing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/wikipedia-publishing"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Wikipedia Publishing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/wikipedia-consultant"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Wikipedia Consultant
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <div className="space-y-4 text-gray-700">
              <Link
                href="https://maps.app.goo.gl/g8PqVjZuMWopCP376"
                target="_blank"
                className="flex items-start gap-3 group"
              >
                <FaMapMarkerAlt className="mt-1 text-[#b67878] group-hover:text-gray-800" />
                <p className="group-hover:underline">
                  3800 N Lamar Blvd Suite 200, Austin, TX 78756
                </p>
              </Link>
              <Link
                href="mailto:info@writeonpedia.com"
                className="flex items-center gap-3 group"
              >
                <FaEnvelope className="text-[#b67878] group-hover:text-gray-800" />
                <p className="group-hover:underline">info@writeonpedia.com</p>
              </Link>
              <Link
                href="tel:+15127680328"
                className="flex items-center gap-3 group"
              >
                <FaPhoneAlt className="text-[#b67878] group-hover:text-gray-800" />
                <p className="group-hover:underline">(512) 768-0328</p>
              </Link>
            </div>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Our Newsletter</h3>
            <p className="mb-5 text-gray-700">
              Subscribe to stay updated with the latest Wikipedia trends,
              writing tips, and industry insights.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-4 bg-white outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#b67878] hover:bg-[#a56565] text-white py-4 font-medium transition disabled:opacity-50"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-700 gap-3">
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
          </div>
          <p className="text-sm">© All Rights Reserved by Write On Pedia 2026.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
