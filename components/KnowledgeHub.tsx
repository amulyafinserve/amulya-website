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
      duration: "31 mins",
      source: "IDFC Investor Education Foundation",
      desc: "An acclaimed investor education classic showcasing the transformation from conspicuous consumerism to methodical, compounding freedom.",
      youtubeId: "dffCqPZ5X8E",
      thumbnailGradient: "from-amber-900/60 via-slate-900 to-obsidian",
    },
    {
      id: "compounding-masterclass",
      title: "The Math of Patience: Power of Compounding",
      category: "mf",
      categoryLabel: "Mutual Funds",
      duration: "18 mins",
      source: "Amulya Wealth Advisory Series",
      desc: "Understand how equity indices compound over 10 to 25 year horizons and why volatility is the toll you pay for superior returns.",
      youtubeId: "81z3W8D3-0E",
      thumbnailGradient: "from-emerald-950/70 via-slate-900 to-obsidian",
    },
    {
      id: "market-cycles",
      title: "Navigating Bull & Bear Cycles Without Emotion",
      category: "cycles",
      categoryLabel: "Market Cycles",
      duration: "24 mins",
      source: "Institutional Research Briefing",
      desc: "Behavioral finance insights: Why retail investors exit at bottoms and how asset allocation acts as your psychological shock absorber.",
      youtubeId: "q6h36sK4UjY",
      thumbnailGradient: "from-blue-950/70 via-slate-900 to-obsidian",
    },
    {
      id: "retirement-planning",
      title: "Retirement Readiness & Longevity Risk",
      category: "basics",
      categoryLabel: "Wealth Basics",
      duration: "20 mins",
      source: "FPSB Financial Masterclass",
      desc: "Estimating post-retirement monthly cash flows, medical inflation buffers, and structuring SWP (Systematic Withdrawal Plans).",
      youtubeId: "7L_FhA5z7mQ",
      thumbnailGradient: "from-purple-950/60 via-slate-900 to-obsidian",
    },
  ];

  const filtered = activeFilter === "all" ? mediaList : mediaList.filter((m) => m.category === activeFilter);

  return (
    <section id="insights" className="py-24 relative bg-[#060B13] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Curated Financial Education
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Mastering Financial Freedom
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              We believe educated investors make disciplined partners. Explore our curated film and masterclass library on market behavior and compounding.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Insights" },
              { id: "basics", label: "Wealth Basics" },
              { id: "cycles", label: "Market Cycles" },
              { id: "mf", label: "Mutual Funds" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  activeFilter === tab.id
                    ? "bg-gold text-obsidian border-gold shadow-gold"
                    : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-gold/40"
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
              className="group cursor-pointer rounded-2xl bg-[#09101C]/80 border border-white/[0.08] hover:border-gold/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Preview with Play Icon */}
                <div
                  className={`relative h-44 w-full bg-gradient-to-br ${item.thumbnailGradient} border-b border-white/[0.06] flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  {/* Play Button Icon */}
                  <div className="relative w-14 h-14 rounded-full bg-gold/90 group-hover:bg-gold text-obsidian flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>

                  {/* Badges on Thumbnail */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-gold border border-gold/30">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded font-mono">
                    <Clock className="w-3 h-3 text-gold" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="text-[11px] text-slate-400 font-medium">{item.source}</div>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-gold transition-colors mt-1.5 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-semibold text-gold">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-4xl rounded-3xl bg-[#09101C] border border-white/20 shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
                <div>
                  <span className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                    {selectedVideo.categoryLabel} • {selectedVideo.source}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
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
              <div className="p-4 sm:p-5 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <p className="max-w-2xl">{selectedVideo.desc}</p>
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-obsidian bg-gold hover:bg-gold-light transition-colors"
                >
                  Discuss With Our Advisor
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
