"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface LightboxImageProps {
  src: string;
  alt: string;
}

export function LightboxImage({ src, alt }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative group cursor-zoom-in rounded-lg overflow-hidden border border-gray-300 shadow-md bg-white transition hover:shadow-xl"
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover transition duration-300 group-hover:scale-[1.01]"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-medium text-sm gap-2">
          <ZoomIn className="w-5 h-5" /> Click để phóng to
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
