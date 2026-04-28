"use client";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { OrderCTA } from "@/components/order-cta";
import { Footer } from "@/components/footer";
import { FloatingSweets } from "@/components/floating-sweets";
import { useState } from "react";
import { ProductGrid } from "@/components/product-grid";
import { StickyBar } from "@/components/sticky-bar";
import { PkgPackages } from "@/components/test";

export default function Page() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  function toggleSelection(id: number) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }
  return (
    <main className="relative bg-warm-white text-espresso overflow-x-hidden">
      <FloatingSweets />
      <Navbar />
      <Hero />
      <Categories />
      <PkgPackages />
      <ProductGrid selectedIds={selectedIds} onToggle={toggleSelection} />
      <StickyBar selectedIds={selectedIds} />

      {/* <FeaturedProducts /> */}
      {/* <BrandStory /> */}
      {/* <TikTokSocial /> */}
      {/* <Testimonials /> */}
      <OrderCTA />
      <Footer />
    </main>
  );
}
