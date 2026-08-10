import React from "react";
import { Panel } from "@/types";
import { PanelCard } from "@/components/panels/PanelCard";

interface PanelGridProps {
  panels: Panel[];
  totalCount?: number;
}

export function PanelGrid({ panels, totalCount }: PanelGridProps) {
  const displayTotal = totalCount !== undefined ? totalCount : panels.length;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="mb-6 border-b border-gray-800 pb-3">
        <h2 className="text-lg md:text-xl font-extrabold text-[#e5c158] uppercase tracking-wider">
          DANH SÁCH MẢNG ÁNH & BÀI THUYẾT MINH{" "}
          <span className="text-gray-400 font-normal text-sm md:text-base lowercase">
            ({displayTotal} mảng ảnh)
          </span>
        </h2>
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
          <p className="text-gray-400 text-base mb-2">
            Không tìm thấy mảng ảnh nào phù hợp với từ khóa.
          </p>
          <p className="text-gray-500 text-xs">Vui lòng thử lại với từ khóa khác.</p>
        </div>
      )}
    </section>
  );
}
