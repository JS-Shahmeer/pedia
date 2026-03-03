"use client"

import React, { useEffect, useState } from "react";
import QuoteButton from "@/src/components/QuoteButton";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState({})

  // shared navigation data
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    {
      label: "Services",
      submenu: [
        { label: "Wikipedia Writing Services", href: "/wikipedia-writing-services" },
        { label: "Wikipedia Editing Services", href: "/wikipedia-editing-services" },
        { label: "Wikipedia Publishing Services", href: "/wikipedia-publishing-services" },
        { label: "Wikipedia Consultant", href: "/wikipedia-consultant" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

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
      <div className="w-[85vw] mx-auto px-5 bg-white grid grid-cols-2 md:grid-cols-3 items-center md:py-4 py-3">
        
        {/* Logo */}
        <a href="/" className="logo flex items-center shrink-0">
          <img
            src="https://fixolab.github.io/wonted/one-page-version/assets/images/wonted-logo.png"
            alt="Write on Pedia"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center" aria-label="Main navigation">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.label} className={item.submenu ? "relative group" : "group"}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      className="text-gray-700 cursor-pointer hover:text-[#8b6b5a] flex items-center relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 group-hover:after:w-full"
                      aria-haspopup="true"
                      aria-expanded={!!openSubmenus.services}
                      onClick={() => toggleSubmenu('services')}
                      onKeyDown={(e) => { if (e.key === 'Escape') setOpenSubmenus({}); }}
                    >
                      {item.label}
                      <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.585l3.71-3.397a.75.75 0 111.02 1.1l-4.18 3.827a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z"/>
                      </svg>
                    </button>
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white border rounded shadow-lg w-64 z-20 ${
                        openSubmenus.services ? "block" : "hidden"
                      }`}
                    >
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          href={sub.href}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 group-hover:after:w-full block"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4 justify-end">
          
          <QuoteButton variant="default">Get Started</QuoteButton>
          <a
            href="tel:0000000000"
            className="text-sm text-gray-700 hover:text-[#8b6b5a] focus:outline-none focus:ring-2 focus:ring-[#8b6b5a]"
          >
            0000000000
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b5a]"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border rounded shadow-md p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label} className="group">
                {item.submenu ? (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 group-hover:after:w-full">{item.label}</span>
                      <button onClick={() => toggleSubmenu('services')} className="p-1" aria-label="Toggle submenu">
                        ▾
                      </button>
                    </div>
                    {openSubmenus['services'] && (
                      <ul className="mt-2 pl-4 space-y-1">
                        {item.submenu.map((sub) => (
                          <li key={sub.href}>
                            <a href={sub.href} className="text-gray-600">
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} className="text-gray-700 relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 group-hover:after:w-full block">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}