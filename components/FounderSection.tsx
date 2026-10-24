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
    <section id="founder" className="py-24 relative bg-[#04080E] border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            Founder & Principal Architect
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Institutional Pedigree. Personal Accountability.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Directly advised by veterans who have navigated market cycles, regulatory shifts, and economic transitions across three decades.
          </p>
        </div>

        {/* Editorial Executive Card */}
        <div className="rounded-3xl bg-[#09101C]/80 border border-white/[0.08] backdrop-blur-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual & Monogram Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 shadow-gold">
                <div className="w-full h-full bg-[#060B13] rounded-[22px] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/10 rounded-full blur-xl" />
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-gold-gradient">
                    MKJ
                  </span>
                  <div className="mt-2 text-xs font-semibold tracking-widest uppercase text-slate-300">
                    M K Jayaprakash
                  </div>
                  <div className="text-[10px] text-gold tracking-wider mt-0.5 uppercase">
                    Principal Wealth Advisor
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  M K Jayaprakash
                </h3>
                <p className="text-gold font-medium text-sm mt-1">
                  Founder & Principal Wealth Architect
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Former Vice President, Motilal Oswal Securities Ltd
                </p>

                {/* Direct Action */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:+919879583119"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white transition-colors"
                  >
                    Direct: +91 9879583119
                  </a>
                  <a
                    href="mailto:info.amulyawealth@gmail.com"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-gold/15 hover:bg-gold/25 border border-gold/30 text-gold-light transition-colors"
                  >
                    Direct Desk Email
                  </a>
                </div>
              </div>
            </div>

            {/* Right Editorial Story Column */}
            <div className="lg:col-span-7">
              {/* Philosophy Quote Box */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.03] border-l-4 border-gold border-y border-r border-white/[0.05]">
                <Quote className="w-8 h-8 text-gold/40 mb-2" />
                <p className="font-serif text-lg sm:text-xl text-slate-100 italic leading-relaxed">
                  &ldquo;Financial advisory is not product selling; it is the discipline of protecting capital and engineering long-term freedom for your family.&rdquo;
                </p>
                <div className="mt-3 text-xs font-semibold tracking-wider text-gold uppercase">
                  — M K Jayaprakash, Advisory Charter
                </div>
              </div>

              {/* Biography Details */}
              <div className="mt-8 space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  With <span className="text-white font-semibold">32 years of enterprise leadership</span> and more than <span className="text-white font-semibold">22 years strictly dedicated to capital markets</span>, Mr. Jayaprakash has steered affluent families and business leaders through major global and domestic financial cycles.
                </p>
                <p>
                  Having served as <span className="text-white font-semibold">Vice President at Motilal Oswal Securities Ltd</span> and <span className="text-white font-semibold">Regional Manager at Geojit BNP Paribas</span>, he combines top-tier institutional governance with the personalized attention of a boutique family wealth office.
                </p>
                <p className="text-slate-400 text-xs">
                  Awarded the coveted <span className="text-gold font-medium">Employee Excellence Award for Customer Service Orientation</span> at Motilal Oswal, reflecting a career-long dedication to client-first fiduciary ethics.
                </p>
              </div>

              {/* Key Trust Checkpoints */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-growth shrink-0" />
                  <span>Comprehensive Fiduciary Discipline</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-growth shrink-0" />
                  <span>Direct Advisor-to-Client Access</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-growth shrink-0" />
                  <span>Institutional Research & Execution</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-growth shrink-0" />
                  <span>Multi-Generational Continuity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accreditations Badge Grid */}
          <div className="mt-14 pt-10 border-t border-white/[0.08]">
            <div className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-6">
              Professional Credentials & Accreditations
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-gold/30 transition-all flex items-start gap-3.5 group"
                  >
                    <div className="p-2 rounded-lg bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-slate-100 group-hover:text-gold transition-colors">
                        {cred.title}
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">{cred.subtitle}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{cred.authority}</div>
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
