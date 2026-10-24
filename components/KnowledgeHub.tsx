"use client";

import React, { useState } from "react";
import { Play, Sparkles, X, Clock, Video } from "lucide-react";

interface MediaItem {
  id: string;
  title: string;
  category: "basics" | "cycles" | "mf";
  categoryLabel: string;
  duration: string;
  source: string;
  desc: string;
  youtubeId: string;
  thumbnailGradient: string;
}

export default function KnowledgeHub() {
  const [activeFilter, setActiveFilter] = useState<"all" | "basics" | "cycles" | "mf">("all");
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);

  const mediaList: MediaItem[] = [
    {
      id: "one-idiot",
      title: "One Idiot: The Benchmark of Financial Discipline",
      category: "basics",
      categoryLabel: "Wealth Basics",
      duration: "33 mins",
      source: "IDFC Foundation & Amole Gupte",
      desc: "The acclaimed investor awareness film on financial discipline, showing the transformation from reckless consumerism to systematic compounding freedom.",
      youtubeId: "vU1l1TB7GzI",
      thumbnailGradient: "from-orange-600 via-amber-700 to-slate-900",
    },
    {
      id: "return-of-one-idiot",
      title: "Return of One Idiot: Retirement & Compounding Freedom",
      category: "basics",
      categoryLabel: "Wealth Basics",
      duration: "30 mins",
      source: "Bandhan Mutual Fund (IDFC AMC)",
      desc: "The sequel masterclass film highlighting how disciplined long-term SIPs beat lifestyle inflation and ensure financial independence in retirement.",
      youtubeId: "QmVB-esBQvY",
      thumbnailGradient: "from-sky-700 via-blue-900 to-slate-900",
    },
    {
      id: "motilal-wcs",
      title: "Annual Wealth Creation Study: High-Growth Equities",
      category: "mf",
      categoryLabel: "Mutual Funds",
      duration: "45 mins",
      source: "Motilal Oswal Financial Services",
      desc: "Institutional framework for identifying wealth-multiplying businesses, understanding longevity of growth, and navigating market cycles.",
      youtubeId: "Lw5Rp9zv2jY",
      thumbnailGradient: "from-slate-800 via-blue-950 to-slate-950",
    },
    {
      id: "power-of-sip",
      title: "The Mathematical Power of Disciplined SIPs",
      category: "mf",
      categoryLabel: "Mutual Funds",
      duration: "15 mins",
      source: "AMFI Investor Education Series",
      desc: "Why rupee cost averaging and regular reinvestment outperform attempting to time market peaks and troughs.",
      youtubeId: "vU1l1TB7GzI",
      thumbnailGradient: "from-amber-600 via-orange-800 to-slate-900",
    },
  ];

  const filtered = activeFilter === "all" ? mediaList : mediaList.filter((m) => m.category === activeFilter);

  return (
    <section id="insights" className="py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-300 text-amulya-orange text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Curated Financial Education
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Investor Knowledge & Market Films
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              We believe informed investors make disciplined partners. Explore our curated film library on market behavior, compounding, and wealth preservation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Insights" },
              { id: "basics", label: "Wealth Basics" },
              { id: "mf", label: "Mutual Funds" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  activeFilter === tab.id
                    ? "bg-amulya-orange text-white border-amulya-orange shadow-orange"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:border-amulya-orange"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200 hover:border-amulya-orange overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-soft hover:shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Preview with Play Icon */}
                <div
                  className={`relative h-44 w-full bg-gradient-to-br ${item.thumbnailGradient} border-b border-slate-200 flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  {/* Play Button Icon */}
                  <div className="relative w-14 h-14 rounded-full bg-amulya-orange text-white flex items-center justify-center shadow-orange group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>

                  {/* Badges on Thumbnail */}
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

                {/* Card Content */}
                <div className="p-5">
                  <div className="text-[11px] text-slate-500 font-semibold">{item.source}</div>
                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-amulya-orange transition-colors mt-1.5 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
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
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-200 bg-slate-50">
                <div>
                  <span className="text-[11px] font-bold text-amulya-orange uppercase tracking-wider">
                    {selectedVideo.categoryLabel} • {selectedVideo.source}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
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

              {/* Responsive Video Frame */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
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
