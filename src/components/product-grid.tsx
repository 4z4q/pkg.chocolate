"use client";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { useMemo } from "react";

type ProductGridProps = {
  selectedIds: number[];
  onToggle: (id: number) => void;
};

export function ProductGrid({ selectedIds, onToggle }: ProductGridProps) {
  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  return (
    <section
      id="flavours"
      aria-labelledby="flavours-title"
      className="mx-auto max-w-7xl px-6 py-12 sm:py-16 animate-pkg-fade-in"
    >
      {/* Section title with thin gold underline */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="font-serif  text-5xl md:text-6xl text-balance">
          الحشــــوات
        </h2>

        <div aria-hidden="true" className="mx-auto mt-3 h-[1px] w-16 bg-gold" />
      </div>

      {/* Responsive grid — 2 / 3 / 4 cols, gaps per spec */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selected={selectedSet.has(product.id)}
            onToggle={onToggle}
            priority={product.id <= 4}
          />
        ))}
      </div>
    </section>
  );
}
