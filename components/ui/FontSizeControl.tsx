"use client";

import React from "react";
import { FontSizeLevel } from "@/hooks/useFontSize";

interface FontSizeControlProps {
  currentSize: FontSizeLevel;
  onSizeChange: (size: FontSizeLevel) => void;
}

export function FontSizeControl({ currentSize, onSizeChange }: FontSizeControlProps) {
  return (
    <div className="flex items-center gap-1 bg-[#1a233b] p-1 rounded-md border border-gray-700">
      <button
        onClick={() => onSizeChange("sm")}
        className={`px-2 py-0.5 text-xs rounded transition font-medium ${
          currentSize === "sm" ? "bg-[#e5c158] text-black" : "text-gray-300 hover:text-white"
        }`}
        title="Chữ nhỏ"
      >
        A-
      </button>
      <button
        onClick={() => onSizeChange("md")}
        className={`px-2 py-0.5 text-xs rounded transition font-medium ${
          currentSize === "md" ? "bg-[#e5c158] text-black" : "text-gray-300 hover:text-white"
        }`}
        title="Chữ vừa"
      >
        A
      </button>
      <button
        onClick={() => onSizeChange("lg")}
        className={`px-2 py-0.5 text-xs rounded transition font-medium ${
          currentSize === "lg" ? "bg-[#e5c158] text-black" : "text-gray-300 hover:text-white"
        }`}
        title="Chữ lớn"
      >
        A+
      </button>
    </div>
  );
}
