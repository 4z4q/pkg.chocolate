"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "الرئيسية", href: "#home" },
  { label: "البكجات", href: "#packages" },
  { label: "النكهات", href: "#flavours" },
  { label: "اطلب الآن", href: "#order" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "backdrop-blur-md bg-warm-white/75 border-b border-warm-beige/40"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 h-20">
          <a href="#home" className="flex items-baseline gap-2 group" aria-label="PKG Chocolate - الصفحة الرئيسية" dir="ltr">
            <span
              className="font-serif-italic text-2xl lg:text-3xl tracking-wide text-antique-gold"
              style={{ fontWeight: 600 }}
            >
              PKG
            </span>
            <span className="font-serif text-base lg:text-lg tracking-[0.25em] uppercase text-espresso/80 font-light">
              chocolate
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm tracking-[0.18em] uppercase text-espresso/80 hover:text-espresso transition-colors group py-1"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-rose-gold transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#order"
            className="hidden md:inline-flex items-center text-sm tracking-[0.18em] uppercase px-6 py-2.5 rounded-full border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-warm-white transition-all duration-500"
          >
            اطلب الآن
          </a>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-espresso"
            aria-label="فتح القائمة"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-espresso/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm z-[70] bg-warm-white border-l border-warm-beige/60 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-serif-italic text-2xl text-antique-gold">
                  PKG
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-espresso"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-7">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-serif-italic text-3xl text-espresso hover:text-rose-gold transition-colors"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-warm-beige">
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  تابعنا
                </p>
                <p className="mt-3 text-sm text-espresso/80">@pkgchocolate</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
