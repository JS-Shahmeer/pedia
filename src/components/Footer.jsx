import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f6ede6] pt-12 pb-6 text-gray-800">
      <div className="global-container">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Logo & About */}
          <div>
            <a href="/" className="logo flex items-center shrink-0">
              <img
                src="https://fixolab.github.io/wonted/one-page-version/assets/images/wonted-logo.png"
                alt="Write on Pedia"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="leading-relaxed text-gray-700 mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              minima esse quos voluptatem quo consequuntur commodi eius sed.
              Alias, quisquam?
            </p>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/wikipedia-writing-services"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Wikipedia Writing Services
                </a>
              </li>
              <li>
                <a
                  href="/wikipedia-editing-services"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Wikipedia Editing Services
                </a>
              </li>
              <li>
                <a
                  href="/wikipedia-publishing-services"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Wikipedia Publishing Services
                </a>
              </li>
              <li>
                <a
                  href="/wikipedia-consultant"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Wikipedia Consultant
                </a>
              </li>
              {/* <li>
                <a
                  href="/about-us"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 hover:after:w-full inline-block"
                >
                  Contact Us
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#b67878]" />
                <p>San Francisco CA 94107,US</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#b67878]" />
                <p>wonted@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#b67878]" />
                <p>+123 345123 556</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a className="bg-[#b67878] text-white p-3 hover:scale-105 transition">
                <FaFacebookF />
              </a>
              <a className="bg-[#b67878] text-white p-3 hover:scale-105 transition">
                <FaXTwitter />
              </a>
              <a className="bg-[#b67878] text-white p-3 hover:scale-105 transition">
                <FaInstagram />
              </a>
              <a className="bg-[#b67878] text-white p-3 hover:scale-105 transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Our Newsletter</h3>
            <p className="mb-5 text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, omnis?
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-4 bg-white outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#b67878] hover:bg-[#a56565] text-white py-4 font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-700">
          <p>© 2026 All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
