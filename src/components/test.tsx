"use client";

import { useState } from "react";
import { motion } from "motion/react";

const WHATSAPP_NUMBER = "+966579707079";

function buildWhatsAppLink(p: { name: string; price: number }) {
  const message = `مرحباً PKG Chocolate،
أرغب في طلب البكج التالي:

• ${p.name}

شكراً لكم.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type PackageType = "econ" | "vip";
type TabType = "econ" | "vip" | "all";

type Package = {
  size: string;
  unit: "صواني" | "صينية";
  persons: string;
  newPrice: number;
  oldPrice: number | null;
  type: PackageType;
};

const packages: Package[] = [
  // الاقتصادية
  {
    size: "3",
    unit: "صواني",
    persons: "20 شخص",
    newPrice: 435,
    oldPrice: 540,
    type: "econ",
  },
  {
    size: "5",
    unit: "صواني",
    persons: "40 شخص",
    newPrice: 720,
    oldPrice: 900,
    type: "econ",
  },
  {
    size: "8",
    unit: "صواني",
    persons: "70-50 شخص",
    newPrice: 1150,
    oldPrice: 1440,
    type: "econ",
  },
  {
    size: "12",
    unit: "صينية",
    persons: "100-70 شخص",
    newPrice: 1720,
    oldPrice: 2160,
    type: "econ",
  },
  {
    size: "16",
    unit: "صينية",
    persons: "140-110 شخص",
    newPrice: 2300,
    oldPrice: 2880,
    type: "econ",
  },
  {
    size: "20",
    unit: "صينية",
    persons: "شخص+",
    newPrice: 3600,
    oldPrice: null,
    type: "econ",
  },
  // VIP
  {
    size: "4",
    unit: "صواني",
    persons: "40-30 شخص",
    newPrice: 720,
    oldPrice: 960,
    type: "vip",
  },
  {
    size: "6",
    unit: "صواني",
    persons: "70-50 شخص",
    newPrice: 1080,
    oldPrice: 1350,
    type: "vip",
  },
  {
    size: "10",
    unit: "صينية",
    persons: "100-70 شخص",
    newPrice: 1800,
    oldPrice: 2250,
    type: "vip",
  },
  {
    size: "14",
    unit: "صينية",
    persons: "150-100 شخص",
    newPrice: 2520,
    oldPrice: 3150,
    type: "vip",
  },
  {
    size: "20",
    unit: "صينية",
    persons: "250-200 شخص",
    newPrice: 3600,
    oldPrice: 4500,
    type: "vip",
  },
  {
    size: "30",
    unit: "صينية",
    persons: "350-300 شخص",
    newPrice: 5400,
    oldPrice: 6750,
    type: "vip",
  },
];

const tabs: { key: TabType; label: string }[] = [
  { key: "econ", label: "البكجات الاقتصادية" },
  { key: "vip", label: "البكجات VIP" },
  { key: "all", label: "الكل" },
];

function WhatsAppIcon() {
  return (
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PackageCard({ pkg, i }: { pkg: Package; i: number }) {
  const isVip = pkg.type === "vip";
  const discount = pkg.oldPrice
    ? Math.round(((pkg.oldPrice - pkg.newPrice) / pkg.oldPrice) * 100)
    : null;
  const fullName = `${pkg.size} ${pkg.unit} - ${isVip ? "VIP" : "اقتصادي"}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      dir="rtl"
    >
      <div className="relative overflow-hidden rounded-3xl border border-amber-200/70 bg-amber-50/40 shadow-[0_6px_24px_-10px_rgba(59,31,10,0.10)] transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_18px_44px_-16px_rgba(59,31,10,0.28)]">
        {/* Front face */}
        <div className="p-6 transition-opacity duration-300 group-hover:opacity-0">
          {/* Badge */}
          <span
            className={`inline-block text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-4 border font-semibold ${
              isVip
                ? "bg-red-50 text-red-800 border-red-200"
                : "bg-amber-50 text-amber-700 border-amber-300"
            }`}
          >
            {isVip ? "VIP" : "اقتصادي"}
          </span>

          {/* Size */}
          <p className="text-6xl font-black text-amber-900 leading-none">
            {pkg.size}
          </p>
          <p className="mt-1 text-sm font-semibold text-amber-700/80 mb-4">
            {pkg.unit}
          </p>

          {/* Persons */}
          <p className="text-xs text-amber-600/70">{pkg.persons}</p>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-black text-amber-900">
              {Intl.NumberFormat("ar-SA").format(pkg.newPrice)} ر.س
            </span>
            {pkg.oldPrice && (
              <span className="text-sm text-amber-400/80 line-through">
                {Intl.NumberFormat("ar-SA").format(pkg.oldPrice)} ر.س
              </span>
            )}
          </div>
        </div>

        {/* Hover overlay — slides up */}
        <div className="absolute inset-0 overflow-y-auto bg-amber-900 p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-3xl">
          <div>
            <p className="text-amber-200 font-bold text-base mb-5">
              {fullName}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-amber-700/40 pb-2">
                <span className="text-amber-400 text-xs">عدد الأشخاص</span>
                <span className="text-white text-sm font-bold">
                  {pkg.persons}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-amber-700/40 pb-2">
                <span className="text-amber-400 text-xs">السعر الجديد</span>
                <span className="text-amber-300 text-base font-black">
                  {Intl.NumberFormat("ar-SA").format(pkg.newPrice)} ر.س
                </span>
              </div>
              {pkg.oldPrice && (
                <div className="flex justify-between items-center border-b border-amber-700/40 pb-2">
                  <span className="text-amber-400 text-xs">السعر القديم</span>
                  <span className="text-amber-600/70 text-sm line-through">
                    {Intl.NumberFormat("ar-SA").format(pkg.oldPrice)} ر.س
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-amber-400 text-xs">الأصناف</span>
                <span className="text-white/80 text-xs">
                  حالي ومالح حسب الطلب
                </span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={buildWhatsAppLink({ name: fullName, price: pkg.newPrice })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-amber-400 text-amber-900 text-xs tracking-[0.15em] font-bold hover:bg-amber-300 transition-colors duration-300"
            aria-label={`اطلب ${fullName} عبر واتساب`}
          >
            <WhatsAppIcon />
            <span>اطلب الآن عبر واتساب</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function PkgPackages() {
  const [activeTab, setActiveTab] = useState<TabType>("econ");

  const filtered = packages.filter(
    (p) => activeTab === "all" || p.type === activeTab
  );

  return (
    <section id="packages" className="relative py-20 md:py-28" dir="rtl">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-rose-gold mb-3">
            PKG Chocolate
          </p>
          <h2 className="font-serif italic text-5xl md:text-6xl text-antique-gold text-balance">
            بكجاتنا المميزة
          </h2>
          <p className="mt-4 text-base text-gold- font-light max-w-xl mx-auto">
            اختيار الصواني والأصناف من حالي ومالح حسب طلب العميل
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 rounded-full text-sm font-bold border-2 transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-amber-900 text-amber-200 border-amber-900"
                  : "bg-transparent text-amber-700 border-amber-400 hover:border-amber-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((pkg, i) => (
            <PackageCard key={`${pkg.type}-${pkg.size}`} pkg={pkg} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
