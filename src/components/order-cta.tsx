"use client";

import { motion } from "motion/react";
import { Instagram, Music2, MessageCircle } from "lucide-react";

export function OrderCTA() {
  return (
    <section id="order" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#F2D5C4_0%,_#F5EFE6_45%,_#FDFAF6_100%)]" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-warm-beige/40 blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-rose-gold mb-5"
        >
          — Let's order —
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-espresso leading-[1.05] text-balance"
        >
          Ready to order something sweet?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-5 font-arabic text-xl md:text-2xl text-espresso/80 font-light"
          dir="rtl"
          lang="ar"
        >
          جاهز تطلب شيء حلو؟ 🍬
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="https://wa.me/+966579707079"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-sweep group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-espresso text-warm-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-rose-gold transition-colors duration-500 shadow-[0_14px_40px_-14px_rgba(44,24,16,0.45)]"
          >
           أطلب عبر الواتساب
            <MessageCircle className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://www.tiktok.com/@pkgchocolate"
              aria-label="TikTok"
              className="w-12 h-12 rounded-full border border-warm-beige bg-warm-white/60 backdrop-blur-sm flex items-center justify-center text-espresso/70 hover:text-rose-gold hover:border-rose-gold transition-colors duration-500"
            >
              <Music2 className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/pkg.chocolate"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border border-warm-beige bg-warm-white/60 backdrop-blur-sm flex items-center justify-center text-espresso/70 hover:text-rose-gold hover:border-rose-gold transition-colors duration-500"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-xs tracking-[0.3em] uppercase text-espresso/50"
        >
          توصيل داخل جده مجانا - صواني بأشكال متميزه ومختلفه  
        </motion.p>
      </div>
    </section>
  );
}
