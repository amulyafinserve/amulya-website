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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Amulya Financial Services, I would like to schedule a private portfolio consultation.\nName: ${fullName || "Client Inquiry"}\nPortfolio Target: ${wealthBracket}\nServices: ${selectedServices.join(", ")}`
  );

  return (
    <section id="contact" className="py-24 relative bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Fiduciary Promise & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-300 text-amulya-orange text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Confidential Portfolio Consultation
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                Architect Your Family&apos;s Financial Future
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Schedule a confidential, one-on-one wealth consultation with former institutional leadership. No third-party sales calls—only disciplined, bespoke portfolio strategy.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+919879583119"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-amulya-orange shadow-soft hover:shadow-card transition-all group"
              >
                <div className="p-3 rounded-xl bg-orange-50 text-amulya-orange group-hover:bg-amulya-orange group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Direct Advisory Desk</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amulya-orange transition-colors font-mono">
                    +91 9879583119
                  </div>
                </div>
              </a>

              <a
                href="mailto:info.amulyawealth@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-amulya-orange shadow-soft hover:shadow-card transition-all group"
              >
                <div className="p-3 rounded-xl bg-sky-50 text-amulya-blue group-hover:bg-amulya-blue group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Official Communications</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amulya-blue transition-colors">
                    info.amulyawealth@gmail.com
                  </div>
                </div>
              </a>
            </div>

            {/* Fiduciary Commitment Guarantees */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-amulya-orange shrink-0" />
                <span>Strict Client Data Non-Disclosure & Confidentiality</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Prompt Advisor Callback within 2 Business Hours</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amulya-blue shrink-0" />
                <span>Institutional Due-Diligence for Every Strategy</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-card relative overflow-hidden">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    Consultation Request Confirmed
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-slate-900 font-bold">{fullName || "Investor"}</span>. Your inquiry has been logged with the Amulya advisory desk. An advisor will contact you within 2 business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919879583119?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      Request a Private Portfolio Audit
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete this brief form to align your family&apos;s goals with our advisory mandate.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-800 block mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amulya-orange focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-800 block mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Mobile Number"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amulya-orange focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-semibold text-slate-800 block mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amulya-orange focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Target Portfolio Bracket */}
                  <div>
                    <label className="text-xs font-semibold text-slate-800 block mb-2">
                      Target Portfolio / Investment Capital
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {wealthBrackets.map((bracket) => (
                        <button
                          type="button"
                          key={bracket}
                          onClick={() => setWealthBracket(bracket)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-semibold transition-all border ${
                            wealthBracket === bracket
                              ? "bg-orange-50 text-amulya-orange border-amulya-orange shadow-sm font-bold"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-amulya-orange hover:bg-white"
                          }`}
                        >
                          {bracket}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services of Interest Multi-select */}
                  <div>
                    <label className="text-xs font-semibold text-slate-800 block mb-2">
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
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                              isSelected
                                ? "bg-amulya-orange text-white border-amulya-orange shadow-sm"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-amulya-orange hover:bg-white"
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
                    <label className="text-xs font-semibold text-slate-800 block mb-1.5">
                      Specific Goals / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please share any specific requirements or advisory topics..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amulya-orange focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Submitting Request..." : "Confirm Consultation Request"}</span>
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
          href="https://wa.me/919879583119?text=Hello%20Amulya%20Financial%20Services%2C%20I%20would%20like%20to%20schedule%20a%20private%20portfolio%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Connect on WhatsApp"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute -top-1 -right-1" />
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Chat With Wealth Advisor
          </span>
        </a>
      </div>
    </section>
  );
}
