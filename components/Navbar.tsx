"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronDown,
  Phone,
  Mail,
  ExternalLink,
  Menu,
  X,
  Calculator,
  Compass,
  TrendingUp,
  Award,
  Sparkles,
  Lock,
} from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wealthSolutions = [
    {
      title: "Holistic Financial Planning",
      desc: "Goal-oriented asset allocation & lifetime roadmap",
      href: "#services",
      icon: Compass,
    },
    {
      title: "Mutual Fund Portfolios",
      desc: "Institutional research-backed mutual fund selection",
      href: "#services",
      icon: TrendingUp,
    },
    {
      title: "Portfolio Management (PMS)",
      desc: "High-conviction equity strategies for Ultra-HNIs",
      href: "#services",
      icon: ShieldCheck,
    },
    {
      title: "Private Equity & Pre-IPO",
      desc: "Exclusive access to unlisted growth leaders",
      href: "#services",
      icon: Sparkles,
    },
    {
      title: "Equity Broking & Derivatives",
      desc: "Institutional execution backed by Motilal Oswal",
      href: "#services",
      icon: TrendingUp,
    },
    {
      title: "Fixed Income & Sovereign Bonds",
      desc: "Capital preservation & high-grade yields",
      href: "#services",
      icon: ShieldCheck,
    },
    {
      title: "Succession & Estate Planning",
      desc: "Generational asset transition, Wills & Trusts",
      href: "#services",
      icon: Award,
    },
  ];

  const calculatorsList = [
    { title: "SIP & Wealth Compounder", href: "#calculators" },
    { title: "Crorepati Milestone Blueprint", href: "#calculators" },
    { title: "Child Future & Inflation Planner", href: "#calculators" },
  ];

  return (
    <>
      {/* Top Quick Bar */}
      <div className="bg-[#04080E] border-b border-white/[0.06] text-xs text-slate-300 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-5">
            <a
              href="tel:+919879583119"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 9879583119</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href="mailto:info.amulyawealth@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>info.amulyawealth@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Institutional Partner: Motilal Oswal
            </span>

            {/* Client Portals Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPortalsOpen(!portalsOpen)}
                onBlur={() => setTimeout(() => setPortalsOpen(false), 200)}
                className="flex items-center gap-1 text-slate-300 hover:text-gold transition-colors font-medium px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]"
              >
                <Lock className="w-3 h-3 text-gold" />
                <span>Client Portals</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {portalsOpen && (
                <div className="absolute right-0 mt-1 w-64 rounded-xl bg-[#09101C] border border-white/10 shadow-2xl p-2 z-50">
                  <a
                    href="https://investor.motilaloswal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/[0.06] text-xs transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-slate-100 group-hover:text-gold">
                        Motilal Oswal Trading
                      </div>
                      <div className="text-[10px] text-slate-400">Equity & Derivatives Desk</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold" />
                  </a>
                  <a
                    href="https://amulyawealth.my-portfolio.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/[0.06] text-xs transition-colors group border-t border-white/[0.05]"
                  >
                    <div>
                      <div className="font-semibold text-slate-100 group-hover:text-gold">
                        Mutual Fund Client Portal
                      </div>
                      <div className="text-[10px] text-slate-400">Portfolio Valuation & Statements</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#060B13]/90 border-b border-white/[0.08] shadow-2xl py-3.5"
            : "backdrop-blur-lg bg-[#060B13]/70 border-b border-white/[0.05] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-gold">
              <div className="w-full h-full bg-[#060B13] rounded-[11px] flex items-center justify-center">
                <span className="font-serif text-xl font-bold bg-gradient-to-b from-amber-100 to-amber-400 bg-clip-text text-transparent">
                  A
                </span>
              </div>
            </div>
            <div>
              <div className="font-sans font-extrabold tracking-wider text-base sm:text-lg text-white group-hover:text-gold transition-colors">
                AMULYA
              </div>
              <div className="text-[10px] tracking-[0.2em] font-medium uppercase text-gold">
                Financial Services
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-white transition-colors py-2">
                <span>Wealth Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute left-0 mt-0 w-80 rounded-2xl bg-[#0A1220]/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-3 z-50">
                  <div className="text-[11px] font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                    Institutional & Private Wealth
                  </div>
                  <div className="space-y-1 mt-1">
                    {wealthSolutions.map((sol, idx) => {
                      const Icon = sol.icon;
                      return (
                        <a
                          key={idx}
                          href={sol.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-white/[0.04] text-gold group-hover:bg-gold/10 group-hover:text-gold-light transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-200 group-hover:text-gold transition-colors">
                              {sol.title}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">
                              {sol.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Calculators Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCalculatorsOpen(true)}
              onMouseLeave={() => setCalculatorsOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-white transition-colors py-2">
                <Calculator className="w-4 h-4 text-gold" />
                <span>Calculators</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    calculatorsOpen ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>

              {calculatorsOpen && (
                <div className="absolute left-0 mt-0 w-64 rounded-2xl bg-[#0A1220]/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-2 z-50">
                  {calculatorsList.map((calc, idx) => (
                    <a
                      key={idx}
                      href={calc.href}
                      onClick={() => setCalculatorsOpen(false)}
                      className="block px-3 py-2.5 rounded-xl hover:bg-white/[0.06] text-xs font-medium text-slate-200 hover:text-gold transition-colors"
                    >
                      {calc.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#founder" className="hover:text-white transition-colors">
              Leadership & Credibility
            </a>

            <a href="#insights" className="hover:text-white transition-colors">
              Insights & Media
            </a>

            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-obsidian bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Wealth Consultation</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-[#060B13]/98 border-b border-white/10 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-gold font-semibold px-2 py-1">
                Wealth Solutions
              </div>
              {wealthSolutions.map((sol, idx) => (
                <a
                  key={idx}
                  href={sol.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-lg"
                >
                  {sol.title}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/[0.08] space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-gold font-semibold px-2 py-1">
                Tools & Portals
              </div>
              <a
                href="#calculators"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-lg"
              >
                <Calculator className="w-4 h-4 text-gold" />
                Wealth Calculators
              </a>
              <a
                href="#founder"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-lg"
              >
                Founder Track Record
              </a>
              <a
                href="#insights"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-lg"
              >
                Curated Insights & Videos
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] rounded-lg"
              >
                Direct Office Contact
              </a>
            </div>

            <div className="pt-3 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-obsidian bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-gold"
              >
                Book Wealth Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
