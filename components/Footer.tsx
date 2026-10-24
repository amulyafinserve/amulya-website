"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldAlert, ArrowUp, Building2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1E3F] text-slate-300 text-xs pt-16 pb-12 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo in white badge for high contrast in footer */}
            <div className="bg-white px-3 py-2 rounded-xl inline-block shadow-sm">
              <div className="relative h-10 w-48">
                <Image
                  src="/amulya-logo.png"
                  alt="Amulya Financial Services"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mt-3">
              Private Wealth Architecture & Family Office Advisory. Backed by 32+ years of enterprise experience and former Vice Presidency at Motilal Oswal Securities Ltd.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-white bg-blue-500/20 border border-blue-400/30 px-3 py-1.5 rounded-lg w-fit">
              <Building2 className="w-3.5 h-3.5 text-orange-400" />
              <span>Institutional Partner: Motilal Oswal Financial Services</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Wealth Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Holistic Financial Planning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Mutual Fund Portfolios
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Portfolio Management Services (PMS)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Private Equity & Pre-IPO Mandates
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Equity Broking (Motilal Oswal)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Fixed Income & Sovereign Bonds
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Will & Succession Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Calculators & Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Calculators
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculators" className="hover:text-orange-400 transition-colors">
                  SIP & Wealth Compounder
                </a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-orange-400 transition-colors">
                  Crorepati Blueprint
                </a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-orange-400 transition-colors">
                  Child Education Planner
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-orange-400 transition-colors">
                  Founder Credentials
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-orange-400 transition-colors">
                  Investor Knowledge Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Advisory Desk Office */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Advisory Desk & Contact
            </div>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  Vadodara, Gujarat, India.<br />
                  Serving private families across Gujarat & NRI global mandates.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+919879583119" className="hover:text-orange-400 transition-colors font-mono">
                  +91 9879583119
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:info.amulyawealth@gmail.com" className="hover:text-orange-400 transition-colors">
                  info.amulyawealth@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclosures & Compliance */}
        <div className="py-8 border-b border-white/10 space-y-3 text-slate-300">
          <div className="flex items-center gap-2 text-orange-400 font-bold text-xs">
            <ShieldAlert className="w-4 h-4" />
            <span>Regulatory & Statutory Disclosures</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            <strong className="text-white">AMFI / SEBI Mutual Fund Disclaimer:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing. Past performance is not an indicator of future returns. Asset allocation and projections generated by calculators are indicative in nature and do not constitute an explicit guarantee of returns.
          </p>
          <p className="text-[11px] leading-relaxed">
            <strong className="text-white">Institutional Alliance:</strong> Equity broking, derivative trading, and depository participant services are facilitated through our institutional alliance with Motilal Oswal Financial Services Ltd (SEBI Regn: INZ000158836). All transactions are executed subject to exchange rules and compliance guidelines.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Amulya Financial Services. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-orange-400 transition-colors">
              Fiduciary Charter
            </a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-orange-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
