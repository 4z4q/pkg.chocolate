import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

type ProductGridProps = {
  selectedIds: number[]
  onToggle: (id: number) => void
}

export function ProductGrid({ selectedIds, onToggle }: ProductGridProps) {
  const selectedSet = new Set(selectedIds)

  return (
    <section
      id="flavours"
      aria-labelledby="flavours-title"
      className="mx-auto max-w-7xl px-6 py-12 sm:py-16 animate-pkg-fade-in"
    >
      {/* Section title with thin gold underline */}
      <div className="text-center mb-8 sm:mb-10">
        <h2
          id="flavours-title"
          className="inline-block text-2xl sm:text-3xl font-bold text-espresso"
        >
          نكهاتنا <span aria-hidden="true">🍫</span>
        </h2>
        <div
          aria-hidden="true"
          className="mx-auto mt-3 h-px w-20 bg-gold"
        />
      </div>

      {/* Responsive grid — 2 / 3 / 4 cols, gaps per spec */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selected={selectedSet.has(product.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  )
}
