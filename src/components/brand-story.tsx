"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export function BrandStory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0])
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"])

  return (
    <section
      id="story"
      ref={ref}
      className="relative py-24 md:py-36 bg-cream/50 overflow-hidden"
    >
      {/* Soft decorative circles */}
      <div className="absolute top-10 -left-24 w-72 h-72 rounded-full bg-blush/30 blur-3xl -z-0" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 rounded-full bg-warm-beige/40 blur-3xl -z-0" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-rose-gold mb-5">
            — Our Story —
          </p>

          <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-espresso leading-[1.05] text-balance">
            Made with Passion,{" "}
            <span className="relative inline-block">
              Shared with Love
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="absolute -bottom-2 left-0 right-0 h-px bg-rose-gold"
              />
            </span>
          </h2>

          <p className="mt-8 text-lg text-espresso/75 font-light leading-relaxed text-pretty">
            At PKG Chocolate, every sweet is a handcrafted moment — blending
            the richness of Arabic tradition with the elegance of modern
            confectionery. From the first bloom of rosewater to the final dust
            of gold, we work slowly, intentionally, and with tenderness.
          </p>

          <p
            className="mt-6 font-arabic text-lg text-espresso/75 leading-relaxed"
            dir="rtl"
            lang="ar"
          >
            في PKG شوكولاتة، كل قطعة حلوى هي لحظة مصنوعة بحب — نمزج غنى
            التقاليد العربية بأناقة الحلويات الحديثة، ببطء وشغف وحنان.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-serif-italic text-4xl text-antique-gold">12</p>
              <p className="text-xs tracking-[0.2em] uppercase text-espresso/60 mt-1">
                Years of craft
              </p>
            </div>
            <div className="h-12 w-px bg-warm-beige" />
            <div>
              <p className="font-serif-italic text-4xl text-antique-gold">100%</p>
              <p className="text-xs tracking-[0.2em] uppercase text-espresso/60 mt-1">
                Handmade daily
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(44,24,16,0.25)]">
            <motion.div style={{ scale: imageScale, y: imageY }} className="w-full h-full">
              <Image
                src="/story-image.jpg"
                alt="An artisan chocolatier placing gold leaf on a truffle"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -bottom-6 -left-4 md:-left-10 bg-warm-white rounded-full px-6 py-4 shadow-[0_20px_40px_-15px_rgba(44,24,16,0.2)] border border-warm-beige/60 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-antique-gold animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-espresso/75">
              Crafted this morning
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
