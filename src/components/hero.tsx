"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#1a4d4b] text-[#fbebd3]"
    >
      {/* Subtle radial highlight for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(58,116,114,0.55)_0%,_rgba(26,77,75,0)_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(13,51,49,0.7)_0%,_rgba(26,77,75,0)_60%)]"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.5em] uppercase text-[#d4a96a] mb-8"
        >
          — حلويات عربية فاخرة —
        </motion.p>

        <h1
          className="font-serif italic text-balance"
          aria-label="PKG Chocolate"
        >
          <span className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#d4a96a]"
              style={{ fontWeight: 400 }}
            >
              PKG
            </motion.span>
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#fbebd3]"
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

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 text-base md:text-lg text-[#fbebd3]/80 font-light tracking-wide max-w-xl mx-auto"
        >
          تجربة فاخرة من الشوكولاتة تُصنع بعناية لتلامس الذوق الرفيع
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-3 font-arabic text-lg md:text-xl text-[#d4a96a] font-light"
          dir="rtl"
          lang="ar"
        >
          حيث تتحول التفاصيل إلى لذة تُحكى
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#packages"
            className="shimmer-sweep group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#d4a96a] text-[#1a4d4b] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#b8924e] transition-colors duration-500 shadow-[0_8px_30px_-8px_rgba(212,169,106,0.5)]"
          >
            اكتشف تشكيلتنا
          </a>
          <a
            href="#flavours"
            className="group relative text-sm tracking-[0.2em] uppercase text-[#fbebd3]/85 hover:text-[#fbebd3] transition-colors py-1"
          >
            حكايتنا
            <span className="absolute left-0 -bottom-0.5 h-px w-full bg-[#fbebd3]/30 group-hover:bg-[#d4a96a] transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
