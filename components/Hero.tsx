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
    },
    {
      value: "22+",
      label: "Capital Market Mastery",
      sub: "Institutional Advisory Track Record",
      icon: TrendingUp,
    },
    {
      value: "CPFA & FPSB",
      label: "Certified Wealth Architect",
      sub: "Global Financial Planning Standards",
      icon: ShieldCheck,
    },
    {
      value: "Institutional Alliance",
      label: "Motilal Oswal Financial Services",
      sub: "Ex-Vice President Leadership",
      icon: Building2,
    },
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Ambient Radial Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Floating Badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-surface/80 border border-gold/30 shadow-gold backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
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
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Preserving Legacies.{" "}
            <span className="block mt-2 text-gold-gradient italic font-normal">
              Engineering Disciplined Wealth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Backed by <span className="text-white font-semibold">32+ years of financial leadership</span> and former institutional vice-presidency at{" "}
            <span className="text-white font-semibold">Motilal Oswal Securities</span>. We transform complex capital markets into bespoke, goal-oriented family wealth structures.
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
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-obsidian bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Begin Your Wealth Roadmap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#calculators"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold/40 transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md"
            >
              <Calculator className="w-4 h-4 text-gold" />
              <span>Simulate Compounding</span>
            </a>
          </motion.div>

          {/* Quick Pillar Bullets */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-growth" /> Zero Conflict of Interest
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-growth" /> Institutional Risk Controls
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-growth" /> Multi-Generational Continuity
            </span>
          </div>
        </div>

        {/* Credibility Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {credibilityStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative group p-6 rounded-2xl bg-[#0B132B]/60 border border-white/[0.08] hover:border-gold/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-growth/80" />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
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
