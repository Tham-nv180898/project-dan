"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Tìm theo tên mảng ảnh, chủ đề..."
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/70 pointer-events-none">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#121629] text-white text-xs sm:text-sm placeholder-gray-400 pl-10 pr-9 py-2 rounded-xl border border-[#2d3a66] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all shadow-md"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 rounded-full transition"
          aria-label="Xóa từ khóa tìm kiếm"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
