"use client"

import React, { useEffect, useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState({})

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function toggleSubmenu(key) {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <header
      className={`header left-0 right-0 z-50 ${
        scrolled ? "fixed top-0 bg-white navbar_fixed" : "absolute top-4"
      }`}
    >
      <div className="w-[85vw] mx-auto px-5 bg-white grid grid-cols-2 md:grid-cols-3 items-center py-6">
        
        {/* Logo */}
        <a href="/" className="logo flex items-center shrink-0">
          <img
            src="https://fixolab.github.io/wonted/one-page-version/assets/images/wonted-logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center">
          <ul className="flex items-center space-x-6">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/about-us" className="hover:text-blue-600">About</a></li>

            <li className="relative group">
              <button type="button" className="hover:text-blue-600 flex items-center" aria-haspopup="true" aria-expanded={!!openSubmenus.services} onClick={() => toggleSubmenu('services')}>
                Services
                <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.585l3.71-3.397a.75.75 0 111.02 1.1l-4.18 3.827a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z"/></svg>
              </button>

              <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 hidden group-hover:block group-focus:block bg-white border rounded shadow-lg w-64">
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" href="/services/writing">Wikipedia Writing Services</a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" href="/services/editing">Wikipedia Editing Services</a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" href="/services/publishing">Wikipedia Publishing Services</a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" href="/services/consultant">Wikipedia Consultant</a>
              </div>
            </li>

            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-3 justify-end">
          <a href="#" className="bg-[#8b6b5a] text-white px-4 py-2 rounded">
            Get Started
          </a>
          <a href="tel:7703411653" className="text-sm text-gray-700">
            770-3411653
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border rounded shadow-md p-4">
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-700">Home</a></li>
            <li><a href="/about-us" className="text-gray-700">About</a></li>

            <li>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Services</span>
                <button onClick={() => toggleSubmenu('services')} className="p-1">▾</button>
              </div>
                {openSubmenus['services'] && (
                <ul className="mt-2 pl-4 space-y-1">
                  <li><a href="/services/writing" className="text-gray-600">Wikipedia Writing Services</a></li>
                  <li><a href="/services/editing" className="text-gray-600">Wikipedia Editing Services</a></li>
                  <li><a href="/services/publishing" className="text-gray-600">Wikipedia Publishing Services</a></li>
                  <li><a href="/services/consultant" className="text-gray-600">Wikipedia Consultant</a></li>
                </ul>
              )}
            </li>

            <li><a href="/contact" className="text-gray-700">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}