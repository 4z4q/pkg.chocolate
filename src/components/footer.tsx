"use client";

import { motion } from "motion/react";
import { Instagram, Music2, MessageCircle } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "Our Story", href: "#story" },
  { label: "Order", href: "#order" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-warm-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="font-serif-italic text-5xl toLocaleString()
toLocaleString()"
            style={{ fontWeight: 600 }}
          >
            PKG
          </span>
          <span className="text-[10px] tracking-[0.5em] uppercase text-espresso/60">
            Chocolate
          </span>
        </motion.div>
        {/* 
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.25em] uppercase text-espresso/70 hover:text-rose-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav> */}

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="https://www.tiktok.com/@pkgchocolate"
            aria-label="TikTok"
            className="w-10 h-10 rounded-full border border-warm-beige flex items-center justify-center text-espresso/70 hover:text-rose-gold hover:border-rose-gold transition-colors"
          >
            <Music2 className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/pkg.chocolate"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-warm-beige flex items-center justify-center text-espresso/70 hover:text-rose-gold hover:border-rose-gold transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/+966579707079"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full border border-warm-beige flex items-center justify-center text-espresso/70 hover:text-rose-gold hover:border-rose-gold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center" }}
          className="mx-auto mt-10 h-px w-48 bg-gradient-to-r from-transparent via-antique-gold to-transparent"
        />

        <p className="mt-6 text-xs tracking-[0.2em] uppercase text-espresso/50">
          © 2025 PKG Chocolate — All rights reserved
        </p>
      </div>
    </footer>
  );
}
