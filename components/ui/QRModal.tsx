"use client";

import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { X, QrCode, Copy, Check } from "lucide-react";

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function QRModal({ isOpen, onClose, title }: QRModalProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-[#121626] border border-amber-600/40 text-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative flex flex-col items-center text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#e5c158] mb-3">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="font-bold text-lg text-[#e5c158] mb-1">MÃ QR BÀI THUYẾT MINH</h3>
        <p className="text-xs text-gray-300 mb-4 line-clamp-2 px-2">{title}</p>

        <div className="bg-white p-4 rounded-xl shadow-inner mb-4 border-4 border-amber-500/30">
          <QRCodeSVG value={currentUrl || "https://localhost:3000"} size={180} level="H" />
        </div>

        <p className="text-xs text-gray-400 mb-3">Quét mã QR bằng điện thoại để xem trực tiếp</p>

        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 rounded-lg text-sm text-amber-300 font-medium transition"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" /> Đã sao chép liên kết
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Sao chép liên kết
            </>
          )}
        </button>
      </div>
    </div>
  );
}
