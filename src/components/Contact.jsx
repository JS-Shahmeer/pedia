"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-white py-16">
      <div className="global-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest mb-2">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Write me anything
          </h2>
          <div className="section-divider divider-traingle relative"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT — FORM */}
          <div className="lg:col-span-2 bg-[#f6ede6] p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-white outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-white outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-3 bg-white outline-none"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 bg-white outline-none resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button
                type="submit"
                className="bg-[#b67878] hover:bg-[#a56565] text-white px-10 py-4 font-medium transition"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* RIGHT — INFO BOX */}
          <div className="bg-[#f6ede6] p-6 md:p-8">
            <div className="space-y-6 text-gray-800">
              <div>
                <h4 className="font-bold tracking-wide mb-2">ADDRESS:</h4>
                <p>16, Lankaway</p>
                <p>Florida, USA 99544</p>
              </div>

              <div>
                <h4 className="font-bold tracking-wide mb-2">PHONE:</h4>
                <p className="text-[#b67878]">112 444 7900</p>
              </div>

              <div>
                <h4 className="font-bold tracking-wide mb-2">EMAIL :</h4>
                <p className="text-[#b67878]">support@support.com</p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  Connect book socials
                </h4>

                <div className="flex gap-4">
                  <a className="bg-[#b67878] p-3 text-white hover:scale-105 transition">
                    <FaFacebookF />
                  </a>
                  <a className="bg-[#b67878] p-3 text-white hover:scale-105 transition">
                    <FaXTwitter />
                  </a>
                  <a className="bg-[#b67878] p-3 text-white hover:scale-105 transition">
                    <FaLinkedinIn />
                  </a>
                  <a className="bg-[#b67878] p-3 text-white hover:scale-105 transition">
                    <FaYoutube />
                  </a>
                  <a className="bg-[#b67878] p-3 text-white hover:scale-105 transition">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
