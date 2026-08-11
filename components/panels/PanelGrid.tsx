import React from "react";
import { Panel } from "@/types";
import { PanelCard } from "@/components/panels/PanelCard";
import { SearchBar } from "@/components/ui/SearchBar";

interface PanelGridProps {
  panels: Panel[];
  totalCount?: number;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export function PanelGrid({
  panels,
  totalCount,
  searchQuery = "",
  onSearchChange
}: PanelGridProps) {
  const displayTotal = totalCount !== undefined ? totalCount : panels.length;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
      {/* Section Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-800">
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#e5c158] uppercase tracking-wider">
            DANH SÁCH MẢNG ẢNH & BÀI THUYẾT MINH
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Hiển thị {panels.length} trên tổng số {displayTotal} mảng ảnh
          </p>
        </div>

        {onSearchChange && (
          <div className="w-full sm:w-72 md:w-80 shrink-0">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>
        )}
      </div>

      {/* Grid or Empty state */}
      {panels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panels.map((panel) => (
            <PanelCard key={panel.id} panel={panel} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#121629]/50 border border-dashed border-gray-700 rounded-xl">
          <p className="text-gray-300 text-base font-semibold mb-2">
            Không tìm thấy mảng ảnh nào phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-gray-400 text-xs mb-4">
            Vui lòng thử lại với tên mảng ảnh, nội dung hoặc từ khóa khác.
          </p>

          {onSearchChange && (
            <button
              onClick={() => onSearchChange("")}
              className="px-4 py-2 bg-[#800000] hover:bg-[#9e0000] text-amber-300 text-xs font-bold rounded-lg transition border border-amber-500/40"
            >
              XÓA BỘ LỌC TÌM KIẾM
            </button>
          )}
        </div>
      )}
    </section>
  );
}
