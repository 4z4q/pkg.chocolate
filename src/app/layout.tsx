import type { Metadata } from "next";
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

import localFont from "next/font/local";

const Thamny = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahsans-Black.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
});


export const metadata: Metadata = {
  title: "PKG Chocolate | شوكولاتة بلجيكية وحلويات فاخرة في جدة",
  description:
    "اكتشف عالم PKG Chocolate في جدة - حي السنابل. شوكولاتة بلجيكية فاخرة، حلويات عربية، موالح راقية، وتوت مغطى بالشوكولاتة. تجربة مميزة تُصنع بشغف وتُقدّم بأناقة.",
  keywords: [
    "شوكولاتة بلجيكية",
    "حلويات جدة",
    "حي السنابل",
    "توت بالشوكولاتة",
    "بكجات هدايا",
    "حلويات فاخرة",
    "PKG Chocolate",
  ],
  openGraph: {
    title: "PKG Chocolate | تجربة فاخرة من الشوكولاتة",
    description:
      "من جدة - حي السنابل، نقدم لك شوكولاتة بلجيكية وحلويات فاخرة تُصنع بعناية لتناسب ذوقك الراقي.",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "PKG Chocolate",
    description: "شوكولاتة بلجيكية فاخرة وحلويات راقية في جدة.",
  },
};

// export const viewport = {
//   themeColor: "#FDFAF6",
//   width: "device-width",
//   initialScale: 1,
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={`${Thamny.className} bg-warm-white `} dir="rtl">
      <body className="font-sans antialiased bg-warm-white text-espresso">
        {children}
        {/* {process.env.NODE_ENV === "production" && <Analytics />} */}
      </body>
    </html>
  );
}
