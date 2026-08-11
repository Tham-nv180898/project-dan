import React from "react";
import Link from "next/link";
import { Panel } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PanelNavigationProps {
  prev?: Panel;
  next?: Panel;
}

export function PanelNavigation({ prev, next }: PanelNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 my-4 sm:my-6">
      {/* Prev Button */}
      {prev ? (
        <Link
          href={`/panel/${prev.slug}`}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#141b30] hover:bg-[#1f2a4a] border border-[#2d3a66] hover:border-[#c5a059] rounded-full text-xs font-semibold text-gray-200 hover:text-white transition-all duration-200 shadow-md min-w-0 sm:max-w-[48%] group"
        >
          <ChevronLeft className="w-4 h-4 flex-shrink-0 text-[#e5c158] group-hover:-translate-x-0.5 transition-transform" />
          <span className="truncate min-w-0">
            <strong className="text-[#e5c158] font-bold uppercase tracking-wider mr-1">MẢNG ÁNH TRƯỚC:</strong>
            <span className="text-gray-300 font-normal">{prev.shortTitle}</span>
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Button */}
      {next && (
        <Link
          href={`/panel/${next.slug}`}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#800000] hover:bg-[#9e0000] border border-[#b81d1d] hover:border-amber-400 rounded-full text-xs font-semibold text-white transition-all duration-200 shadow-md min-w-0 sm:max-w-[48%] sm:ml-auto justify-end group"
        >
          <span className="truncate min-w-0 text-right">
            <strong className="text-[#ffe599] font-bold uppercase tracking-wider mr-1">MẢNG ÁNH KẾ TIẾP:</strong>
            <span className="text-white font-normal">{next.shortTitle}</span>
          </span>
          <ChevronRight className="w-4 h-4 flex-shrink-0 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
}
