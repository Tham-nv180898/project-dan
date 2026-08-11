"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Panel } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Headphones, ArrowRight, ZoomIn } from "lucide-react";

interface PanelCardProps {
  panel: Panel;
}

export function PanelCard({ panel }: PanelCardProps) {
  const [imgOpen, setImgOpen] = useState(false);

  return (
    <>
      <div className="bg-[#121629] border border-[#232c4d] hover:border-[#c5a059] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col group">
        {/* Thumbnail Container – click to preview image */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden bg-black/40 cursor-zoom-in"
          onClick={() => setImgOpen(true)}
          title="Nhấn để xem ảnh lớn"
        >
          <Image
            src={panel.imageSrc}
            alt={panel.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Zoom hint overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-60 transition-opacity duration-300 drop-shadow-lg" />
          </div>

          {/* Top Badges */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <Badge variant="red">{panel.id}</Badge>
          </div>

          {panel.badge && (
            <div className="absolute top-2.5 right-2.5 z-10">
              <Badge variant="audio">{panel.badge}</Badge>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 flex flex-col flex-1">
          <h2 className="font-bold text-[#e5c158] text-base md:text-lg mb-2.5 line-clamp-2 leading-snug">
            {panel.title}
          </h2>

          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
            {panel.description}
          </p>

          {/* CTA Button – only this navigates */}
          <Link
            href={`/panel/${panel.slug}`}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#800000] hover:bg-[#9e0000] border border-[#b81d1d] hover:border-amber-400 text-white font-bold text-xs md:text-sm uppercase tracking-wide transition-all duration-200 shadow-md group/btn mt-auto"
          >
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <span>ĐỌC &amp; NGHE THUYẾT MINH</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image lightbox modal */}
      {imgOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setImgOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={panel.imageSrc}
              alt={panel.title}
              width={1200}
              height={675}
              className="object-contain w-full h-auto max-h-[80vh]"
            />
            <button
              onClick={() => setImgOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-sm font-bold transition"
            >
              ✕
            </button>
            <div className="bg-black/70 px-4 py-2 text-center">
              <p className="text-[#e5c158] font-semibold text-sm">{panel.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
