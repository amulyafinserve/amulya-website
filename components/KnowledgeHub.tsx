"use client";

import React, { useState } from "react";
import { Play, FileText, Download, X, Clock, Video, CheckCircle2 } from "lucide-react";

interface MediaItem {
  id: string;
  title: string;
  category: "videos" | "forms" | "kyc";
  categoryLabel: string;
  duration: string;
  source: string;
  desc: string;
  youtubeId: string;
  thumbnailGradient: string;
}

export default function KnowledgeHub() {
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);

  const mediaList: MediaItem[] = [
    {
      id: "one-idiot",
      title: "One Idiot: The Benchmark of Financial Discipline",
      category: "videos",
      categoryLabel: "Educational Film",
      duration: "33 mins",
      source: "IDFC Foundation & Amole Gupte",
      desc: "The acclaimed investor awareness film on financial discipline, showing the transformation from reckless consumerism to systematic compounding freedom.",
      youtubeId: "vU1l1TB7GzI",
      thumbnailGradient: "from-orange-600 via-amber-700 to-slate-900",
    },
    {
      id: "return-of-one-idiot",
      title: "Return of One Idiot: Retirement & Compounding Freedom",
      category: "videos",
      categoryLabel: "Educational Film",
      duration: "30 mins",
      source: "Bandhan Mutual Fund (IDFC AMC)",
      desc: "The sequel masterclass film highlighting how disciplined long-term SIPs beat lifestyle inflation and ensure financial independence in retirement.",
      youtubeId: "QmVB-esBQvY",
      thumbnailGradient: "from-sky-700 via-blue-900 to-slate-900",
    },
    {
      id: "motilal-wcs",
      title: "Annual Wealth Creation Study: High-Growth Equities",
      category: "videos",
      categoryLabel: "Market Insights",
      duration: "45 mins",
      source: "Motilal Oswal Financial Services",
      desc: "Institutional framework for identifying wealth-multiplying businesses, understanding longevity of growth, and navigating market cycles.",
      youtubeId: "Lw5Rp9zv2jY",
      thumbnailGradient: "from-slate-800 via-blue-950 to-slate-950",
    },
    {
      id: "power-of-sip",
      title: "The Mathematical Power of Disciplined SIPs",
      category: "videos",
      categoryLabel: "Educational Series",
      duration: "15 mins",
      source: "AMFI Investor Education Series",
      desc: "Why rupee cost averaging and regular reinvestment outperform attempting to time market peaks and troughs.",
      youtubeId: "vU1l1TB7GzI",
      thumbnailGradient: "from-amber-600 via-orange-800 to-slate-900",
    },
  ];

  const resourcePillars = [
    {
      title: "Mutual Fund Forms",
      desc: "Direct access to SIP registration, common transaction slips, nominee updates, and redemption forms across fund houses.",
      icon: FileText,
      linkText: "Request Forms Support",
    },
    {
      title: "KYC / PAN Assistance",
      desc: "Complete your KRA KYC, CKYC validation, FATCA compliance, and PAN-Aadhaar linking with full advisory assistance.",
      icon: CheckCircle2,
      linkText: "Get KYC Support",
    },
    {
      title: "Financial Calculators",
      desc: "Comprehensive suite of goal calculators for Retirement, Child's Education, Marriage, House, Car, and SIP Future Value.",
      icon: Download,
      linkText: "Explore Calculators",
      href: "#goals",
    },
  ];

  return (
    <section id="resources" className="py-20 relative bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Exact Section Header from Original Site */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
            Resources
          </h2>
          <div className="w-16 h-1 bg-amulya-orange mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Essential investor tools, educational videos, regulatory forms, and KYC compliance resources.
          </p>
        </div>

        {/* Resources Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {resourcePillars.map((res, idx) => {
            const Icon = res.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-amulya-orange transition-all"
              >
                <div>
                  <div className="p-3 rounded-xl bg-orange-50 text-amulya-orange w-fit mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                    {res.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {res.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={res.href || "#contact"}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amulya-orange hover:text-orange-700 transition-colors"
                  >
                    <span>{res.linkText}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Videos Header */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
            Educational Videos & Investor Films
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Curated financial education films on saving discipline, compounding, and market cycles.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200 hover:border-amulya-orange overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-card flex flex-col justify-between"
            >
              <div>
                <div
                  className={`relative h-44 w-full bg-gradient-to-br ${item.thumbnailGradient} border-b border-slate-200 flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  <div className="relative w-14 h-14 rounded-full bg-amulya-orange text-white flex items-center justify-center shadow-orange group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded font-mono">
                    <Clock className="w-3 h-3 text-orange-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[11px] text-slate-500 font-semibold">{item.source}</div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amulya-orange transition-colors mt-1.5 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amulya-orange">
                <span className="inline-flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" /> Watch Film
                </span>
                <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-200 bg-slate-50">
                <div>
                  <span className="text-[11px] font-bold text-amulya-orange uppercase tracking-wider">
                    {selectedVideo.categoryLabel} • {selectedVideo.source}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 sm:p-5 bg-white flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <p className="max-w-2xl">{selectedVideo.desc}</p>
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-amulya-orange hover:bg-amulya-orange-hover transition-colors shadow-orange"
                >
                  Schedule Advisory Session
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
