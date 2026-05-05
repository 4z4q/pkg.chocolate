import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { OrderCTA } from "@/components/order-cta";
import { Footer } from "@/components/footer";
import { FloatingSweets } from "@/components/floating-sweets";
import { PkgPackages } from "@/components/pakage";
import { SelectionSection } from "@/components/selection-section";
import { WaveDivider } from "@/components/wave-divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PKG Chocolate | بكج شوكلت",
  description:
    "أفضل شوكولاتة بلجيكية في جدة – حي السنابل. " +
    "توت مغطى بالشوكولاتة، بكجات هدايا للمناسبات، " +
    "موالح راقية وحلويات عربية فاخرة. اطلب الآن.",
  alternates: { canonical: "https://pkg-chocolate.vercel.app/" },
};

export default function Page() {
  return (
    <main className="relative bg-[#fbebd3] text-[#1a4d4b] overflow-x-hidden">
      <FloatingSweets />
      <Navbar />

      {/* 1. HERO — deep aqua */}
      <Hero />

      {/* hero (#1a4d4b) → categories (#fbebd3) */}
      <WaveDivider topColor="#1a4d4b" bottomColor="#fbebd3" />

      {/* 2. CATEGORIES — peach cream */}
      <Categories />

      {/* categories (#fbebd3) → packages (#458482) */}
      <WaveDivider topColor="#fbebd3" bottomColor="#458482" />

      {/* 3. PACKAGES — deep aqua mid */}
      <PkgPackages />

      {/* packages (#458482) → flavours (#e8f4f3) */}
      <WaveDivider topColor="#458482" bottomColor="#e8f4f3" />

      {/* 4. FLAVOURS / SELECTION — soft aqua */}
      <SelectionSection />

      {/* flavours (#e8f4f3) → order (#fff8f0) */}
      <WaveDivider topColor="#e8f4f3" bottomColor="#fff8f0" />

      {/* 5. ORDER CTA — cream */}
      <OrderCTA />

      {/* order (#fff8f0) → footer (#0d3331) */}
      <WaveDivider topColor="#fff8f0" bottomColor="#0d3331" />

      {/* 6. FOOTER — deepest aqua */}
      <Footer />
    </main>
  );
}
