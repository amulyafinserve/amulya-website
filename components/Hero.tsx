"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Award,
  ArrowRight,
  Calculator,
  Building2,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const credibilityStats = [
    {
      value: "32+",
      label: "Years Industry Leadership",
      sub: "Cross-Industry Management",
      icon: Award,
      badgeColor: "bg-orange-50 text-amulya-orange border-orange-200",
    },
    {
      value: "22+",
      label: "Capital Market Mastery",
      sub: "Institutional Advisory Track Record",
      icon: TrendingUp,
      badgeColor: "bg-sky-50 text-amulya-blue border-sky-200",
    },
    {
      value: "CPFA & FPSB",
      label: "Certified Wealth Architect",
      sub: "Global Financial Planning Standards",
      icon: ShieldCheck,
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      value: "Institutional Alliance",
      label: "Motilal Oswal Financial Services",
      sub: "Ex-Vice President Leadership",
      icon: Building2,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50">
      {/* Ambient Soft Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-br from-orange-100/40 via-sky-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Floating Badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-orange-200/80 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-amulya-orange animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-bold text-slate-800">
              Private Wealth Advisory & Family Office
            </span>
          </motion.div>
        </div>

        {/* Main Editorial Headline */}
        <div className="max-w-4xl mx-auto text-center mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.15]"
          >
            Preserving Legacies.{" "}
            <span className="block mt-2 font-normal italic bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
              Engineering Disciplined Wealth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Backed by <span className="text-slate-900 font-bold">32+ years of financial leadership</span> and former institutional vice-presidency at{" "}
            <span className="text-slate-900 font-bold">Motilal Oswal Securities</span>. We transform complex capital markets into bespoke, goal-oriented family wealth structures.
          </motion.p>

          {/* Action Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-orange hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Begin Your Wealth Roadmap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#calculators"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-amulya-orange shadow-sm transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <Calculator className="w-4 h-4 text-amulya-orange" />
              <span>Simulate Compounding</span>
            </a>
          </motion.div>

          {/* Quick Pillar Bullets */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Conflict of Interest
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Institutional Risk Controls
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Multi-Generational Continuity
            </span>
          </div>
        </div>

        {/* Credibility Bar (Crisp White Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {credibilityStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card hover:border-orange-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl border ${stat.badgeColor} transition-colors`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
