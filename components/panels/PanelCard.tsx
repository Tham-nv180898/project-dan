import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Panel } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

interface PanelCardProps {
  panel: Panel;
}

export function PanelCard({ panel }: PanelCardProps) {
  return (
    <div className="bg-[#121629] border border-[#232c4d] hover:border-[#c5a059] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col group">
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
        <Image
          src={panel.imageSrc}
          alt={panel.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

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
        <h2 className="font-bold text-[#e5c158] text-base md:text-lg mb-2.5 line-clamp-2 leading-snug group-hover:text-amber-200 transition">
          {panel.title}
        </h2>

        <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {panel.description}
        </p>

        {/* Action Link */}
        <Link
          href={`/panel/${panel.slug}`}
          className="inline-flex items-center gap-1.5 font-bold text-[#e5c158] text-xs md:text-sm tracking-wide uppercase hover:text-amber-300 transition group-hover:translate-x-1 duration-200 mt-auto"
        >
          ĐỌC & NGHE THUYẾT MINH <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
