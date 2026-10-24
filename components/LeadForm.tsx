"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Phone,
  Mail,
  User,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface LeadFormProps {
  prefilledNote?: string;
}

export default function LeadForm({ prefilledNote }: LeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [wealthBracket, setWealthBracket] = useState("₹25L - ₹1 Cr");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Financial Planning",
    "Mutual Funds",
  ]);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledNote) {
      setMessage((prev) => (prev ? `${prev}\n[Calculation Reference: ${prefilledNote}]` : `[Calculation Reference: ${prefilledNote}]`));
    }
  }, [prefilledNote]);

  const wealthBrackets = [
    "< ₹25 Lakhs",
    "₹25L - ₹1 Crore",
    "₹1 Cr - ₹5 Crore",
    "₹5 Crore+",
  ];

  const serviceOptions = [
    "Financial Planning",
    "Mutual Funds",
    "PMS Mandates",
    "Equity Broking (Motilal)",
    "Fixed Income & Bonds",
    "Will & Estate Planning",
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter((s) => s !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API lead intake & immediate WhatsApp handoff option
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Amulya Wealth, I would like to schedule a private portfolio consultation.\nName: ${fullName || "Prospective Client"}\nPortfolio Target: ${wealthBracket}\nServices: ${selectedServices.join(", ")}`
  );

  return (
    <section id="contact" className="py-24 relative bg-[#04080E] border-t border-white/[0.06]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Fiduciary Promise & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Confidential Portfolio Consultation
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Architect Your Family&apos;s Financial Future
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Schedule a confidential, one-on-one wealth consultation with former institutional leadership. No cold calls, no sales pressure—only disciplined portfolio strategy.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+919879583119"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#09101C] border border-white/[0.08] hover:border-gold/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Advisory Desk</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-gold transition-colors font-mono">
                    +91 9879583119
                  </div>
                </div>
              </a>

              <a
                href="mailto:info.amulyawealth@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#09101C] border border-white/[0.08] hover:border-gold/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Official Communications</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-gold transition-colors">
                    info.amulyawealth@gmail.com
                  </div>
                </div>
              </a>
            </div>

            {/* Fiduciary Commitment Guarantees */}
            <div className="p-6 rounded-2xl bg-[#09101C]/60 border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>Strict Client Data Non-Disclosure & Privacy</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prompt Advisor Callback within 2 Business Hours</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Institutional Due-Diligence for Every Strategy</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#09101C]/90 border border-white/10 backdrop-blur-2xl p-7 sm:p-10 shadow-2xl relative overflow-hidden">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Consultation Request Confirmed
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{fullName || "Valued Investor"}</span>. Mr. M K Jayaprakash and the Amulya advisory desk will review your requirements and reach out to you within 2 business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919879583119?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Request a Private Portfolio Audit
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete this brief form to align your family&apos;s goals with our advisory mandate.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Rajesh Mehta"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh@domain.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Target Portfolio Bracket */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-2">
                      Target Portfolio / Investment Capital
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {wealthBrackets.map((bracket) => (
                        <button
                          type="button"
                          key={bracket}
                          onClick={() => setWealthBracket(bracket)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all border ${
                            wealthBracket === bracket
                              ? "bg-gold/20 text-gold-light border-gold shadow-gold"
                              : "bg-white/[0.02] text-slate-300 border-white/10 hover:border-gold/30"
                          }`}
                        >
                          {bracket}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services of Interest Multi-select */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-2">
                      Services of Interest (Select All That Apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                              isSelected
                                ? "bg-amber-400 text-obsidian border-amber-400 font-semibold"
                                : "bg-white/[0.02] text-slate-300 border-white/10 hover:border-gold/30"
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Specific Goals / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. I want to restructure my mutual funds for retirement and explore Motilal Oswal PMS."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-semibold text-obsidian bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 transition-all duration-300 shadow-gold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Submitting Mandate..." : "Confirm Consultation Request"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Direct WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919879583119?text=Hello%20Amulya%20Wealth%2C%20I%20would%20like%20to%20schedule%20a%20private%20portfolio%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Connect on WhatsApp"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute -top-1 -right-1" />
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            Chat With Wealth Advisor
          </span>
        </a>
      </div>
    </section>
  );
}
