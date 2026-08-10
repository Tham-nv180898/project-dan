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
  placeholder = "Chủ tịch Hồ Chí Minh..."
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xs md:max-w-sm">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#12141d] text-white text-sm placeholder-gray-400 pl-4 pr-9 py-1.5 rounded-full border border-gray-700 focus:outline-none focus:border-[#d4af37] transition-all shadow-inner"
      />
      {value ? (
        <button
          onClick={() => onChange("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-0.5 rounded-full"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      ) : (
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      )}
    </div>
  );
}
