"use client";

import { useState, useMemo } from "react";
import { Panel } from "@/types";

export function useSearch(panels: Panel[]) {
  const [query, setQuery] = useState("");

  const filteredPanels = useMemo(() => {
    if (!query.trim()) return panels;
    const lowerQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return panels.filter((panel) => {
      const titleNormalized = panel.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const descNormalized = panel.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const idNormalized = panel.id.toLowerCase();

      return (
        titleNormalized.includes(lowerQuery) ||
        descNormalized.includes(lowerQuery) ||
        idNormalized.includes(lowerQuery)
      );
    });
  }, [panels, query]);

  return {
    query,
    setQuery,
    filteredPanels
  };
}
