import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { OrderCTA } from "@/components/order-cta";
import { Footer } from "@/components/footer";
import { FloatingSweets } from "@/components/floating-sweets";
import { PkgPackages } from "@/components/pakage";
import { SelectionSection } from "@/components/selection-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PKG Chocolate | شوكولاتة بلجيكية فاخرة وهدايا في جدة",
  description:
    "أفضل شوكولاتة بلجيكية في جدة – حي السنابل. " +
    "توت مغطى بالشوكولاتة، بكجات هدايا للمناسبات، " +
    "موالح راقية وحلويات عربية فاخرة. اطلب الآن.",
  alternates: { canonical: "https://pkg-chocolate.vercel.app/" },
};

export default function Page() {
  return (
    <main className="relative bg-warm-white text-espresso overflow-x-hidden">
      <FloatingSweets />
      <Navbar />
      <Hero />
      <Categories />
      <PkgPackages />

      <SelectionSection />

      <OrderCTA />
      <Footer />
    </main>
  );
}
