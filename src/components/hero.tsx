"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const title = ["PKG", "Chocolate"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Soft gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#FDFAF6_0%,_#F5EFE6_55%,_#F2D5C4_120%)]" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(253,250,246,0.6)_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.5em] uppercase text-rose-gold mb-8"
        >
          — حلويات عربية فاخرة —
        </motion.p>

        <h1 className="font-serif italic text-espresso text-balance">
          <span className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
            {title.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.1,
                  delay: 0.5 + i * 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
                style={{ fontWeight: 400 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 text-base md:text-lg text-espresso/70 font-light tracking-wide max-w-xl mx-auto"
        >
          تجربة فاخرة من الشوكولاتة تُصنع بعناية لتلامس الذوق الرفيع
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-3 font-arabic text-lg md:text-xl text-rose-gold font-light"
          dir="rtl"
          lang="ar"
        >
          حيث تتحول التفاصيل إلى لذة تُحكى
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#collection"
            className="shimmer-sweep group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-rose-gold text-warm-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-antique-gold transition-colors duration-500 shadow-[0_8px_30px_-8px_rgba(196,149,106,0.5)]"
          >
            اكتشف تشكيلتنا
          </a>

          <a
            href="#story"
            className="group relative text-sm tracking-[0.2em] uppercase text-espresso/80 hover:text-espresso transition-colors py-1"
          >
            حكايتنا
            <span className="absolute left-0 -bottom-0.5 h-px w-full bg-espresso/30 group-hover:bg-rose-gold transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 2.2 },
          y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-espresso/50"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">استكشف</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div> */}
    </section>
  );
}
