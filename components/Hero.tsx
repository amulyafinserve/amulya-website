"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Building2,
  ArrowRight,
  Calculator,
  Quote,
} from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section id="home" className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Original Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 uppercase font-sans leading-tight"
          >
            AMULYA FINANCIAL SERVICES{" "}
            <span className="block mt-1 text-amulya-orange">
              WELCOMES YOU
            </span>
          </motion.h1>

          {/* Original Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4"
          >
            <p className="text-xl sm:text-2xl font-bold text-sky-800 tracking-wide">
              Your Trusted Financial Service Provider
            </p>
          </motion.div>

          {/* Original Retirement Philosophy Quote Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-soft max-w-3xl mx-auto relative"
          >
            <Quote className="w-8 h-8 text-orange-300 mx-auto mb-2" />
            <p className="text-slate-700 font-serif italic text-base sm:text-lg leading-relaxed">
              &ldquo;Retirement is an opportunity that life gives you to stop complaining about not having enough time to do what you always wanted to do.&rdquo;
            </p>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-amulya-orange">
              — Amulya Wealth Advisory Principle
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#goals"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-amulya-orange shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amulya-orange" />
              <span>Goal Based Planning</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>
        </div>

        {/* 4 Trust Highlights */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-50 text-amulya-orange">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-900">32+ Years</div>
              <div className="text-xs font-semibold text-slate-600">Enterprise Leadership</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-xl bg-sky-50 text-amulya-blue">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Motilal Oswal</div>
              <div className="text-xs font-semibold text-slate-600">Institutional Partner</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">CPFA & FPSB</div>
              <div className="text-xs font-semibold text-slate-600">Certified Advisory</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Goal Planning</div>
              <div className="text-xs font-semibold text-slate-600">Customized Portfolios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
