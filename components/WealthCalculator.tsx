"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Target,
  GraduationCap,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Percent,
  Calendar,
  Wallet,
} from "lucide-react";
import { formatINR, formatNumberINR } from "@/lib/utils";

interface WealthCalculatorProps {
  onOpenConsultation?: (prefillNote?: string) => void;
}

export default function WealthCalculator({ onOpenConsultation }: WealthCalculatorProps) {
  const [activeTab, setActiveTab] = useState<"sip" | "crorepati" | "education">("sip");

  // Tab 1: SIP States
  const [sipMonthly, setSipMonthly] = useState<number>(50000);
  const [sipReturnRate, setSipReturnRate] = useState<number>(13.5);
  const [sipYears, setSipYears] = useState<number>(15);

  // Tab 2: Crorepati States
  const [targetCorpus, setTargetCorpus] = useState<number>(50000000); // 5 Crore
  const [targetYears, setTargetYears] = useState<number>(12);
  const [targetReturnRate, setTargetReturnRate] = useState<number>(13.5);

  // Tab 3: Education States
  const [currentCost, setCurrentCost] = useState<number>(3500000); // 35 Lakhs
  const [yearsToCollege, setYearsToCollege] = useState<number>(10);
  const [educationInflation, setEducationInflation] = useState<number>(10);
  const [educationReturnRate, setEducationReturnRate] = useState<number>(12.5);

  // Calculation Math for Tab 1 (SIP)
  const calculateSIP = () => {
    const P = sipMonthly;
    const i = sipReturnRate / 12 / 100;
    const n = sipYears * 12;
    const maturity = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = P * n;
    const wealthGain = Math.max(0, maturity - invested);
    return {
      invested: Math.round(invested),
      wealthGain: Math.round(wealthGain),
      maturity: Math.round(maturity),
      gainRatio: maturity > 0 ? (wealthGain / maturity) * 100 : 0,
    };
  };

  // Calculation Math for Tab 2 (Crorepati Blueprint)
  const calculateCrorepati = () => {
    const target = targetCorpus;
    const i = targetReturnRate / 12 / 100;
    const n = targetYears * 12;
    const factor = ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const monthlyNeeded = factor > 0 ? target / factor : 0;
    const totalInvested = monthlyNeeded * n;
    const wealthGain = Math.max(0, target - totalInvested);
    return {
      monthlyNeeded: Math.round(monthlyNeeded),
      totalInvested: Math.round(totalInvested),
      wealthGain: Math.round(wealthGain),
      gainRatio: target > 0 ? (wealthGain / target) * 100 : 0,
    };
  };

  // Calculation Math for Tab 3 (Education Planner)
  const calculateEducation = () => {
    const futureCost = currentCost * Math.pow(1 + educationInflation / 100, yearsToCollege);
    const i = educationReturnRate / 12 / 100;
    const n = yearsToCollege * 12;
    const factor = ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const monthlyNeeded = factor > 0 ? futureCost / factor : 0;
    const totalInvested = monthlyNeeded * n;
    return {
      futureCost: Math.round(futureCost),
      monthlyNeeded: Math.round(monthlyNeeded),
      totalInvested: Math.round(totalInvested),
      inflationHike: Math.round(futureCost - currentCost),
    };
  };

  const sipResult = calculateSIP();
  const crorepatiResult = calculateCrorepati();
  const educationResult = calculateEducation();

  const sipMonthlyId = useId();
  const sipReturnRateId = useId();
  const sipYearsId = useId();
  const targetYearsId = useId();
  const targetReturnRateId = useId();
  const currentCostId = useId();
  const yearsToCollegeId = useId();
  const educationInflationId = useId();

  return (
    <section id="calculators" className="py-24 relative bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-300 text-amulya-orange text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Wealth Architecture Engine
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Simulate Your Compounding Power
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Mathematical discipline beats market timing. Explore real-time compounding projections tailored to your family&apos;s milestone horizons.
          </p>
        </div>

        {/* Tab Navigator */}
        <div className="mt-12 flex justify-center">
          <div className="p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-wrap gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab("sip")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "sip"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>SIP & Wealth Compounder</span>
            </button>

            <button
              onClick={() => setActiveTab("crorepati")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "crorepati"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Crorepati Blueprint</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Child Future & Inflation</span>
            </button>
          </div>
        </div>

        {/* Calculator Body Card */}
        <div className="mt-10 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-card relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* TAB 1: SIP & WEALTH COMPOUNDER */}
            {activeTab === "sip" && (
              <motion.div
                key="sip"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Sliders Column */}
                <div className="lg:col-span-7 space-y-7">
                  {/* Slider 1: Monthly Investment */}
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor={sipMonthlyId} className="text-sm font-semibold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Wallet className="w-4 h-4 text-amulya-orange" />
                        Monthly Investment (SIP)
                      </label>
                      <span className="font-mono text-base font-bold text-slate-900 bg-orange-50 border border-orange-200 px-3 py-1 rounded-lg">
                        ₹{formatNumberINR(sipMonthly)}
                      </span>
                    </div>
                    <input
                      id={sipMonthlyId}
                      type="range"
                      min={5000}
                      max={1000000}
                      step={5000}
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-mono">
                      <span>₹5,000</span>
                      <span>₹2,50,000</span>
                      <span>₹5,00,000</span>
                      <span>₹10,00,000</span>
                    </div>
                  </div>

                  {/* Slider 2: Expected Annual Return */}
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor={sipReturnRateId} className="text-sm font-semibold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Percent className="w-4 h-4 text-amulya-blue" />
                        Expected Annual Return (CAGR)
                      </label>
                      <span className="font-mono text-base font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-lg">
                        {sipReturnRate}%
                      </span>
                    </div>
                    <input
                      id={sipReturnRateId}
                      type="range"
                      min={8}
                      max={24}
                      step={0.5}
                      value={sipReturnRate}
                      onChange={(e) => setSipReturnRate(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-mono">
                      <span>8% (Conservative)</span>
                      <span>13.5% (Balanced Equity)</span>
                      <span>24% (Aggressive)</span>
                    </div>
                  </div>

                  {/* Slider 3: Time Period */}
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor={sipYearsId} className="text-sm font-semibold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-4 h-4 text-amulya-orange" />
                        Investment Horizon
                      </label>
                      <span className="font-mono text-base font-bold text-slate-900 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">
                        {sipYears} {sipYears === 1 ? "Year" : "Years"}
                      </span>
                    </div>
                    <input
                      id={sipYearsId}
                      type="range"
                      min={1}
                      max={35}
                      step={1}
                      value={sipYears}
                      onChange={(e) => setSipYears(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-mono">
                      <span>1 Year</span>
                      <span>10 Years</span>
                      <span>20 Years</span>
                      <span>35 Years</span>
                    </div>
                  </div>

                  {/* Compounding Pro-tip */}
                  <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200/60 flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-amulya-orange mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Compounding shows geometric acceleration after year 10. By continuing through market volatility, your wealth multiplier expands exponentially.
                    </p>
                  </div>
                </div>

                {/* Results Column (Deep Navy Accent Box) */}
                <div className="lg:col-span-5 bg-[#0A1E3F] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-sky-200">
                      Estimated Future Corpus
                    </div>
                    <div className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold text-orange-400 tracking-tight">
                      {formatINR(sipResult.maturity)}
                    </div>

                    {/* Progress Bar Visualizer */}
                    <div className="mt-6">
                      <div className="flex justify-between text-xs text-sky-200 mb-1.5 font-medium">
                        <span>Invested ({Math.round(100 - sipResult.gainRatio)}%)</span>
                        <span className="text-orange-400 font-bold">Gain ({Math.round(sipResult.gainRatio)}%)</span>
                      </div>
                      <div className="h-3 w-full bg-slate-700/60 rounded-full overflow-hidden flex">
                        <div
                          className="bg-slate-400 h-full transition-all duration-300"
                          style={{ width: `${100 - sipResult.gainRatio}%` }}
                        />
                        <div
                          className="bg-gradient-to-r from-orange-500 to-amber-400 h-full transition-all duration-300"
                          style={{ width: `${sipResult.gainRatio}%` }}
                        />
                      </div>
                    </div>

                    {/* Breakdown Numbers */}
                    <div className="mt-6 space-y-3.5 border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Total Capital Invested</span>
                        <span className="font-mono font-semibold text-white">
                          {formatINR(sipResult.invested)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Estimated Wealth Creation</span>
                        <span className="font-mono font-bold text-orange-400">
                          +{formatINR(sipResult.wealthGain)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Wealth Multiplier</span>
                        <span className="font-mono font-bold text-sky-300">
                          {(sipResult.maturity / (sipResult.invested || 1)).toFixed(2)}x
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Conversion Button */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() =>
                        onOpenConsultation
                          ? onOpenConsultation(
                              `SIP Roadmap: ₹${formatNumberINR(
                                sipMonthly
                              )}/mo for ${sipYears} yrs at ${sipReturnRate}% CAGR`
                            )
                          : document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Lock In This Wealth Roadmap</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-sky-200/80 mt-2">
                      Private institutional fund allocations tailored to your tax slab.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: CROREPATI MILESTONE BLUEPRINT */}
            {activeTab === "crorepati" && (
              <motion.div
                key="crorepati"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-7">
                  <div>
                    <label className="text-sm font-semibold text-slate-800 block mb-2.5">
                      Select Target Milestone Corpus
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[10000000, 25000000, 50000000, 100000000].map((corpus) => (
                        <button
                          key={corpus}
                          onClick={() => setTargetCorpus(corpus)}
                          className={`py-3 px-2 rounded-xl text-xs font-bold font-mono transition-all border ${
                            targetCorpus === corpus
                              ? "bg-amulya-orange text-white border-amulya-orange shadow-orange"
                              : "bg-slate-50 text-slate-800 border-slate-200 hover:border-amulya-orange"
                          }`}
                        >
                          {formatINR(corpus)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor={targetYearsId} className="text-sm font-semibold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-4 h-4 text-amulya-orange" />
                        Target Timeframe to Achieve
                      </label>
                      <span className="font-mono text-base font-bold text-slate-900 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">
                        {targetYears} Years
                      </span>
                    </div>
                    <input
                      id={targetYearsId}
                      type="range"
                      min={3}
                      max={30}
                      step={1}
                      value={targetYears}
                      onChange={(e) => setTargetYears(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-mono">
                      <span>3 Years</span>
                      <span>10 Years</span>
                      <span>20 Years</span>
                      <span>30 Years</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor={targetReturnRateId} className="text-sm font-semibold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Percent className="w-4 h-4 text-amulya-blue" />
                        Assumed Portfolio Return Rate
                      </label>
                      <span className="font-mono text-base font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-lg">
                        {targetReturnRate}%
                      </span>
                    </div>
                    <input
                      id={targetReturnRateId}
                      type="range"
                      min={10}
                      max={18}
                      step={0.5}
                      value={targetReturnRate}
                      onChange={(e) => setTargetReturnRate(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0A1E3F] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-sky-200">
                      Required Monthly Disciplined SIP
                    </div>
                    <div className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold text-orange-400 tracking-tight">
                      ₹{formatNumberINR(crorepatiResult.monthlyNeeded)}{" "}
                      <span className="text-sm font-sans font-normal text-slate-300">/ month</span>
                    </div>

                    <div className="mt-6 space-y-3.5 border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Target Milestone</span>
                        <span className="font-mono font-semibold text-white">
                          {formatINR(targetCorpus)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Total Capital Outlay</span>
                        <span className="font-mono font-semibold text-slate-200">
                          {formatINR(crorepatiResult.totalInvested)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Gain Generated by Markets</span>
                        <span className="font-mono font-bold text-orange-400">
                          +{formatINR(crorepatiResult.wealthGain)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() =>
                        onOpenConsultation
                          ? onOpenConsultation(
                              `Crorepati Blueprint: Target ${formatINR(
                                targetCorpus
                              )} in ${targetYears} years (Est. SIP: ₹${formatNumberINR(
                                crorepatiResult.monthlyNeeded
                              )}/mo)`
                            )
                          : document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Design Milestone Portfolio</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: CHILD FUTURE & EDUCATION INFLATION */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-7">
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor={currentCostId} className="text-sm font-semibold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <GraduationCap className="w-4 h-4 text-amulya-orange" />
                        Today&apos;s Cost of Target Education
                      </label>
                      <span className="font-mono text-base font-bold text-slate-900 bg-orange-50 border border-orange-200 px-3 py-1 rounded-lg">
                        {formatINR(currentCost)}
                      </span>
                    </div>
                    <input
                      id={currentCostId}
                      type="range"
                      min={500000}
                      max={20000000}
                      step={500000}
                      value={currentCost}
                      onChange={(e) => setCurrentCost(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-mono">
                      <span>₹5 Lakh</span>
                      <span>₹50 Lakh</span>
                      <span>₹1 Crore</span>
                      <span>₹2 Crore</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor={yearsToCollegeId} className="text-sm font-semibold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-4 h-4 text-amulya-orange" />
                        Years Until College / Degree Begins
                      </label>
                      <span className="font-mono text-base font-bold text-slate-900 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">
                        {yearsToCollege} Years
                      </span>
                    </div>
                    <input
                      id={yearsToCollegeId}
                      type="range"
                      min={1}
                      max={20}
                      step={1}
                      value={yearsToCollege}
                      onChange={(e) => setYearsToCollege(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label htmlFor={educationInflationId} className="text-sm font-semibold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <TrendingUp className="w-4 h-4 text-orange-600" />
                        Education Inflation Rate
                      </label>
                      <span className="font-mono text-base font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-lg">
                        {educationInflation}% p.a.
                      </span>
                    </div>
                    <input
                      id={educationInflationId}
                      type="range"
                      min={6}
                      max={14}
                      step={0.5}
                      value={educationInflation}
                      onChange={(e) => setEducationInflation(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0A1E3F] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-sky-200">
                      Inflated Cost at Admission
                    </div>
                    <div className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold text-orange-400 tracking-tight">
                      {formatINR(educationResult.futureCost)}
                    </div>

                    <div className="mt-6 space-y-3.5 border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Required Monthly SIP</span>
                        <span className="font-mono font-bold text-orange-400 text-base">
                          ₹{formatNumberINR(educationResult.monthlyNeeded)}/mo
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Today&apos;s Baseline Cost</span>
                        <span className="font-mono text-slate-200">
                          {formatINR(currentCost)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Inflation Addition</span>
                        <span className="font-mono text-sky-300 font-semibold">
                          +{formatINR(educationResult.inflationHike)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() =>
                        onOpenConsultation
                          ? onOpenConsultation(
                              `Child Education Fund: Future Goal ${formatINR(
                                educationResult.futureCost
                              )} in ${yearsToCollege} yrs (Req. SIP: ₹${formatNumberINR(
                                educationResult.monthlyNeeded
                              )}/mo)`
                            )
                          : document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Secure Child&apos;s Education Plan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
