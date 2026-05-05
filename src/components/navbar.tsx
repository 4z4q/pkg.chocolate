"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "الرئيسية", href: "#home" },
  { label: "البكجات", href: "#packages" },
  { label: "الحشوات", href: "#flavours" },
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
            ? "backdrop-blur-md bg-[#fff8f0]/85 border-b border-[#b8d8d7]/50 shadow-[0_2px_20px_-12px_rgba(13,51,49,0.25)]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 h-20">
          <a
            href="#home"
            className="flex items-baseline gap-2 group"
            aria-label="PKG Chocolate - الصفحة الرئيسية"
            dir="ltr"
          >
            <span
              className="font-serif-italic text-2xl lg:text-3xl tracking-wide text-[#d4a96a]"
              style={{ fontWeight: 600 }}
            >
              PKG
            </span>
            <span
              className={cn(
                "font-serif text-base lg:text-lg tracking-[0.25em] uppercase font-light transition-colors",
                scrolled ? "text-[#1a4d4b]/85" : "text-[#fbebd3]/85"
              )}
            >
              chocolate
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "relative text-sm tracking-[0.18em] uppercase transition-colors group py-1",
                    scrolled
                      ? "text-[#1a4d4b]/85 hover:text-[#458482]"
                      : "text-[#fbebd3]/85 hover:text-[#d4a96a]"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-0.5 h-px w-0 transition-all duration-500 group-hover:w-full",
                      scrolled ? "bg-[#458482]" : "bg-[#d4a96a]"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#order"
            className={cn(
              "hidden md:inline-flex items-center text-sm tracking-[0.18em] uppercase px-6 py-2.5 rounded-full transition-all duration-500",
              scrolled
                ? "border border-[#458482] text-[#458482] hover:bg-[#458482] hover:text-[#fff8f0]"
                : "border border-[#d4a96a] text-[#d4a96a] hover:bg-[#d4a96a] hover:text-[#1a4d4b]"
            )}
          >
            اطلب الآن
          </a>

          <button
            onClick={() => setOpen(true)}
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled ? "text-[#1a4d4b]" : "text-[#fbebd3]"
            )}
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
              className="fixed inset-0 z-[60] bg-[#0d3331]/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm z-[70] bg-[#fff8f0] border-l border-[#b8d8d7] p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-serif-italic text-2xl text-[#d4a96a]">
                  PKG
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-[#1a4d4b]"
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
                      className="font-serif-italic text-3xl text-[#1a4d4b] hover:text-[#458482] transition-colors"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-[#b8d8d7]">
                <p className="text-xs tracking-[0.25em] uppercase text-[#3a7472]">
                  تابعنا
                </p>
                <p className="mt-3 text-sm text-[#1a4d4b]/85">@pkgchocolate</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
