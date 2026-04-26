"use client";

import { motion } from "motion/react";

const categories = [
  { label: "الشوكولاتة البلجيكية", icon: "🍫" },
  { label: "الحلويات العربية الفاخرة", icon: "🌙" },
  { label: "الحلى والتشيزكيك", icon: "🍰" },
  { label: "الموالح الراقية", icon: "🥐" },
  { label: "التوت المغطى بالشوكولاتة", icon: "🍓" },
  { label: "بكجات الهدايا", icon: "🎁" },
];

export function Categories() {
  return (
    <section className="relative py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar justify-start md:justify-center flex-nowrap pb-2 -mx-6 px-6"
        >
          {categories.map((c, i) => (
            <motion.button
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -2 }}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-warm-beige bg-warm-white hover:bg-cream hover:border-rose-gold text-sm tracking-wide text-espresso transition-all duration-500 shadow-[0_2px_10px_-4px_rgba(196,149,106,0.15)]"
            >
              <span className="text-base">{c.icon}</span>
              <span className="font-light">{c.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none}`}</style>
    </section>
  );
}
