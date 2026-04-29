
"use client";

import { motion } from "motion/react";

// ✅ حذف title array — الحل أبسط وأفضل لـ SEO
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Soft gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#FDFAF6_0%,_#F5EFE6_55%,_#F2D5C4_120%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(253,250,246,0.6)_100%)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">

        {/* Eyebrow — لا تغيير */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.5em] uppercase text-rose-gold mb-8"
        >
          — حلويات عربية فاخرة —
        </motion.p>

        {/*
          ✅ FIX: H1 يحتوي على النص الكامل كـ aria-label
          التصميم البصري لم يتغير — نفس الـ animation
          لكن جوجل تقرأ aria-label = "PKG Chocolate" صحيحاً
        */}
        <h1
          className="font-serif italic text-espresso text-balance"
          aria-label="PKG Chocolate"
        >
          <span className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-antique-gold"
              style={{ fontWeight: 400 }}
            >
              PKG
            </motion.span>
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-espresso"
              style={{ fontWeight: 400 }}
            >
              Chocolate
            </motion.span>
          </span>
        </h1>


        <h2 className="sr-only">
          شوكولاتة بلجيكية فاخرة في جدة – حي السنابل
        </h2>

        <p className="sr-only">
          PKG Chocolate جدة — توت مغطى بالشوكولاتة، بكجات هدايا فاخرة،
          موالح راقية، شوكولاتة هدايا مناسبات، حي السنابل جدة
        </p>

        {/* Tagline — لا تغيير */}
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

        {/* CTA buttons — لا تغيير */}
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
    </section>
  );
}
