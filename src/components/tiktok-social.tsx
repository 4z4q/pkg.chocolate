"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Play } from "lucide-react"
import { SectionDivider } from "./section-divider"

const clips = [
  { src: "/tiktok-1.jpg", views: "248K", caption: "Kunafa chocolate reveal" },
  { src: "/tiktok-2.jpg", views: "162K", caption: "Unwrapping the gold bar" },
  { src: "/tiktok-3.jpg", views: "391K", caption: "Rose petals, slow motion" },
]

export function TikTokSocial() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-rose-gold mb-4">
            Social
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-espresso text-balance">
            Follow our journey{" "}
            <span className="text-rose-gold">@pkgchocolate</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cream border border-warm-beige"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-antique-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-antique-gold" />
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-espresso/75">
              10K+ on TikTok
            </span>
          </motion.div>
        </motion.div>

        <SectionDivider />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {clips.map((c, i) => (
            <motion.a
              key={c.src}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-cream shadow-[0_15px_40px_-15px_rgba(44,24,16,0.25)] transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_-20px_rgba(196,149,106,0.4)]">
                <Image
                  src={c.src || "/placeholder.svg"}
                  alt={c.caption}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-warm-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-rose-gold">
                    <Play className="w-6 h-6 md:w-7 md:h-7 fill-espresso text-espresso group-hover:fill-warm-white group-hover:text-warm-white ml-1 transition-colors duration-500" />
                  </div>
                </div>

                {/* View count */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-warm-white">
                  <p className="text-xs md:text-sm font-light">{c.caption}</p>
                  <span className="text-xs tracking-wide">{c.views} views</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
