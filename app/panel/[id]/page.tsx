import React from "react";
import { notFound } from "next/navigation";
import { PANELS_DATA, getPanelBySlug, getAdjacentPanels } from "@/data/panels";
import { PanelDetailClient } from "@/components/panels/PanelDetailClient";

export function generateStaticParams() {
  return PANELS_DATA.map((panel) => ({
    id: panel.slug,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PanelDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const panel = getPanelBySlug(resolvedParams.id);

  if (!panel) {
    notFound();
  }

  const { prev, next } = getAdjacentPanels(panel.slug);

  return <PanelDetailClient panel={panel} prev={prev} next={next} />;
}
