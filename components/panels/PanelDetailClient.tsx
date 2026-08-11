"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { LightboxImage } from "@/components/ui/LightboxImage";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PanelNavigation } from "@/components/panels/PanelNavigation";
import { Badge } from "@/components/ui/Badge";
import { Panel } from "@/types";
import { useFontSize } from "@/hooks/useFontSize";

interface PanelDetailClientProps {
  panel: Panel;
  prev?: Panel;
  next?: Panel;
}

export function PanelDetailClient({ panel, prev, next }: PanelDetailClientProps) {
  const { fontSize, changeFontSize, getFontSizeClass } = useFontSize();

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19]">
      <Header
        variant="detail"
        fontSize={fontSize}
        onFontSizeChange={changeFontSize}
        panelTitle={panel.title}
      />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">
        {/* Top Navigation */}
        <PanelNavigation prev={prev} next={next} />

        {/* Main Content Card */}
        <div className="bg-white text-gray-900 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 border border-gray-200">
          {/* Badge */}
          <div className="mb-3">
            <Badge variant="teal" className="text-xs uppercase tracking-wider px-3 py-1">
              {panel.id} - {panel.roomLabel}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight leading-snug border-b pb-4 border-gray-200">
            {panel.title}
          </h1>

          {/* Audio Player */}
          {panel.audioSrc && (
            <AudioPlayer
              audioSrc={panel.audioSrc}
              durationText={panel.audioDuration}
            />
          )}

          {/* Image Section */}
          <div className="mt-8 mb-6">
            <div className="flex items-center justify-between mb-3 text-xs md:text-sm font-bold">
              <span className="text-gray-700 uppercase tracking-wide">HÌNH ÁNH MẢNG ÁNH</span>
              <span className="text-blue-600 font-normal hover:underline cursor-pointer">
                (CLICK VÀO ÁNH ĐỂ PHÓNG TO)
              </span>
            </div>

            <LightboxImage src={panel.imageSrc} alt={panel.title} />
          </div>

          {/* Text Content Thuyết Minh */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-base md:text-lg font-bold text-gray-800 uppercase mb-4 tracking-wide">
              Nội dung bài thuyết minh
            </h2>

            <div className={`text-gray-800 space-y-4 font-normal whitespace-pre-line ${getFontSizeClass()}`}>
              {panel.content}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-6">
          <PanelNavigation prev={prev} next={next} />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
