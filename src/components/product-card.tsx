import Image from "next/image"
import { Check } from "lucide-react"
import type { Product } from "@/lib/products"

type ProductCardProps = {
  product: Product
  selected: boolean
  onToggle: (id: number) => void
}

/**
 * Pure CSS animations only (no Framer Motion) — performant for 50+ cards.
 * Click anywhere on the card to toggle selection.
 */
export function ProductCard({ product, selected, onToggle }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(product.id)}
      aria-pressed={selected}
      aria-label={`${selected ? "إلغاء اختيار" : "اختيار"} ${product.name}`}
      className={[
        "group relative w-full text-right cursor-pointer overflow-hidden rounded-[14px] bg-white",
        "shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
        "transition-all duration-[250ms] ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white",
        selected
          ? "border-[3px] border-gold scale-[1.03] bg-selected-bg"
          : "border border-gold-soft hover:border-gold/60",
      ].join(" ")}
    >
      {/* Square image */}
      <div className="relative aspect-square w-full overflow-hidden bg-cream">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />

        {/* Gold checkmark badge — fade in/out */}
        <span
          aria-hidden="true"
          className={[
            "absolute top-2 right-2 w-7 h-7 rounded-full bg-gold flex items-center justify-center",
            "shadow-[0_2px_6px_rgba(196,149,106,0.5)]",
            "transition-all duration-[250ms] ease-out",
            selected ? "opacity-100 scale-100  " : "opacity-0 scale-75",
          ].join(" ")}
        >
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </span>
      </div>

      {/* Product name */}
      <p className="text-center text-sm font-bold text-espresso px-2.5 py-2.5 leading-snug">
        {product.name}
      </p>
    </button>
  )
}
