"use client";

import React from "react";
import {
  Compass,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Building2,
  Lock,
  ArrowRight,
} from "lucide-react";

interface ServicesGridProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const services = [
    {
      id: "financial-planning",
      title: "FINANCIAL PLANNING",
      desc: "Financial goals can include buying a home, savings for your child's education, planning for your retirement or estate planning.",
      icon: Compass,
      tag: "Goal Orientation",
    },
    {
      id: "mutual-fund",
      title: "MUTUAL FUND",
      desc: "At Amulya our role is to analyse your need and advice and help you to invest as per your need and requirements.",
      icon: TrendingUp,
      tag: "AMFI Registered",
    },
    {
      id: "portfolio-management-service",
      title: "PORTFOLIO MANAGEMENT SERVICE",
      desc: "We at Amulya Financial Services will help you to identify best options for you to choose from select fund houses.",
      icon: ShieldCheck,
      tag: "PMS Mandates",
    },
    {
      id: "private-equity",
      title: "PRIVATE EQUITY",
      desc: "We at Amulya will help you to get best Mandate for you.",
      icon: Sparkles,
      tag: "Unlisted Leaders",
    },
    {
      id: "broking-services",
      title: "BROKING SERVICES",
      desc: "We have partnered with Motilal Oswal Securities Ltd the leading Brokerage service in the Country.",
      icon: Building2,
      tag: "Motilal Oswal Partner",
    },
    {
      id: "fd-bonds",
      title: "FD-BONDS",
      desc: "There are many avenues other than Bank Fixed Deposits.",
      icon: Lock,
      tag: "Capital Preservation",
    },
  ];

  return (
    <section id="services" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Exact Section Header from Original Site */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-amulya-orange mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Customized advice and financial solutions designed for wealth creation and superior execution.
          </p>
        </div>

        {/* 6 Original Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative rounded-2xl bg-white border border-slate-200 hover:border-amulya-orange p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-orange-50 text-amulya-orange group-hover:bg-amulya-orange group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full uppercase">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-amulya-orange transition-colors uppercase tracking-tight">
                    {svc.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(svc.title);
                      } else {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amulya-orange hover:text-orange-700 transition-colors cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
