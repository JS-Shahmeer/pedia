"use client"

import React, { useEffect, useState } from "react";
import QuoteButton from "@/src/components/QuoteButton";
import Logo from "@/src/images/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FileText, Edit3, Send, Briefcase, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState({})
  const pathname = usePathname()

  const normalizePath = (path) => {
    if (!path) return "/"
    if (path === "/") return "/"
    return path.endsWith("/") ? path.slice(0, -1) : path
  }

  const activePath = normalizePath(pathname)

  // shared navigation data
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    {
      label: "Services",
      submenu: [
        { label: "Wikipedia Page Creation Services", href: "/wikipedia-page-creation", icon: FileText },
        { label: "Wikipedia Editing Services", href: "/wikipedia-editing", icon: Edit3 },
        { label: "Wikipedia Publishing Services", href: "/wikipedia-publishing", icon: Send },
        { label: "Wikipedia Consultant", href: "/wikipedia-consultant", icon: Briefcase },
      ],
    },
    { label: "Contact", href: "/contact-us" },
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
        <Link href="/" className="logo flex items-center shrink-0">
          <Image
            src={Logo}
            alt="Write on Pedia"
            className="h-16 w-auto min-w-40 object-contain object-left"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center" aria-label="Main navigation">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.label} className={item.submenu ? "relative group" : "group"}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      className={`text-gray-700 cursor-pointer hover:text-[#8b6b5a] flex items-center relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 ${item.submenu.some(sub => sub.href === activePath) ? 'after:w-full text-[#8b6b5a]' : 'group-hover:after:w-full'}`}
                      aria-haspopup="true"
                      aria-expanded={!!openSubmenus.services}
                      onClick={() => toggleSubmenu('services')}
                      onMouseEnter={() => setOpenSubmenus((prev)=>({...prev, services:true}))}
                      onKeyDown={(e) => { if (e.key === 'Escape') setOpenSubmenus({}); }}
                    >
                      {item.label}
                      <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.585l3.71-3.397a.75.75 0 111.02 1.1l-4.18 3.827a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z"/>
                      </svg>
                    </button>
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 mt-3 bg-[#b67878] border border-[#a56565] rounded-lg shadow-lg w-64 z-20 overflow-hidden ${
                        openSubmenus.services ? "block" : "hidden"
                      } group-hover:block`}
                      onMouseLeave={() => setOpenSubmenus((prev) => ({ ...prev, services: false }))}
                    >
                      {item.submenu.map((sub) => {
                        const IconComponent = sub.icon;
                        return (
                          <Link
                            key={sub.href}
                            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${
                              sub.href === activePath
                                ? 'bg-[#a56565] text-white'
                                : 'text-white hover:bg-[#a56565]'
                            }`}
                            href={sub.href}
                          >
                            <IconComponent size={18} className="flex-shrink-0" />
                            <span>{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-700 hover:text-[#8b6b5a] relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 ${item.href === activePath ? 'after:w-full text-[#8b6b5a]' : 'group-hover:after:w-full'} block`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4 justify-end">
          
          <QuoteButton variant="default">Get Started</QuoteButton>
          <Link
            href="tel:+15127680328"
            className="text-sm text-gray-700 hover:text-[#8b6b5a] focus:outline-none focus:ring-2 focus:ring-[#8b6b5a]"
          >
            (512) 768-0328
          </Link>
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
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-[#b67878] hover:bg-[#f0e6e6] rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="h-full overflow-y-auto px-4 pb-20">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label} className="group">
                {item.submenu ? (
                  <>
                    <div className="flex items-center justify-between">
                      <span className={`text-gray-700 relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 ${item.submenu.some(sub => sub.href === activePath) ? 'after:w-full text-[#8b6b5a]' : 'group-hover:after:w-full'}`}>{item.label}</span>
                      <button onClick={() => toggleSubmenu('services')} className="p-1" aria-label="Toggle submenu">
                        ▾
                      </button>
                    </div>
                    {openSubmenus['services'] && (
                      <ul className="mt-2 pl-4 space-y-1 bg-[#b67878] rounded p-2 ml-2">
                        {item.submenu.map((sub) => {
                          const IconComponent = sub.icon;
                          return (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded transition-colors duration-200 text-sm ${
                                  sub.href === activePath
                                    ? 'bg-[#b67878] text-white font-semibold'
                                    : 'text-white hover:bg-[#804a4a] hover:text-gray-800'
                                }`}
                                onClick={() => setOpen(false)}
                              >
                                <IconComponent size={16} className="flex-shrink-0" />
                                {sub.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className={`text-gray-700 relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8b6b5a] after:transition-all after:duration-300 ${item.href === pathname ? 'after:w-full text-[#8b6b5a]' : 'group-hover:after:w-full'} block`} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}