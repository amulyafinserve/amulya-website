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
      desc: "Milestone-driven roadmap engineering for retirement freedom, child higher education, and life goal prioritization with rigorous risk management.",
      features: [
        "Cash flow & asset liability mapping",
        "Retirement corpus stress testing",
        "Tax-efficient asset location",
      ],
      icon: Compass,
      colSpan: "lg:col-span-7",
      highlight: true,
    },
    {
      id: "pms",
      title: "Portfolio Management Services (PMS)",
      badge: "Ultra-HNI Mandates",
      desc: "Bespoke, concentrated equity portfolios managed by India's top asset managers, focused on alpha generation and compounding over multi-year cycles.",
      features: [
        "Direct equity ownership",
        "High conviction 15-25 stock portfolios",
        "Regular institutional manager reviews",
      ],
      icon: ShieldCheck,
      colSpan: "lg:col-span-5",
      highlight: false,
    },
    {
      id: "mf",
      title: "Mutual Fund Portfolio Construction",
      badge: "Disciplined Compounding",
      desc: "Scientific asset allocation matching your risk tolerance. Active rebalancing, fund manager track record screening, and periodic tax harvesting.",
      features: [
        "No bias or distributor churn",
        "Multi-cap, flexi-cap & hybrid balancing",
        "Digital paperless onboarding",
      ],
      icon: TrendingUp,
      colSpan: "lg:col-span-4",
      highlight: false,
    },
    {
      id: "broking",
      title: "Equity Broking & Derivatives (Motilal Oswal)",
      badge: "Institutional Alliance",
      desc: "Institutional grade research, algorithmic trade execution, and derivatives advisory backed by former leadership and active partnership with Motilal Oswal.",
      features: [
        "Award-winning equity research reports",
        "Direct dealing desk support",
        "Advanced margin trading facility (MTF)",
      ],
      icon: Building2,
      colSpan: "lg:col-span-4",
      highlight: true,
    },
    {
      id: "pe",
      title: "Private Equity & Pre-IPO Mandates",
      badge: "Exclusive Access",
      desc: "Curated allocations in high-growth unlisted enterprises and late-stage pre-IPO unicorns before public market debut.",
      features: [
        "Vetted corporate governance checks",
        "Access to disruptive tech & industrial leaders",
        "Transparent depository transfers",
      ],
      icon: Sparkles,
      colSpan: "lg:col-span-4",
      highlight: false,
    },
    {
      id: "bonds",
      title: "Fixed Income & Sovereign Bonds",
      badge: "Capital Preservation",
      desc: "High-safety sovereign instruments, PSU debt, structured corporate debentures, and tax-free bonds for predictable family cash flow.",
      features: [
        "AAA / Sovereign security focus",
        "Regular interest payouts & cash flow matching",
        "Inflation hedging mechanics",
      ],
      icon: Lock,
      colSpan: "lg:col-span-6",
      highlight: false,
    },
    {
      id: "estate",
      title: "Will, Trust & Succession Planning",
      badge: "Multi-Generational Legacy",
      desc: "Safeguard your family's generational continuity. Structuring family trusts, formal wills, and smooth asset distribution without legal dispute.",
      features: [
        "Family governance charters",
        "Private revocable & irrevocable trusts",
        "Smooth cross-generation inheritance",
      ],
      icon: Award,
      colSpan: "lg:col-span-6",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#060B13] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            Private Wealth Architecture
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Institutional Solutions For Every Horizon
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            From wealth preservation to aggressive equity compounding and intergenerational transmission, our offerings are designed to provide institutional security with boutique attention.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className={`${svc.colSpan} group relative rounded-3xl bg-[#09101C]/80 border border-white/[0.08] hover:border-gold/50 backdrop-blur-xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle top corner ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-gold group-hover:bg-gold/15 group-hover:text-gold-light group-hover:border-gold/40 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-gold bg-gold/10 border border-gold/25 px-2.5 py-1 rounded-full">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                    {svc.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
                    {svc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(svc.title);
                      } else {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-gold transition-colors"
                  >
                    <span>Request Strategy Brief</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[10px] uppercase font-mono text-slate-400 tracking-widest">
                    AFS-SOL-{svc.id.toUpperCase()}
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
