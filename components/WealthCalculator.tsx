"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Home,
  Car,
  Palmtree,
  Shield,
  Sun,
  Target,
  Coins,
  PiggyBank,
  Calculator,
  Percent,
  Calendar,
  Wallet,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { formatINR, formatNumberINR } from "@/lib/utils";

interface GoalPlanningProps {
  onOpenConsultation?: (prefillNote?: string) => void;
}

export default function WealthCalculator({ onOpenConsultation }: GoalPlanningProps) {
  const [activeTab, setActiveTab] = useState<"sip" | "crorepati" | "education" | "emi">("sip");

  // Tab 1: SIP States
  const [sipMonthly, setSipMonthly] = useState<number>(25000);
  const [sipReturnRate, setSipReturnRate] = useState<number>(13.5);
  const [sipYears, setSipYears] = useState<number>(15);

  // Tab 2: Crorepati States
  const [targetCorpus, setTargetCorpus] = useState<number>(50000000); // 5 Crore
  const [targetYears, setTargetYears] = useState<number>(12);
  const [targetReturnRate, setTargetReturnRate] = useState<number>(13.5);

  // Tab 3: Child Education States
  const [currentCost, setCurrentCost] = useState<number>(2500000); // 25 Lakhs
  const [yearsToCollege, setYearsToCollege] = useState<number>(10);
  const [educationInflation, setEducationInflation] = useState<number>(10);
  const [educationReturnRate, setEducationReturnRate] = useState<number>(12.5);

  // Tab 4: EMI Calculator States
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakhs
  const [loanRate, setLoanRate] = useState<number>(8.5);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);

  // 12 Goals & Tools from Original Amulya Website
  const goalTiles = [
    { title: "Child's Education", icon: GraduationCap, tab: "education" as const, color: "bg-sky-600 text-white" },
    { title: "Childs Marriage", icon: Heart, tab: "crorepati" as const, color: "bg-pink-600 text-white" },
    { title: "Dream House", icon: Home, tab: "emi" as const, color: "bg-emerald-600 text-white" },
    { title: "Dream Car", icon: Car, tab: "sip" as const, color: "bg-blue-600 text-white" },
    { title: "Dream Vacation", icon: Palmtree, tab: "sip" as const, color: "bg-amber-600 text-white" },
    { title: "Family Protection", icon: Shield, tab: "sip" as const, color: "bg-orange-600 text-white" },
    { title: "Retirement Planning", icon: Sun, tab: "sip" as const, color: "bg-teal-600 text-white" },
    { title: "Custom Goal", icon: Target, tab: "crorepati" as const, color: "bg-red-600 text-white" },
    { title: "Crorepati Calculator", icon: Coins, tab: "crorepati" as const, color: "bg-indigo-600 text-white" },
    { title: "SIP Planner", icon: PiggyBank, tab: "sip" as const, color: "bg-purple-600 text-white" },
    { title: "FV Calculator", icon: Calculator, tab: "sip" as const, color: "bg-rose-600 text-white" },
    { title: "EMI Calculator", icon: Calculator, tab: "emi" as const, color: "bg-emerald-700 text-white" },
  ];

  // Calculation Math for SIP
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

  // Calculation Math for Crorepati
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

  // Calculation Math for Education
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

  // Calculation Math for EMI
  const calculateEMI = () => {
    const P = loanAmount;
    const r = loanRate / 12 / 100;
    const n = loanTenureYears * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;
    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  };

  const sipResult = calculateSIP();
  const crorepatiResult = calculateCrorepati();
  const educationResult = calculateEducation();
  const emiResult = calculateEMI();

  const sipMonthlyId = useId();
  const sipReturnRateId = useId();
  const sipYearsId = useId();
  const targetYearsId = useId();
  const targetReturnRateId = useId();
  const currentCostId = useId();
  const yearsToCollegeId = useId();
  const educationInflationId = useId();
  const loanAmountId = useId();
  const loanRateId = useId();
  const loanTenureYearsId = useId();

  return (
    <section id="goals" className="py-20 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Exact Section Header from Original Site */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            Goal Based Planning
          </h2>
          <div className="w-16 h-1 bg-amulya-orange mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your milestone below to calculate the disciplined monthly investment required to achieve it.
          </p>
        </div>

        {/* 12 Goal Tiles from Original Site */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {goalTiles.map((tile, idx) => {
            const Icon = tile.icon;
            const isCurrentActive = activeTab === tile.tab;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(tile.tab);
                  document.getElementById("interactive-calculator")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 shadow-sm border ${
                  isCurrentActive
                    ? "border-orange-500 ring-2 ring-orange-500/30 bg-white"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className={`p-3 rounded-xl mb-2 ${tile.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  {tile.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Calculator Engine Card */}
        <div
          id="interactive-calculator"
          className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-card relative overflow-hidden"
        >
          {/* Active Calculator Tabs Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-slate-100 pb-5">
            <button
              onClick={() => setActiveTab("sip")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "sip"
                  ? "bg-amulya-orange text-white shadow-orange"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              SIP Planner & Compounding
            </button>

            <button
              onClick={() => setActiveTab("crorepati")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "crorepati"
                  ? "bg-amulya-orange text-white shadow-orange"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Crorepati & Marriage Blueprint
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "education"
                  ? "bg-amulya-orange text-white shadow-orange"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Child Education & Inflation
            </button>

            <button
              onClick={() => setActiveTab("emi")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "emi"
                  ? "bg-amulya-orange text-white shadow-orange"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              EMI Calculator (Dream House/Car)
            </button>
          </div>

          <AnimatePresence mode="wait">
            {/* TAB 1: SIP */}
            {activeTab === "sip" && (
              <motion.div
                key="sip"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={sipMonthlyId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
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
                      min={1000}
                      max={500000}
                      step={1000}
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                      <span>₹1,000</span>
                      <span>₹1,00,000</span>
                      <span>₹5,00,000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={sipReturnRateId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Percent className="w-4 h-4 text-sky-600" />
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
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={sipYearsId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-4 h-4 text-amulya-orange" />
                        Investment Period
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
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0A1E3F] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-sky-200">
                      Estimated Future Value (FV)
                    </div>
                    <div className="mt-2 font-sans text-3xl sm:text-4xl font-extrabold text-orange-400">
                      {formatINR(sipResult.maturity)}
                    </div>

                    <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Total Invested Amount:</span>
                        <span className="font-mono font-bold text-white">{formatINR(sipResult.invested)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Estimated Wealth Gain:</span>
                        <span className="font-mono font-bold text-orange-400">+{formatINR(sipResult.wealthGain)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() =>
                        onOpenConsultation?.(
                          `SIP Plan: ₹${formatNumberINR(sipMonthly)}/mo for ${sipYears} yrs`
                        )
                      }
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Start Your SIP Plan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: CROREPATI */}
            {activeTab === "crorepati" && (
              <motion.div
                key="crorepati"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <label className="text-sm font-bold text-slate-800 block mb-2">
                      Target Goal Corpus
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[10000000, 25000000, 50000000, 100000000].map((corpus) => (
                        <button
                          key={corpus}
                          onClick={() => setTargetCorpus(corpus)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold font-mono transition-all border ${
                            targetCorpus === corpus
                              ? "bg-amulya-orange text-white border-amulya-orange shadow-sm"
                              : "bg-slate-50 text-slate-800 border-slate-200 hover:border-amulya-orange"
                          }`}
                        >
                          {formatINR(corpus)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={targetYearsId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-4 h-4 text-amulya-orange" />
                        Target Timeframe
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
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={targetReturnRateId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Percent className="w-4 h-4 text-sky-600" />
                        Assumed Return Rate
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
                      Required Monthly SIP
                    </div>
                    <div className="mt-2 font-sans text-3xl sm:text-4xl font-extrabold text-orange-400">
                      ₹{formatNumberINR(crorepatiResult.monthlyNeeded)}{" "}
                      <span className="text-sm font-normal text-slate-300">/ mo</span>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Target Goal:</span>
                        <span className="font-mono font-bold text-white">{formatINR(targetCorpus)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Market Wealth Gain:</span>
                        <span className="font-mono font-bold text-orange-400">+{formatINR(crorepatiResult.wealthGain)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() =>
                        onOpenConsultation?.(
                          `Goal Target: ${formatINR(targetCorpus)} in ${targetYears} years`
                        )
                      }
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Plan This Goal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: EDUCATION */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={currentCostId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
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
                      max={15000000}
                      step={500000}
                      value={currentCost}
                      onChange={(e) => setCurrentCost(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={yearsToCollegeId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-4 h-4 text-amulya-orange" />
                        Years Until College
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
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={educationInflationId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Percent className="w-4 h-4 text-sky-600" />
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
                    <div className="mt-2 font-sans text-3xl sm:text-4xl font-extrabold text-orange-400">
                      {formatINR(educationResult.futureCost)}
                    </div>

                    <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Required Monthly SIP:</span>
                        <span className="font-mono font-bold text-orange-400 text-base">₹{formatNumberINR(educationResult.monthlyNeeded)}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Current Cost Today:</span>
                        <span className="font-mono font-bold text-white">{formatINR(currentCost)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() =>
                        onOpenConsultation?.(
                          `Child Education: Target ${formatINR(educationResult.futureCost)} in ${yearsToCollege} yrs`
                        )
                      }
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Secure Education Plan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: EMI (DREAM HOUSE & DREAM CAR) */}
            {activeTab === "emi" && (
              <motion.div
                key="emi"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={loanAmountId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Home className="w-4 h-4 text-amulya-orange" />
                        Loan Amount (Dream House / Car)
                      </label>
                      <span className="font-mono text-base font-bold text-slate-900 bg-orange-50 border border-orange-200 px-3 py-1 rounded-lg">
                        {formatINR(loanAmount)}
                      </span>
                    </div>
                    <input
                      id={loanAmountId}
                      type="range"
                      min={500000}
                      max={20000000}
                      step={500000}
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={loanRateId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Percent className="w-4 h-4 text-sky-600" />
                        Interest Rate (p.a.)
                      </label>
                      <span className="font-mono text-base font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-lg">
                        {loanRate}%
                      </span>
                    </div>
                    <input
                      id={loanRateId}
                      type="range"
                      min={6.5}
                      max={15}
                      step={0.25}
                      value={loanRate}
                      onChange={(e) => setLoanRate(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={loanTenureYearsId} className="text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                        <Calendar className="w-4 h-4 text-amulya-orange" />
                        Loan Tenure
                      </label>
                      <span className="font-mono text-base font-bold text-slate-900 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">
                        {loanTenureYears} Years
                      </span>
                    </div>
                    <input
                      id={loanTenureYearsId}
                      type="range"
                      min={1}
                      max={30}
                      step={1}
                      value={loanTenureYears}
                      onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                      className="w-full cursor-pointer"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0A1E3F] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-sky-200">
                      Calculated Monthly EMI
                    </div>
                    <div className="mt-2 font-sans text-3xl sm:text-4xl font-extrabold text-orange-400">
                      ₹{formatNumberINR(emiResult.emi)}{" "}
                      <span className="text-sm font-normal text-slate-300">/ mo</span>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Principal Amount:</span>
                        <span className="font-mono font-bold text-white">{formatINR(loanAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Total Interest Payable:</span>
                        <span className="font-mono font-bold text-sky-300">+{formatINR(emiResult.totalInterest)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Total Payment (Principal + Interest):</span>
                        <span className="font-mono font-bold text-orange-400">{formatINR(emiResult.totalPayment)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() =>
                        onOpenConsultation?.(
                          `Loan Planning: ${formatINR(loanAmount)} for ${loanTenureYears} yrs (EMI: ₹${formatNumberINR(emiResult.emi)}/mo)`
                        )
                      }
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Inquire About Loan Solutions</span>
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
