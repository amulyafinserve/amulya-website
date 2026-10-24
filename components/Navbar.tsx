"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  ExternalLink,
  Menu,
  X,
  Lock,
  UserPlus,
} from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "HOME", href: "#home" },
    { title: "ABOUT US", href: "#about" },
    { title: "OUR SERVICES", href: "#services" },
    { title: "GOAL BASED PLANNING", href: "#goals" },
    { title: "RESOURCES", href: "#resources" },
    { title: "CONTACT US", href: "#contact" },
  ];

  return (
    <>
      {/* Top Header Contact & Login Bar */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-4 sm:px-8 text-xs text-slate-700">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48 sm:w-56">
              <Image
                src="/amulya-logo.png"
                alt="Amulya Financial Services"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Quick Contacts & Top Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 ml-auto">
            <div className="hidden md:flex items-center gap-4 text-slate-600 font-medium">
              <a
                href="mailto:info.amulyawealth@gmail.com"
                className="flex items-center gap-1.5 hover:text-amulya-orange transition-colors"
              >
                <Mail className="w-4 h-4 text-amulya-orange" />
                <span>info.amulyawealth@gmail.com</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="tel:9879583119"
                className="flex items-center gap-1.5 hover:text-amulya-orange transition-colors font-semibold text-slate-800"
              >
                <Phone className="w-4 h-4 text-amulya-orange" />
                <span>9879583119</span>
              </a>
            </div>

            {/* Quick Action Buttons (MF Client Login, Trading Login, Sign Up) */}
            <div className="flex items-center gap-2">
              <a
                href="https://amulyawealth.my-portfolio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-md text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-sm transition-all flex items-center gap-1.5"
              >
                <Lock className="w-3 h-3" />
                <span>MF Client Login</span>
              </a>

              <a
                href="https://investor.motilaloswal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-md text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-sm transition-all flex items-center gap-1.5"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Trading Login</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="px-3.5 py-1.5 rounded-md text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <UserPlus className="w-3 h-3" />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#EA580C] text-white shadow-md ${
          scrolled ? "py-2 bg-orange-600/98 backdrop-blur-md" : "py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center text-xs font-bold tracking-wide">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`py-3.5 px-5 transition-colors uppercase border-b-2 ${
                  link.title === "HOME"
                    ? "bg-orange-700/60 border-white text-white"
                    : "border-transparent text-white/95 hover:bg-orange-700/40 hover:text-white"
                }`}
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="lg:hidden py-2.5 flex items-center justify-between w-full">
            <span className="text-xs font-bold uppercase tracking-wider text-white">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-orange-700 text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-orange-700 px-4 py-3 space-y-2 border-t border-orange-600">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-xs font-bold text-white hover:bg-orange-800 rounded-md uppercase"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
