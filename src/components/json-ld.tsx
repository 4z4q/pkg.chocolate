// components/json-ld.tsx
// المسار: app/components/json-ld.tsx
// ⚠️ البيانات هنا مطابقة لـ Google Business Profile — لا تعدّل إلا إذا عدّلت هناك أيضاً

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      // ① FoodEstablishment + LocalBusiness
      {
        "@type": ["FoodEstablishment", "LocalBusiness"],
        "@id": "https://pkg-chocolate.vercel.app/#business",
        "name": "PKG Chocolate",
        "alternateName": "بكج شوكلت",

        // ✅ متطابق مع وصف Google Business Profile
        "description":
          "متجر متخصص في بيع الشوكولاتة الفاخرة والحلويات الطازجة في جدة. نقدم تشكيلة مميزة من صواني الضيافة وصواني المناسبات المصممة بعناية لتناسب الأفراح، حفلات الزواج، أعياد الميلاد، الاجتماعات، والجمعات العائلية. شوكولاتة بلجيكية فاخرة بتغليف أنيق، وحلويات مشكلة يومياً.",

        "url": "https://pkg-chocolate.vercel.app/",
        "telephone": "+966579707079",
        "priceRange": "٤٣٥ ر.س — ٥٤٠٠ ر.س",
        "image": "https://pkg-chocolate.vercel.app/og-image.jpg",
        "servesCuisine": "شوكولاتة بلجيكية، حلويات عربية، فطاير",

        // ✅ العنوان — متطابق مع Google Business Profile
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "حي السنابل",
          "addressLocality": "جدة",
          "addressRegion": "مكة المكرمة",
          "postalCode": "22434",          // ← الرقم البريدي الصحيح من بروفايلك
          "addressCountry": "SA",
        },

        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "21.404530161929777",
          "longitude": "39.27036463104376",
        },

        // ✅ يخدم جميع أحياء جدة — كما ذكرت في البروفايل
        "areaServed": [
          { "@type": "City", "name": "جدة" },
          { "@type": "AdministrativeArea", "name": "مكة المكرمة" },
        ],

        // عدّل الأوقات حسب دوامك الفعلي
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
            "opens": "10:00",
            "closes": "23:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday", "Saturday"],
            "opens": "14:00",
            "closes": "23:59",
          },
        ],

        "sameAs": [
          "https://www.instagram.com/pkg.chocolate",
          "https://www.tiktok.com/@pkgchocolate",
          "https://wa.me/966579707079",
        ],

        "hasMap": "https://maps.google.com/?q=PKG+Chocolate+حي+السنابل+جدة",

        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966579707079",
          "contactType": "customer service",
          "availableLanguage": ["Arabic"],
        },

        // // ✅ الخدمات المذكورة في بروفايلك
        // "hasOfferCatalog": {
        //   "@type": "OfferCatalog",
        //   "name": "منتجات وخدمات PKG Chocolate",
        //   "itemListElement": [
        //     {
        //       "@type": "Offer",
        //       "name": "صواني الضيافة",
        //       "description": "صواني شوكولاتة فاخرة للضيافة والمناسبات",
        //       "priceCurrency": "SAR",
        //       "price": "435",
        //       "availability": "https://schema.org/InStock",
        //     },
        //     {
        //       "@type": "Offer",
        //       "name": "بكجات الأفراح والمناسبات",
        //       "description": "بكجات شوكولاتة فاخرة للأعراس وحفلات الزواج وأعياد الميلاد",
        //       "priceCurrency": "SAR",
        //       "price": "720",
        //       "availability": "https://schema.org/InStock",
        //     },
        //     {
        //       "@type": "Offer",
        //       "name": "شوكولاتة فاخرة بتغليف أنيق",
        //       "description": "هدايا شوكولاتة بلجيكية بتغليف فاخر للمناسبات الخاصة والزيارات الرسمية",
        //       "priceCurrency": "SAR",
        //       "price": "435",
        //       "availability": "https://schema.org/InStock",
        //     },
        //     {
        //       "@type": "Offer",
        //       "name": "تجهيز طلبات المناسبات الكبيرة",
        //       "description": "تجهيز صواني ضيافة وشوكولاتة حسب الطلب للمناسبات من 20 إلى 350 شخص",
        //       "priceCurrency": "SAR",
        //       "price": "1080",
        //       "availability": "https://schema.org/InStock",
        //     },
        //   ],
        // },
      },

      // ② WebSite
      {
        "@type": "WebSite",
        "@id": "https://pkg-chocolate.vercel.app/#website",
        "url": "https://pkg-chocolate.vercel.app/",
        "name": "PKG Chocolate",
        "inLanguage": "ar",
        "publisher": {
          "@id": "https://pkg-chocolate.vercel.app/#business",
        },
      },

      // ③ FAQPage — أسئلة مبنية على وصف البروفايل الفعلي
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "أين يقع PKG Chocolate في جدة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "PKG Chocolate يقع في حي السنابل، جدة. يخدم جميع أحياء جدة مع إمكانية تجهيز الطلبات والتوصيل للمناسبات.",
            },
          },
          {
            "@type": "Question",
            "name": "ما هي خدمات PKG Chocolate للمناسبات؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "يقدم PKG Chocolate تجهيز صواني الضيافة والشوكولاتة حسب الطلب للأفراح، حفلات الزواج، أعياد الميلاد، الاجتماعات، والجمعات العائلية. يمكن تنفيذ طلبات المناسبات الكبيرة والصغيرة من 20 إلى 350 شخص.",
            },
          },
          {
            "@type": "Question",
            "name": "كيف أطلب من PKG Chocolate؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "يمكنك الطلب مباشرة عبر واتساب على الرقم +966579707079.",
            },
          },
          {
            "@type": "Question",
            "name": "ما هي أسعار بكجات PKG Chocolate؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "تبدأ البكجات الاقتصادية من 435 ريال (3 صواني لـ 20 شخص) وتصل إلى 3600 ريال. البكجات VIP تبدأ من 720 ريال وتصل إلى 5400 ريال لـ 350 شخص.",
            },
          },
          {
            "@type": "Question",
            "name": "هل PKG Chocolate يقدم شوكولاتة فاخرة للهدايا؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "نعم، يقدم PKG Chocolate شوكولاتة بلجيكية فاخرة بتغليف أنيق تناسب الهدايا والزيارات الرسمية والمناسبات الخاصة.",
            },
          },
          {
            "@type": "Question",
            "name": "هل PKG Chocolate يخدم جميع أحياء جدة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "نعم، PKG Chocolate يخدم جميع أحياء جدة مع إمكانية تجهيز طلبات المناسبات والأفراح والجمعات.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
