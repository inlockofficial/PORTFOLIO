export type Lang = "en" | "ar" | "fr";

export interface PortfolioItem {
  title: Record<Lang, string>;
  category: Record<Lang, string>;
  accent: string; // tailwind gradient classes
  emoji: string;
  href?: string;
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
      en: "Hafsa Kadari",
      ar: "حفصة قدري",
      fr: "Hafsa Kadari",
    },
    initials: "HK",
    title: {
      en: "Aesthetic UGC & Visual Storyteller",
      ar: "صانعة محتوى UGC وقصص بصرية",
      fr: "Créatrice UGC & Storyteller Visuelle",
    },
    bio: {
      en: "I bridge the gap between tech-savviness and creative aesthetics. I craft high-conversion, 'quiet luxury' content that turns viewers into loyal customers.",
      ar: "أجمع بين الخبرة التقنية والجمالية الإبداعية. أصنع محتوى 'الفخامة الهادئة' عالي التحويل الذي يحول المشاهدين إلى عملاء مخلصين.",
      fr: "Je fais le pont entre expertise technique et esthétique créative. Je crée du contenu 'quiet luxury' à haute conversion pour fidéliser votre audience.",
    },
  },
  status: {
    available: {
      en: "Accepting Q3 & Q4 collaborations",
      ar: "متاحة لتعاونات الربع الثالث والرابع",
      fr: "Disponible pour collaborations Q3 & Q4",
    },
    location: {
      en: "Sidi Bel Abbès → Worldwide",
      ar: "سيدي بلعباس ← حول العالم",
      fr: "Sidi Bel Abbès → International",
    },
  },
  portfolio: [
    {
      title: { en: "Beauty & Skincare", ar: "الجمال والعناية", fr: "Beauté & Soin" },
      category: { en: "15+ campaigns", ar: "١٥+ حملة", fr: "15+ campagnes" },
      accent: "from-pink-200 via-rose-100 to-orange-100",
      emoji: "💄",
      href: "https://claude.ai/new",
    },
    {
      title: { en: "Tech & Digital", ar: "التقنية والخدمات", fr: "Tech & Digital" },
      category: { en: "10+ SaaS demos", ar: "١٠+ عروض تقنية", fr: "10+ démos SaaS" },
      accent: "from-slate-300 via-blue-100 to-cyan-100",
      emoji: "💻",
    },
    {
      title: { en: "Minimalist Style", ar: "أزياء هادئة", fr: "Style Minimaliste" },
      category: { en: "8+ lookbooks", ar: "٨+ كتيبات أزياء", fr: "8+ lookbooks" },
      accent: "from-stone-300 via-neutral-100 to-slate-100",
      emoji: "✨",
    },
  ],
  stats: [
    {
      value: "1.2M",
      label: { en: "Monthly reach", ar: "الوصول الشهري", fr: "Portée mensuelle" },
    },
    {
      value: "30+",
      label: { en: "Brand partners", ar: "شريك تجاري", fr: "Marques partenaires" },
    },
  ],
  whyMe: {
    heading: {
      en: "The Strategy Behind the Lens",
      ar: "الاستراتيجية خلف العدسة",
      fr: "La Stratégie derrière l'Objectif",
    },
    body: {
      en: "As a Computer Science student, I don't just 'make videos'—I understand the algorithms and UX patterns that drive engagement. I blend data-driven hooks with an 'old money' minimalist aesthetic to ensure your brand feels both premium and approachable.",
      ar: "بصفتي طالبة في علوم الكمبيوتر، أنا لا 'أصنع فيديوهات' فحسب، بل أفهم الخوارزميات وأنماط تجربة المستخدم. أمزج بين الاستراتيجية والجمالية الهادئة لضمان ظهور علامتك التجارية بشكل راقٍ.",
      fr: "En tant qu'étudiante en informatique, je ne fais pas que 'des vidéos' : je comprends les algorithmes. J'allie stratégie de conversion et esthétique minimaliste pour un rendu premium.",
    },
  },
  services: {
    items: {
      en: [
        "Organic UGC (TikTok/Reels)",
        "High-performance Paid Ads",
        "Tech & App unboxing videos",
        "Aesthetic Product B-roll",
        "Scriptwriting & Hook optimization",
      ],
      ar: [
        "محتوى UGC عضوي (تيك توك/ريلز)",
        "إعلانات مدفوعة عالية الأداء",
        "فيديوهات فتح الصناديق للتقنية",
        "تصوير جمالي للمنتجات",
        "كتابة السكريبت وتحسين الافتتاحية",
      ],
      fr: [
        "UGC Organique (TikTok/Reels)",
        "Ads payantes haute performance",
        "Unboxing Tech & Applications",
        "B-roll produit esthétique",
        "Écriture de scripts & optimisation",
      ],
    },
  },
  testimonial: {
    quote: {
      en: "Hafsa understands brand DNA instantly. Her content saw a 40% increase in our ad engagement within 48 hours.",
      ar: "حفصة تفهم هوية العلامة التجارية فوراً. حقق محتواها زيادة بنسبة ٤٠٪ في التفاعل خلال ٤٨ ساعة.",
      fr: "Hafsa comprend instantanément l'ADN de la marque. Son contenu a boosté notre engagement de 40% en 48h.",
    },
    author: {
      en: "— Creative Director @ Luxe Beauty",
      ar: "— المدير الإبداعي في Luxe Beauty",
      fr: "— Directrice Créative @ Luxe Beauty",
    },
  },
  cta: {
    title: { en: "Let's Scale Your Brand", ar: "لنطور علامتك التجارية", fr: "Boostons votre marque" },
    subtitle: {
      en: "Ready to create content that actually converts?",
      ar: "هل أنت مستعد لإنشاء محتوى يحقق نتائج فعلاً؟",
      fr: "Prêt à créer du contenu qui convertit vraiment ?",
    },
    button: { en: "Book a Discovery Call →", ar: "احجز مكالمة استشارية ←", fr: "Réserver un appel →" },
    href: "mailto:hello@hafsa.studio",
  },
  ui: {
    sectionLabels: {
      status: { en: "Status", ar: "الحالة", fr: "Statut" },
      language: { en: "Language", ar: "اللغة", fr: "Langue" },
      portfolio: { en: "Expertise", ar: "الخبرات", fr: "Expertise" },
      stats: { en: "Impact", ar: "التأثير", fr: "Impact" },
      services: { en: "Services", ar: "الخدمات", fr: "Services" },
      testimonial: { en: "Feedback", ar: "الآراء", fr: "Avis" },
    },
  },
};
