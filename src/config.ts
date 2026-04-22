export type Lang = "en" | "ar" | "fr";

export interface PortfolioItem {
  title: Record<Lang, string>;
  category: Record<Lang, string>;
  accent: string; // tailwind gradient classes
  emoji: string;
}

export interface CONFIGType {
  creator: {
    name: Record<Lang, string>;
    initials: string;
    avatarUrl?: string;
    title: Record<Lang, string>;
    bio: Record<Lang, string>;
  };
  status: {
    available: Record<Lang, string>;
    location: Record<Lang, string>;
  };
  portfolio: PortfolioItem[];
  stats: { value: string; label: Record<Lang, string> }[];
  whyMe: {
    heading: Record<Lang, string>;
    body: Record<Lang, string>;
  };
  services: { items: Record<Lang, string[]> };
  testimonial: {
    quote: Record<Lang, string>;
    author: Record<Lang, string>;
  };
  cta: {
    title: Record<Lang, string>;
    subtitle: Record<Lang, string>;
    button: Record<Lang, string>;
    href: string;
  };
  ui: {
    sectionLabels: Record<string, Record<Lang, string>>;
  };
}

export const CONFIG: CONFIGType = {
  creator: {
    name: {
      en: "Layla Hassan",
      ar: "ليلى حسن",
      fr: "Layla Hassan",
    },
    initials: "LH",
    // avatarUrl: "https://example.com/avatar.jpg", // optional
    title: {
      en: "UGC Creator & Short-Form Strategist",
      ar: "صانعة محتوى UGC واستراتيجية محتوى قصير",
      fr: "Créatrice UGC & Stratège Vidéo Courte",
    },
    bio: {
      en: "I craft scroll-stopping, authentic content that turns viewers into customers. Trusted by 40+ DTC brands across beauty, wellness, and lifestyle.",
      ar: "أصنع محتوى أصيل يوقف التمرير ويحوّل المشاهدين إلى عملاء. موثوقة من قبل أكثر من 40 علامة تجارية في الجمال والعافية ونمط الحياة.",
      fr: "Je crée du contenu authentique qui arrête le scroll et convertit. Approuvée par plus de 40 marques DTC en beauté, bien-être et lifestyle.",
    },
  },
  status: {
    available: {
      en: "Available for May bookings",
      ar: "متاحة لحجوزات مايو",
      fr: "Disponible pour mai",
    },
    location: {
      en: "Dubai → Worldwide",
      ar: "دبي ← حول العالم",
      fr: "Dubaï → International",
    },
  },
  portfolio: [
    {
      title: { en: "Beauty & Skincare", ar: "الجمال والعناية", fr: "Beauté & Soin" },
      category: { en: "12 campaigns", ar: "١٢ حملة", fr: "12 campagnes" },
      accent: "from-rose-300 via-peach to-orange-300",
      emoji: "💄",
    },
    {
      title: { en: "Tech & Lifestyle", ar: "التقنية ونمط الحياة", fr: "Tech & Lifestyle" },
      category: { en: "9 campaigns", ar: "٩ حملات", fr: "9 campagnes" },
      accent: "from-cyan-300 via-sky-300 to-blue-300",
      emoji: "📱",
    },
    {
      title: { en: "Food & Wellness", ar: "الطعام والعافية", fr: "Food & Wellness" },
      category: { en: "18 campaigns", ar: "١٨ حملة", fr: "18 campagnes" },
      accent: "from-lime-300 via-emerald-300 to-teal-300",
      emoji: "🥑",
    },
  ],
  stats: [
    {
      value: "12.4M",
      label: { en: "Total views", ar: "إجمالي المشاهدات", fr: "Vues totales" },
    },
    {
      value: "40+",
      label: { en: "Happy clients", ar: "عميل سعيد", fr: "Clients satisfaits" },
    },
  ],
  whyMe: {
    heading: {
      en: "Why work with me",
      ar: "لماذا تعمل معي",
      fr: "Pourquoi travailler avec moi",
    },
    body: {
      en: "I blend strategy and storytelling to build content that performs. From hook to CTA, every second is engineered for retention — and the results speak for themselves: 3.2× average engagement lift across paid and organic.",
      ar: "أمزج بين الاستراتيجية وسرد القصص لبناء محتوى يحقق أداءً عالياً. من الجملة الافتتاحية إلى الدعوة لاتخاذ إجراء، كل ثانية مصممة للاحتفاظ — والنتائج تتحدث: ٣٫٢× زيادة في التفاعل.",
      fr: "Je mêle stratégie et storytelling pour créer du contenu performant. Du hook au CTA, chaque seconde est pensée pour la rétention — résultat : engagement multiplié par 3,2 en moyenne.",
    },
  },
  services: {
    items: {
      en: [
        "UGC video production (1–3 deliverables)",
        "Short-form content strategy",
        "Hook & script writing",
        "Whitelisting & paid usage rights",
        "Monthly retainer packages",
      ],
      ar: [
        "إنتاج فيديوهات UGC (١-٣ تسليمات)",
        "استراتيجية المحتوى القصير",
        "كتابة الجمل الافتتاحية والسكريبت",
        "حقوق الاستخدام المدفوع",
        "باقات شهرية متكاملة",
      ],
      fr: [
        "Production vidéo UGC (1–3 livrables)",
        "Stratégie de contenu court",
        "Écriture de hooks & scripts",
        "Whitelisting & droits d'usage",
        "Forfaits mensuels",
      ],
    },
  },
  testimonial: {
    quote: {
      en: "Layla didn't just deliver content — she delivered our best-performing ad of the quarter.",
      ar: "ليلى لم تقدم محتوى فحسب — بل قدمت أفضل إعلان أداءً في الربع.",
      fr: "Layla n'a pas livré du contenu — elle a livré notre meilleure pub du trimestre.",
    },
    author: {
      en: "— Sara M., Growth Lead @ Glow Co.",
      ar: "— سارة م.، قائدة النمو في Glow Co.",
      fr: "— Sara M., Growth Lead @ Glow Co.",
    },
  },
  cta: {
    title: { en: "Work with me", ar: "اعمل معي", fr: "Travaillons ensemble" },
    subtitle: {
      en: "Let's build something that converts.",
      ar: "لنبنِ شيئاً يحوّل.",
      fr: "Créons quelque chose qui convertit.",
    },
    button: { en: "Start a project →", ar: "ابدأ مشروعاً ←", fr: "Démarrer →" },
    href: "mailto:hello@layla.studio",
  },
  ui: {
    sectionLabels: {
      status: { en: "Status", ar: "الحالة", fr: "Statut" },
      language: { en: "Language", ar: "اللغة", fr: "Langue" },
      portfolio: { en: "Portfolio", ar: "الأعمال", fr: "Portfolio" },
      stats: { en: "Impact", ar: "التأثير", fr: "Impact" },
      services: { en: "Services", ar: "الخدمات", fr: "Services" },
      testimonial: { en: "Testimonial", ar: "شهادة", fr: "Témoignage" },
    },
  },
};
