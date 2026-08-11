"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "@/components/ui/SearchBar";
import { FontSizeControl } from "@/components/ui/FontSizeControl";
import { QRModal } from "@/components/ui/QRModal";
import { FontSizeLevel } from "@/hooks/useFontSize";
import { QrCode, Share2, ChevronLeft } from "lucide-react";

interface HeaderProps {
  variant?: "list" | "detail";
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  fontSize?: FontSizeLevel;
  onFontSizeChange?: (size: FontSizeLevel) => void;
  panelTitle?: string;
}

export function Header({
  variant = "list",
  searchQuery = "",
  onSearchChange,
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
    <header className="w-full bg-[#800000] border-t-2 border-b-2 border-[#d4af37] text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 md:gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {variant === "detail" && (
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#e5c158] hover:text-amber-200 transition-colors flex-shrink-0 group border-r border-amber-500/30 pr-2 sm:pr-4"
              title="Quay lại danh sách mảng ảnh"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5c158] group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden xs:inline sm:inline tracking-wider">DANH SÁCH MẢNG ẢNH</span>
            </Link>
          )}

          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <Image
                src="/images/logo-emblem.jpg"
                alt="Emblem"
                fill
                className="object-contain drop-shadow"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-sm md:text-base font-bold text-[#e5c158] tracking-wide uppercase leading-tight group-hover:text-amber-200 transition truncate">
                THUYẾT MINH & NỘI DUNG MẢNG ẢNH
              </h1>
              <p className="text-[9px] sm:text-[11px] font-semibold text-gray-200 uppercase tracking-widest truncate">
                PHÒNG HỒ CHÍ MINH
              </p>
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {variant === "list" ? (
            onSearchChange && (
              <SearchBar value={searchQuery} onChange={onSearchChange} />
            )
          ) : (
            <>
              {onFontSizeChange && (
                <FontSizeControl
                  currentSize={fontSize}
                  onSizeChange={onFontSizeChange}
                />
              )}

              <button
                onClick={() => setIsQRModalOpen(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-[#1a233b] hover:bg-[#253254] border border-amber-500/50 rounded-md text-xs font-semibold text-[#e5c158] transition shadow-sm"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">MÃ QR</span>
              </button>

              <button
                onClick={handleShare}
                className="p-1.5 bg-[#1a233b] hover:bg-[#253254] border border-gray-600 rounded-md text-gray-300 hover:text-white transition"
                title={copiedShare ? "Đã sao chép liên kết!" : "Chia sẻ bài thuyết minh"}
              >
                <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        title={panelTitle || "THUYẾT MINH & NỘI DUNG MẢNG ẢNH"}
      />
    </header>
  );
}
