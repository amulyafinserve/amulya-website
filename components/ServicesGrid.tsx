"use client";

import React from "react";
import {
  Compass,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Building2,
  Lock,
  Award,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

interface ServicesGridProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const services = [
    {
      id: "planning",
      title: "Holistic Financial & Goal Planning",
      badge: "Core Architecture",
      category: "Advisory Mandate",
      desc: "Milestone-driven roadmap engineering for retirement freedom, child higher education, and life goal prioritization with rigorous risk management.",
      features: [
        "Cash flow & asset liability mapping",
        "Retirement corpus stress testing",
        "Tax-efficient asset location",
      ],
      icon: Compass,
      colSpan: "lg:col-span-7",
    },
    {
      id: "pms",
      title: "Portfolio Management Services (PMS)",
      badge: "Ultra-HNI Mandates",
      category: "High-Conviction Equity",
      desc: "Bespoke, concentrated equity portfolios managed by India's top asset managers, focused on alpha generation and compounding over multi-year cycles.",
      features: [
        "Direct equity ownership",
        "High conviction 15-25 stock portfolios",
        "Regular institutional manager reviews",
      ],
      icon: ShieldCheck,
      colSpan: "lg:col-span-5",
    },
    {
      id: "mf",
      title: "Mutual Fund Portfolio Construction",
      badge: "Disciplined Compounding",
      category: "AMFI Registered",
      desc: "Scientific asset allocation matching your risk tolerance. Active rebalancing, fund manager track record screening, and periodic tax harvesting.",
      features: [
        "No bias or distributor churn",
        "Multi-cap, flexi-cap & hybrid balancing",
        "Digital paperless onboarding",
      ],
      icon: TrendingUp,
      colSpan: "lg:col-span-4",
    },
    {
      id: "broking",
      title: "Equity Broking & Derivatives (Motilal Oswal)",
      badge: "Institutional Alliance",
      category: "NSE / BSE Trading",
      desc: "Institutional grade research, algorithmic trade execution, and derivatives advisory backed by former leadership and active partnership with Motilal Oswal.",
      features: [
        "Award-winning equity research reports",
        "Direct dealing desk support",
        "Advanced margin trading facility (MTF)",
      ],
      icon: Building2,
      colSpan: "lg:col-span-4",
    },
    {
      id: "pe",
      title: "Private Equity & Pre-IPO Mandates",
      badge: "Exclusive Access",
      category: "Unlisted Growth",
      desc: "Curated allocations in high-growth unlisted enterprises and late-stage pre-IPO leaders before public market debut.",
      features: [
        "Vetted corporate governance checks",
        "Access to disruptive tech & industrial leaders",
        "Transparent depository transfers",
      ],
      icon: Sparkles,
      colSpan: "lg:col-span-4",
    },
    {
      id: "bonds",
      title: "Fixed Income & Sovereign Bonds",
      badge: "Capital Preservation",
      category: "Sovereign / Corporate Debt",
      desc: "High-safety sovereign instruments, PSU debt, structured corporate debentures, and tax-free bonds for predictable family cash flow.",
      features: [
        "AAA / Sovereign security focus",
        "Regular interest payouts & cash flow matching",
        "Inflation hedging mechanics",
      ],
      icon: Lock,
      colSpan: "lg:col-span-6",
    },
    {
      id: "estate",
      title: "Will, Trust & Succession Planning",
      badge: "Multi-Generational Legacy",
      category: "Fiduciary Structuring",
      desc: "Safeguard your family's generational continuity. Structuring family trusts, formal wills, and smooth asset distribution without legal dispute.",
      features: [
        "Family governance charters",
        "Private revocable & irrevocable trusts",
        "Smooth cross-generation inheritance",
      ],
      icon: Award,
      colSpan: "lg:col-span-6",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-300 text-amulya-blue text-xs font-bold uppercase tracking-wider mb-4">
            Private Wealth Architecture
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Institutional Solutions For Every Horizon
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From wealth preservation to aggressive equity compounding and intergenerational transmission, our offerings provide institutional security with personalized family office attention.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className={`${svc.colSpan} group relative rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-orange-300 p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col justify-between overflow-hidden`}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 text-amulya-blue group-hover:bg-amulya-orange group-hover:text-white group-hover:border-amulya-orange shadow-sm transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-amulya-orange bg-orange-50 border border-orange-200/80 px-2.5 py-1 rounded-full">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-amulya-orange transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {svc.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-6 pt-5 border-t border-slate-200/60 space-y-2.5">
                    {svc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(svc.title);
                      } else {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 group-hover:text-amulya-orange transition-colors cursor-pointer"
                  >
                    <span>Request Strategy Brief</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    {svc.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
