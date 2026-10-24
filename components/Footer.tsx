"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp, Building2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E293B] text-slate-300 text-xs pt-16 pb-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Exact 4 Columns from Original Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700">
          {/* Column 1: About Us */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              About Us
            </h4>
            <div className="bg-white p-2 rounded-xl inline-block shadow-sm">
              <div className="relative h-9 w-44">
                <Image
                  src="/amulya-logo.png"
                  alt="Amulya Financial Services"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Amulya Financial Services is passionate to provide best solution for wealth creation with customized advice and Financial Services solutions with superior execution.
            </p>
            <div className="pt-2 text-[11px] text-white bg-blue-500/20 border border-blue-400/30 px-3 py-1.5 rounded-lg w-fit">
              <span className="font-semibold text-orange-400">Partner: </span>
              <span>Motilal Oswal Financial Services</span>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#resources" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Mutual Fund Forms
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> KYC/PAN
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Educational Videos
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Financial Calculators
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Goal Based Planning */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Goal Based Planning
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#goals" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Child&apos;s Education
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Child&apos;s Wedding
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Dream House
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Dream Car
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Dream Vacation
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-400 font-bold">*</span> Family Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="font-bold text-white">Amulya Financial Services</div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  129, Sunrise Mall,<br />
                  Nr. Mansi Crossroads, Vastrapur,<br />
                  Ahmedabad – 380015
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <span className="text-slate-400">Mobile: </span>
                  <a href="tel:9879583119" className="hover:text-orange-400 font-bold text-white">
                    9879583119
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <span className="text-slate-400">Office: </span>
                  <a href="tel:07948009211" className="hover:text-orange-400 font-bold text-white">
                    079-48009211
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:info.amulyawealth@gmail.com" className="hover:text-orange-400 break-all">
                  info.amulyawealth@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimers */}
        <div className="py-6 border-b border-slate-700 space-y-2 text-[11px] text-slate-400">
          <p>
            <strong className="text-slate-300">Mutual Fund Disclaimer:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not an indicator of future returns.
          </p>
          <p>
            <strong className="text-slate-300">Broking Services Alliance:</strong> Partnered with Motilal Oswal Securities Ltd (SEBI Regn: INZ000158836). All transactions are executed subject to exchange and compliance regulations.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Amulya Financial Services. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-orange-400 transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">
              Contact Us
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
