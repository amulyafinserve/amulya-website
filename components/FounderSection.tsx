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
    <section id="founder" className="py-24 relative bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-300 text-amulya-orange text-xs font-bold uppercase tracking-wider mb-4">
            Founder & Principal Architect
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Institutional Pedigree. Personal Accountability.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Directly advised by veterans who have navigated market cycles, regulatory shifts, and economic transitions across three decades.
          </p>
        </div>

        {/* Editorial Executive Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-card relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual & Monogram Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1 bg-gradient-to-tr from-orange-500 via-sky-400 to-blue-700 shadow-md">
                <div className="w-full h-full bg-white rounded-[22px] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden border border-slate-100">
                  <span className="font-serif text-5xl sm:text-6xl font-bold bg-gradient-to-br from-orange-600 to-sky-700 bg-clip-text text-transparent">
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
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
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
                    href="tel:+919879583119"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors"
                  >
                    Direct: +91 9879583119
                  </a>
                  <a
                    href="mailto:info.amulyawealth@gmail.com"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-50 hover:bg-orange-100 border border-orange-200 text-amulya-orange transition-colors"
                  >
                    Direct Desk Email
                  </a>
                </div>
              </div>
            </div>

            {/* Right Editorial Story Column */}
            <div className="lg:col-span-7">
              {/* Philosophy Quote Box */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-orange-50/70 border-l-4 border-amulya-orange border-y border-r border-orange-200/60">
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
                  With <span className="text-slate-900 font-bold">32 years of enterprise leadership</span> and more than <span className="text-slate-900 font-bold">22 years strictly dedicated to capital markets</span>, Mr. Jayaprakash has steered affluent families and business leaders through major global and domestic financial cycles.
                </p>
                <p>
                  Having served as <span className="text-slate-900 font-bold">Vice President at Motilal Oswal Securities Ltd</span> and <span className="text-slate-900 font-bold">Regional Manager at Geojit BNP Paribas</span>, he combines top-tier institutional governance with the personalized attention of a boutique family wealth office.
                </p>
                <p className="text-slate-500 text-xs">
                  Awarded the coveted <span className="text-amulya-orange font-bold">Employee Excellence Award for Customer Service Orientation</span> at Motilal Oswal, reflecting a career-long dedication to client-first fiduciary ethics.
                </p>
              </div>

              {/* Key Trust Checkpoints */}
              <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Comprehensive Fiduciary Discipline</span>
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
                  <span>Multi-Generational Continuity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accreditations Badge Grid */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">
              Professional Credentials & Accreditations
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-amulya-orange hover:bg-white transition-all flex items-start gap-3.5 group shadow-sm"
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
