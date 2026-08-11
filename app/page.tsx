"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PanelGrid } from "@/components/panels/PanelGrid";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PANELS_DATA } from "@/data/panels";
import { useSearch } from "@/hooks/useSearch";

export default function HomePage() {
  const { query, setQuery, filteredPanels } = useSearch(PANELS_DATA);

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e]">
      <Header
        variant="list"
        searchQuery={query}
        onSearchChange={setQuery}
      />

      <main className="flex-1 w-full">
        <PanelGrid panels={filteredPanels} totalCount={PANELS_DATA.length} />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
