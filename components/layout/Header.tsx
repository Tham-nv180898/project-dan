"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontSizeControl } from "@/components/ui/FontSizeControl";
import { QRModal } from "@/components/ui/QRModal";
import { FontSizeLevel } from "@/hooks/useFontSize";
import { QrCode, Share2, ChevronLeft, Check } from "lucide-react";

interface HeaderProps {
  variant?: "list" | "detail";
  fontSize?: FontSizeLevel;
  onFontSizeChange?: (size: FontSizeLevel) => void;
  panelTitle?: string;
}

export function Header({
  variant = "list",
  fontSize = "md",
  onFontSizeChange,
  panelTitle = ""
}: HeaderProps) {
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
    <header className="w-full bg-gradient-to-b from-[#8f0000] to-[#700000] border-t-2 border-b-2 border-[#c5a059] text-white shadow-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Back Button & Logo + Brand & Room */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          {variant === "detail" && (
            <Link
              href="/"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/30 hover:bg-black/50 border border-amber-400/40 rounded-lg text-xs font-bold text-[#e5c158] hover:text-amber-200 transition-all shrink-0 group"
              title="Quay lại danh sách mảng ảnh"
            >
              <ChevronLeft className="w-4 h-4 text-[#e5c158] group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wide">DANH SÁCH</span>
            </Link>
          )}

          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 shrink-0 drop-shadow-md">
              <Image
                src="/images/logo-emblem.png"
                alt="Emblem"
                fill
                className="object-contain"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-sm md:text-base font-extrabold text-[#f3d078] tracking-wide uppercase leading-tight group-hover:text-white transition truncate">
                THUYẾT MINH MẢNG ẢNH
              </h1>
              <p className="text-[10px] sm:text-[11px] font-bold text-amber-100/90 uppercase tracking-widest truncate mt-0.5">
                PHÒNG HỒ CHÍ MINH
              </p>
            </div>
          </Link>
        </div>

        {/* Dedicated Military Unit Badge Box */}
        <div className="flex flex-col items-center justify-center bg-[#500000]/70 border border-amber-400/50 rounded-lg px-2.5 sm:px-4 py-1 shrink-0 shadow-md">
          <span className="text-[10px] sm:text-xs font-extrabold text-[#f3d078] tracking-widest uppercase leading-tight">
            LỮ ĐOÀN 71
          </span>
          <span className="text-[9px] sm:text-[11px] font-bold text-amber-100 uppercase tracking-widest leading-tight mt-0.5">
            TIỂU ĐOÀN 16
          </span>
        </div>

        {/* Right: Actions & Tools (detail page) */}
        {variant === "detail" && (
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {onFontSizeChange && (
              <FontSizeControl
                currentSize={fontSize}
                onSizeChange={onFontSizeChange}
              />
            )}

            <button
              onClick={() => setIsQRModalOpen(true)}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-[#141c30] hover:bg-[#1f2b48] border border-amber-400/50 rounded-lg text-xs font-bold text-[#f3d078] transition shadow-md active:scale-95"
              title="Mã QR bài thuyết minh"
            >
              <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
              <span className="hidden sm:inline">MÃ QR</span>
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 sm:p-2 bg-[#141c30] hover:bg-[#1f2b48] border border-amber-400/30 rounded-lg text-gray-200 hover:text-white transition shadow-md active:scale-95"
              title={copiedShare ? "Đã sao chép liên kết!" : "Chia sẻ bài thuyết minh"}
            >
              {copiedShare ? (
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
              ) : (
                <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200" />
              )}
            </button>
          </div>
        )}
      </div>

      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        title={panelTitle || "THUYẾT MINH MẢNG ẢNH"}
      />
    </header>
  );
}
