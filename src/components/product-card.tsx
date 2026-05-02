import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Check } from "lucide-react";
import type { Product } from "@/lib/products";
import ImageKit from "./image-kit";

type ProductCardProps = {
  product: Product;
  selected: boolean;
  onToggle: (id: number) => void;
  priority?: boolean;
};

const isTouchDevice =
  typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

export function ProductCard({
  product,
  selected,
  onToggle,
  priority,
}: ProductCardProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseEnter() {
    if (ref.current) ref.current.style.willChange = "transform";
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.willChange = "auto";
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onToggle(product.id)}
      onMouseMove={isTouchDevice ? undefined : handleMouseMove}
      onMouseEnter={isTouchDevice ? undefined : handleMouseEnter}
      onMouseLeave={isTouchDevice ? undefined : handleMouseLeave}
      aria-pressed={selected}
      aria-label={`${selected ? "إلغاء اختيار" : "اختيار"} ${product.name}`}
      style={
        isTouchDevice
          ? undefined
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 800,
              transformStyle: "preserve-3d",
            }
      }
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
        <ImageKit src={product.image} alt={product.name} priority={priority} />

        {/* Checkmark badge */}
        <span
          aria-hidden="true"
          className={[
            "absolute top-2 right-2 w-7 h-7 rounded-full bg-green-400 flex items-center justify-center",
            "shadow-[0_2px_6px_rgba(196,149,106,0.5)]",
            "transition-all duration-[250ms] ease-out",
            selected ? "opacity-100 scale-100" : "opacity-0 scale-75",
          ].join(" ")}
        >
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </span>
      </div>

      {/* Product name */}
      <p className="text-center text-sm font-bold text-espresso px-2.5 py-2.5 leading-snug">
        {product.name}
      </p>
    </motion.button>
  );
}
