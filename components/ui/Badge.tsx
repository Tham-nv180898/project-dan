import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "red" | "teal" | "audio";
  className?: string;
}

export function Badge({ children, variant = "red", className = "" }: BadgeProps) {
  const variantStyles = {
    red: "bg-[#d32f2f] text-white font-bold",
    gold: "bg-[#c5a059] text-black font-semibold",
    teal: "bg-[#ffebee] text-[#c62828] border border-[#ffcdd2] font-semibold",
    audio: "bg-[#0288d1] text-white font-medium"
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs tracking-wide shadow-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
