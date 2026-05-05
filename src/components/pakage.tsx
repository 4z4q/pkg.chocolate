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
  popular?: boolean;
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
    popular: true,
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
    popular: true,
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

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 fill-current ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PackageCard({ pkg, i }: { pkg: Package; i: number }) {
  const isVip = pkg.type === "vip";
  const isPopular = !!pkg.popular;
  const fullName = `${pkg.size} ${pkg.unit} - ${isVip ? "VIP" : "اقتصادي"}`;

  // Featured / popular cards: solid deep aqua with cream text
  // Regular cards: cream surface with deep-aqua border + dark heading
  const cardSurface = isPopular
    ? "bg-[#1a4d4b] text-[#fbebd3] border-[#d4a96a]"
    : "bg-[#fff8f0] text-[#0d3331] border-[#458482]";
  const titleColor = isPopular ? "text-[#fbebd3]" : "text-[#0d3331]";
  const priceColor = isPopular ? "text-[#d4a96a]" : "text-[#458482]";
  const oldPriceColor = isPopular ? "text-[#fbebd3]/50" : "text-[#3a7472]/60";
  const subTextColor = isPopular ? "text-[#fbebd3]/70" : "text-[#3a7472]";
  const badgeBg = isVip
    ? "bg-[#d4a96a] text-[#1a4d4b] border-[#d4a96a]"
    : isPopular
    ? "bg-[#fbebd3] text-[#1a4d4b] border-[#fbebd3]"
    : "bg-[#e8f4f3] text-[#1a4d4b] border-[#458482]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
      dir="rtl"
    >
      {/* Popular ribbon */}
      {isPopular && (
        <div className="absolute -top-3 right-6 z-10">
          <span className="inline-block bg-[#d4a96a] text-[#1a4d4b] text-[10px] tracking-[0.18em] uppercase font-bold px-3 py-1 rounded-full shadow-[0_4px_12px_-4px_rgba(212,169,106,0.6)]">
            الأكثر طلباً
          </span>
        </div>
      )}

      <div
        className={`relative h-full overflow-hidden rounded-3xl border-2 ${cardSurface} shadow-[0_8px_30px_-12px_rgba(13,51,49,0.35)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_22px_50px_-18px_rgba(13,51,49,0.55)]`}
      >
        <div className="p-6 md:p-7 flex flex-col h-full">
          {/* Type badge */}
          <span
            className={`inline-block self-start text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-5 border font-semibold ${badgeBg}`}
          >
            {isVip ? "VIP" : "اقتصادي"}
          </span>

          {/* Size headline */}
          <div className="mb-5">
            <p className={`text-6xl font-black leading-none ${titleColor}`}>
              {pkg.size}
            </p>
            <p className={`mt-1 text-sm font-semibold ${subTextColor}`}>
              {pkg.unit}
            </p>
          </div>

          {/* Persons */}
          <p className={`text-xs ${subTextColor} mb-5`}>
            <span className="opacity-70">عدد الأشخاص: </span>
            <span className="font-semibold">{pkg.persons}</span>
          </p>

          {/* Divider */}
          <div
            aria-hidden="true"
            className={`h-px w-full ${
              isPopular ? "bg-[#fbebd3]/20" : "bg-[#b8d8d7]"
            } mb-5`}
          />

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-6">
            <span className={`text-3xl font-black ${priceColor}`}>
              {Intl.NumberFormat("ar-SA").format(pkg.newPrice)}
            </span>
            <span className={`text-sm font-semibold ${priceColor}`}>ر.س</span>
            {pkg.oldPrice && (
              <span className={`text-sm line-through ${oldPriceColor}`}>
                {Intl.NumberFormat("ar-SA").format(pkg.oldPrice)} ر.س
              </span>
            )}
          </div>

          {/* CTA — gold button with deep aqua text, hover swaps to teal/cream */}
          <a
            href={buildWhatsAppLink({ name: fullName, price: pkg.newPrice })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#d4a96a] text-[#1a4d4b] text-xs tracking-[0.15em] font-bold border-2 border-[#d4a96a] hover:bg-[#458482] hover:border-[#458482] hover:text-[#fff8f0] transition-colors duration-300"
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
    <section
      id="packages"
      className="relative bg-[#458482] text-[#fbebd3] py-20 md:py-28"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#d4a96a] mb-4">
            PKG Chocolate
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#fbebd3] text-balance">
            بكجاتنا المميزة
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-[2px] w-16 bg-[#d4a96a]"
          />
          <p className="mt-5 text-base text-[#fbebd3]/80 font-light max-w-xl mx-auto">
            اختيار الصواني والأصناف من حالي ومالح حسب طلب العميل
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold border-2 transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-[#d4a96a] text-[#1a4d4b] border-[#d4a96a]"
                  : "bg-transparent text-[#fbebd3] border-[#b8d8d7]/50 hover:border-[#d4a96a] hover:text-[#d4a96a]"
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
