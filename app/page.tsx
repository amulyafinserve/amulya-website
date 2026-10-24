"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WealthCalculator from "@/components/WealthCalculator";
import ServicesGrid from "@/components/ServicesGrid";
import FounderSection from "@/components/FounderSection";
import KnowledgeHub from "@/components/KnowledgeHub";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import { X, Sparkles, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [prefilledNote, setPrefilledNote] = useState<string>("");

  const handleOpenConsultation = (note?: string) => {
    if (note) {
      setPrefilledNote(note);
    }
    setConsultationModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setPrefilledNote(`Inquiry regarding: ${serviceName}`);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      setConsultationModalOpen(true);
    }
  };

  return (
    <main className="relative min-h-screen bg-obsidian text-slate-100 flex flex-col selection:bg-gold/20 selection:text-gold-light">
      {/* Elevated Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Hero Section */}
      <Hero onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Wealth Compounding Suite */}
      <WealthCalculator onOpenConsultation={handleOpenConsultation} />

      {/* Bento Grid Services Architecture */}
      <ServicesGrid onSelectService={handleSelectService} />

      {/* Founder Spotlight & Institutional Pedigree */}
      <FounderSection />

      {/* Curated Media & Knowledge Hub */}
      <KnowledgeHub />

      {/* Lead Intake & WhatsApp Integration */}
      <LeadForm prefilledNote={prefilledNote} />

      {/* Regulatory Footer */}
      <Footer />

      {/* Quick Booking Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#09101C] border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Advisory Priority
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Book a Private Wealth Session
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with <strong className="text-white">Mr. M K Jayaprakash</strong> (Ex-VP Motilal Oswal Securities) to audit your asset allocation and construct your family roadmap.
              </p>

              {prefilledNote && (
                <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-xs text-gold font-mono">
                  {prefilledNote}
                </div>
              )}

              <div className="space-y-2 pt-2">
                <a
                  href="tel:+919879583119"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-obsidian bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 transition-all flex items-center justify-center gap-2 shadow-gold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now: +91 9879583119</span>
                </a>

                <a
                  href={`https://wa.me/919879583119?text=${encodeURIComponent(
                    `Hello Amulya Wealth, I would like to schedule a private portfolio consultation. ${prefilledNote}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
                >
                  <span>Connect on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setConsultationModalOpen(false);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors text-center"
                >
                  Or fill out detailed intake form ↓
                </button>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Fiduciary Ethics
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Confidential
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
