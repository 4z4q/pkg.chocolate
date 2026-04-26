"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Layla K.",
    location: "Dubai",
    rating: 5,
    quote:
      "Every bite feels like a memory. The kunafa bar is quietly the best chocolate I've had this year — refined, generous, and deeply nostalgic.",
  },
  {
    name: "Camille R.",
    location: "Paris",
    rating: 5,
    quote:
      "PKG Chocolate has the soul of a Parisian patisserie with the warmth of an Arabic home. The presentation alone is worth the ceremony.",
  },
  {
    name: "Omar A.",
    location: "Riyadh",
    rating: 5,
    quote:
      "The cardamom pralines are a revelation. You can taste the care, the slowness, the intention behind every single piece.",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(id)
  }, [paused])

  const r = reviews[index]

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-cream/40 to-warm-white" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-rose-gold mb-4"
        >
          Kind Words
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-espresso text-balance"
        >
          Sweet whispers from our guests
        </motion.h2>

        <div className="relative mt-14 md:mt-20 min-h-[280px] md:min-h-[240px]">
          <Quote className="mx-auto w-10 h-10 text-rose-gold/40 mb-6" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto"
            >
              <p className="font-serif-italic text-2xl md:text-3xl lg:text-4xl text-espresso leading-[1.25] text-balance">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="flex items-center gap-1 text-antique-gold">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm tracking-[0.2em] uppercase text-espresso/70">
                  {r.name} — {r.location}
                </p>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
              className="relative h-1 rounded-full overflow-hidden bg-warm-beige transition-all"
              style={{ width: i === index ? 36 : 14 }}
            >
              {i === index && (
                <motion.span
                  layoutId="review-indicator"
                  className="absolute inset-0 bg-rose-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
