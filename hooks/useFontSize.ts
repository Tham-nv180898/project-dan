"use client";

import { useState, useEffect } from "react";

export type FontSizeLevel = "sm" | "md" | "lg";

export function useFontSize() {
  const [fontSize, setFontSize] = useState<FontSizeLevel>("md");

  useEffect(() => {
    const saved = localStorage.getItem("app_font_size") as FontSizeLevel;
    if (saved && ["sm", "md", "lg"].includes(saved)) {
      setFontSize(saved);
    }
  }, []);

  const changeFontSize = (level: FontSizeLevel) => {
    setFontSize(level);
    localStorage.setItem("app_font_size", level);
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case "sm":
        return "text-sm leading-relaxed";
      case "lg":
        return "text-xl leading-loose";
      case "md":
      default:
        return "text-base leading-relaxed";
    }
  };

  return {
    fontSize,
    changeFontSize,
    getFontSizeClass
  };
}
