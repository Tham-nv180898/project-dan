"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { LightboxImage } from "@/components/ui/LightboxImage";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PanelNavigation } from "@/components/panels/PanelNavigation";
import { FontSizeControl } from "@/components/ui/FontSizeControl";
import { QRModal } from "@/components/ui/QRModal";
import { Badge } from "@/components/ui/Badge";
import { Panel } from "@/types";
import { useFontSize } from "@/hooks/useFontSize";
import { QrCode, Share2, Check } from "lucide-react";

interface PanelDetailClientProps {
  panel: Panel;
  prev?: Panel;
  next?: Panel;
}

export function PanelDetailClient({ panel, prev, next }: PanelDetailClientProps) {
  const { fontSize, changeFontSize, getFontSizeClass } = useFontSize();
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19]">
      <Header
        variant="detail"
        fontSize={fontSize}
        onFontSizeChange={changeFontSize}
        panelTitle={panel.title}
      />

      {/* Mobile Sticky Reading Utility Bar (Visible on mobile < sm) */}
      <div className="sm:hidden sticky top-[57px] z-30 bg-[#121629] border-b border-[#232c4d] px-3 py-2 flex items-center justify-between gap-2 shadow-md">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Cỡ chữ:</span>
          <FontSizeControl currentSize={fontSize} onSizeChange={changeFontSize} />
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsQRModalOpen(true)}
            className="flex items-center gap-1 px-2 py-1 bg-[#1a233b] border border-amber-400/40 rounded-md text-[11px] font-bold text-[#f3d078]"
          >
            <QrCode className="w-3.5 h-3.5 text-amber-300" />
            <span>MÃ QR</span>
          </button>

          <button
            onClick={handleShare}
            className="p-1 bg-[#1a233b] border border-gray-600 rounded-md text-gray-200"
            title={copiedShare ? "Đã sao chép!" : "Chia sẻ"}
          >
            {copiedShare ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Share2 className="w-3.5 h-3.5 text-amber-200" />
            )}
          </button>
        </div>
      </div>

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
              <span className="text-gray-700 uppercase tracking-wide">HÌNH ẢNH MẢNG ẢNH</span>
              <span className="text-blue-600 font-normal hover:underline cursor-pointer">
                (CLICK VÀO ẢNH ĐỂ PHÓNG TO)
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

      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        title={panel.title}
      />

      <ScrollToTop />
      <Footer />
    </div>
  );
}
