"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
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
    service: "wikipedia-page-creation",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const response = await fetch("http://localhost:5020/api/contact", {
      const response = await fetch("https://api.writeonpedia.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully!",
          text: "Thank you for contacting us. We'll get back to you soon.",
          confirmButtonColor: "#b67878",
          confirmButtonText: "OK",
        });
        setForm({ name: "", email: "", subject: "", service: "wikipedia-page-creation", message: "" });
      } else {
        throw new Error("Failed to send message");
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
    <section className="bg-white py-16">
      <div className="global-container">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest mb-2">CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
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

              <select
                name="service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                required
                className="w-full p-3 bg-white outline-none border border-gray-300 rounded"
              >
                <option value="wikipedia-page-creation">Wikipedia Writing</option>
                <option value="wikipedia-editing">Wikipedia Editing</option>
                <option value="wikipedia-publishing">Wikipedia Publishing</option>
                <option value="wikipedia-consultant">Wikipedia Consultant</option>
              </select>

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
                disabled={loading}
                className="bg-[#b67878] cursor-pointer hover:bg-[#a56565] text-white px-10 py-4 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Now"}
              </button>
            </form>
          </div>

          {/* RIGHT — INFO BOX */}
          <div className="bg-[#f6ede6] p-6 md:p-8">
            <div className="space-y-6 text-gray-800">
              <a
                className="block group"
                href="https://maps.app.goo.gl/g8PqVjZuMWopCP376"
                target="_blank"
              >
                <h4 className="font-bold tracking-wide mb-2">ADDRESS:</h4>
                <p className="text-[#b67878] group-hover:text-gray-800">
                  3800 N Lamar Blvd Suite 200, Austin, TX 78756
                </p>
              </a>

              <a className="block group" href="tel:+15127680328">
                <h4 className="font-bold tracking-wide mb-2">PHONE:</h4>
                <p className="text-[#b67878] group-hover:text-gray-800">
                  (512) 768-0328
                </p>
              </a>

              <a className="block group" href="mailto:info@writeonpedia.com">
                <h4 className="font-bold tracking-wide mb-2">EMAIL :</h4>
                <p className="text-[#b67878] group-hover:text-gray-800">
                  info@writeonpedia.com
                </p>
              </a>

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
