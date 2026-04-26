import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { BrandStory } from "@/components/brand-story"
import { TikTokSocial } from "@/components/tiktok-social"
import { Testimonials } from "@/components/testimonials"
import { OrderCTA } from "@/components/order-cta"
import { Footer } from "@/components/footer"
import { FloatingSweets } from "@/components/floating-sweets"

export default function Page() {
  return (
    <main className="relative bg-warm-white text-espresso overflow-x-hidden">
      <FloatingSweets />
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BrandStory />
      <TikTokSocial />
      <Testimonials />
      <OrderCTA />
      <Footer />
    </main>
  )
}
