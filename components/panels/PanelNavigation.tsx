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
    <div className="flex flex-wrap items-center justify-between gap-3 my-6">
      {/* Prev Button */}
      {prev ? (
        <Link
          href={`/panel/${prev.slug}`}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#1b233d] hover:bg-[#28355b] border border-gray-700 rounded-full text-xs font-semibold text-gray-200 hover:text-white transition shadow max-w-[48%] truncate"
        >
          <ChevronLeft className="w-4 h-4 flex-shrink-0 text-gray-400" />
          <span className="truncate">
            <strong className="text-[#e5c158] font-medium mr-1">MẢNG ÁNH TRƯỚC:</strong>
            {prev.shortTitle}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {/* Next Button */}
      {next && (
        <Link
          href={`/panel/${next.slug}`}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#800000] hover:bg-[#9e0000] border border-[#a31a1a] rounded-full text-xs font-semibold text-white transition shadow max-w-[48%] truncate ml-auto"
        >
          <span className="truncate">
            <strong className="text-[#ffe599] font-medium mr-1">MẢNG ÁNH KẾ TIẾP:</strong>
            {next.shortTitle}
          </span>
          <ChevronRight className="w-4 h-4 flex-shrink-0 text-amber-300" />
        </Link>
      )}
    </div>
  );
}
