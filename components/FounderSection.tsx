"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  Building2,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Quote,
} from "lucide-react";

export default function FounderSection() {
  const credentials = [
    {
      title: "CPFA Certified",
      subtitle: "Certified Personal Financial Advisor",
      authority: "National Financial Advisory Standard",
      icon: Award,
    },
    {
      title: "FPSB Specialist",
      subtitle: "Financial Planning Standards Board",
      authority: "Investment, Retirement, Tax & Estate, Risk Planning",
      icon: GraduationCap,
    },
    {
      title: "Ex-Vice President",
      subtitle: "Motilal Oswal Securities Ltd",
      authority: "Institutional Leadership & Client Service Award",
      icon: Building2,
    },
    {
      title: "Ex-Regional Manager",
      subtitle: "Geojit BNP Paribas",
      authority: "Retail & Institutional Wealth Management",
      icon: ShieldCheck,
    },
    {
      title: "NISM & BSE Certified",
      subtitle: "Capital Markets & Derivatives",
      authority: "SEBI Registered Advisory Competence",
      icon: Award,
    },
    {
      title: "32+ Years Leadership",
      subtitle: "Cross-Industry Management",
      authority: "22+ Years Full-Time Financial Advisory",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Exact Section Header from Original Site */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            About Us
          </h2>
          <div className="w-16 h-1 bg-amulya-orange mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
            Amulya Financial Services is passionate to provide best solution for wealth creation with customized advice and Financial Services solutions with superior execution.
          </p>
        </div>

        {/* Editorial Executive Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual & Monogram Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1 bg-gradient-to-tr from-orange-500 via-sky-400 to-blue-700 shadow-md">
                <div className="w-full h-full bg-white rounded-[22px] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden border border-slate-100">
                  <span className="font-sans text-5xl sm:text-6xl font-extrabold bg-gradient-to-br from-orange-600 to-sky-700 bg-clip-text text-transparent">
                    MKJ
                  </span>
                  <div className="mt-2 text-xs font-bold tracking-widest uppercase text-slate-800">
                    M K Jayaprakash
                  </div>
                  <div className="text-[10px] text-amulya-orange font-bold tracking-wider mt-0.5 uppercase">
                    Principal Wealth Advisor
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  M K Jayaprakash
                </h3>
                <p className="text-amulya-orange font-bold text-sm mt-1">
                  Founder & Principal Wealth Architect
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Former Vice President, Motilal Oswal Securities Ltd
                </p>

                {/* Direct Action */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:9879583119"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors shadow-sm"
                  >
                    Direct: 9879583119
                  </a>
                  <a
                    href="mailto:info.amulyawealth@gmail.com"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-50 hover:bg-orange-100 border border-orange-200 text-amulya-orange transition-colors"
                  >
                    info.amulyawealth@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Story Column */}
            <div className="lg:col-span-7">
              {/* Philosophy Quote Box */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-white border-l-4 border-amulya-orange border-y border-r border-slate-200 shadow-sm">
                <Quote className="w-8 h-8 text-amulya-orange/40 mb-2" />
                <p className="font-serif text-lg sm:text-xl text-slate-900 italic leading-relaxed">
                  &ldquo;Financial advisory is not product selling; it is the discipline of protecting capital and engineering long-term freedom for your family.&rdquo;
                </p>
                <div className="mt-3 text-xs font-bold tracking-wider text-amulya-orange uppercase">
                  — M K Jayaprakash, Advisory Charter
                </div>
              </div>

              {/* Biography Details */}
              <div className="mt-8 space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  With <span className="text-slate-900 font-bold">32 years of enterprise leadership</span> and more than <span className="text-slate-900 font-bold">22 years strictly dedicated to capital markets</span>, Mr. Jayaprakash has steered families and investors through major market cycles.
                </p>
                <p>
                  Having served as <span className="text-slate-900 font-bold">Vice President at Motilal Oswal Securities Ltd</span> and <span className="text-slate-900 font-bold">Regional Manager at Geojit BNP Paribas</span>, he combines top-tier institutional execution with personalized client service.
                </p>
                <p className="text-slate-500 text-xs">
                  Awarded the <span className="text-amulya-orange font-bold">Employee Excellence Award for Customer Service Orientation</span> at Motilal Oswal, reflecting a career-long dedication to client-first fiduciary ethics.
                </p>
              </div>

              {/* Key Trust Checkpoints */}
              <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Comprehensive Goal-Based Advice</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Advisor-to-Client Access</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Institutional Research & Execution</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Multi-Generational Wealth Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accreditations Badge Grid */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">
              Professional Credentials & Accreditations
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amulya-orange transition-all flex items-start gap-3.5 group shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-sky-50 text-amulya-blue group-hover:bg-amulya-orange group-hover:text-white transition-colors shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-amulya-orange transition-colors">
                        {cred.title}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">{cred.subtitle}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{cred.authority}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
