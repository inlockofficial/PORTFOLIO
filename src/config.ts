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
      en: "Chloe Evans",
      ar: "كلوي إيفانز",
      fr: "Chloe Evans",
    },
    initials: "CE",
    avatarUrl: "/avatar-placeholder.jpg",
    title: {
      en: "Aesthetic Tech & Wellness UGC",
      ar: "صانعة محتوى تقنية وعافية UGC",
      fr: "Créatrice UGC Tech & Bien-être",
    },
    bio: {
      en: "CS Student by day, Visual Storyteller by night. I blend technical insight with a minimalist aesthetic to create high-conversion content for forward-thinking brands.",
      ar: "طالبة علوم كمبيوتر في النهار، وقاصة بصرية في الليل. أمزج بين الرؤية التقنية والجمالية البسيطة لإنشاء محتوى عالي التحويل للعلامات التجارية الطموحة.",
      fr: "Étudiante en informatique le jour, Storyteller Visuelle la nuit. J'allie expertise technique et esthétique minimaliste pour un contenu à haute conversion.",
    },
  },
  status: {
    available: {
      en: "Accepting Q3 Collabs",
      ar: "متاحة لتعاونات الربع الثالث",
      fr: "Disponible pour collaborations T3",
    },
    location: {
      en: "London → Worldwide",
      ar: "لندن ← حول العالم",
      fr: "Londres → International",
    },
  },
  portfolio: [
    {
      title: { en: "Mindful Tech", ar: "التقنية الواعية", fr: "Tech Consciente" },
      category: { en: "8+ SaaS Demos", ar: "٨+ عروض برمجية", fr: "8+ démos SaaS" },
      accent: "from-slate-200 via-stone-100 to-zinc-100",
      emoji: "💻",
      href: "https://your-tech-portfolio.com",
    },
    {
      title: { en: "Wellness & Style", ar: "العافية والأناقة", fr: "Bien-être & Style" },
      category: { en: "15+ Campaigns", ar: "١٥+ حملة", fr: "15+ campagnes" },
      accent: "from-rose-100 via-peach-100 to-orange-100",
      emoji: "✨",
      href: "https://your-wellness-portfolio.com",
    },
    {
      title: { en: "Minimalist Living", ar: "الحياة البسيطة", fr: "Vie Minimaliste" },
      category: { en: "10+ Lookbooks", ar: "١٠+ كتيبات أزياء", fr: "10+ lookbooks" },
      accent: "from-emerald-100 via-teal-100 to-cyan-100",
      emoji: "🌿",
      href: "https://your-lifestyle-portfolio.com",
    },
  ],
  stats: [
    {
      value: "950K+",
      label: { en: "Monthly Impressions", ar: "انطباع شهري", fr: "Impressions mensuelles" },
    },
    {
      value: "25+",
      label: { en: "Brand Partners", ar: "شريك تجاري", fr: "Marques partenaires" },
    },
  ],
  whyMe: {
    heading: {
      en: "Data-Driven Aesthetics",
      ar: "جماليات مدفوعة بالبيانات",
      fr: "L'Esthétique par les Données",
    },
    body: {
      en: "As a computer science major, I don't just create 'pretty' videos—I understand the algorithmic triggers and UX principles that convert viewers. I bridge the gap between creative storytelling and direct-response performance.",
      ar: "بصفتي طالبة علوم كمبيوتر، أنا لا أنشئ فيديوهات 'جميلة' فحسب، بل أفهم محفزات الخوارزميات ومبادئ تجربة المستخدم التي تحول المشاهدين. أمزج بين سرد القصص الإبداعي والأداء القائم على الاستجابة المباشرة.",
      fr: "En tant qu'étudiante en informatique, je ne crée pas de 'jolies' vidéos : je comprends les algorithmes. J'allie storytelling créatif et performance pour un rendu premium.",
    },
  },
  services: {
    items: {
      en: [
        "SaaS/App UX Walkthroughs",
        "High-Conversion Paid Ads",
        "Aesthetic Product Unboxing",
        "Cinematic Lifestyle B-Roll",
        "Script & Hook Optimization",
      ],
      ar: [
        "شرح تجربة المستخدم للتطبيقات",
        "إعلانات مدفوعة عالية التحويل",
        "فتح صناديق المنتجات الجمالية",
        "تصوير نمط حياة سينمائي",
        "تحسين السكريبت والافتتاحية",
      ],
      fr: [
        "Démos UX Applications/SaaS",
        "Ads payantes haute performance",
        "Unboxing produit esthétique",
        "B-roll lifestyle cinématographique",
        "Optimisation script & hook",
      ],
    },
  },
  testimonial: {
    quote: {
      en: "Chloe didn't just deliver content—she delivered our best-performing ad of the quarter. She perfectly captures our premium brand voice.",
      ar: "كلوي لم تقدم محتوى فحسب، بل قدمت أفضل إعلان أداءً في الربع. لقد جسدت صوت علامتنا التجارية الراقية تماماً.",
      fr: "Chloe n'a pas livré du contenu : elle a livré notre meilleure pub du trimestre. Elle capture parfaitement notre image de marque premium.",
    },
    author: {
      en: "— Sarah M., Growth Lead @ Aura Wellness",
      ar: "— سارة م.، قائدة النمو في Aura Wellness",
      fr: "— Sarah M., Growth Lead @ Aura Wellness",
    },
  },
  cta: {
    title: { en: "Let's Elevate Your Brand", ar: "لنرفع مستوى علامتك التجارية", fr: "Sublimons votre marque" },
    subtitle: {
      en: "Ready to create content that actually converts?",
      ar: "هل أنت مستعد لإنشاء محتوى يحقق نتائج فعلاً؟",
      fr: "Prêt à créer du contenu qui convertit vraiment ?",
    },
    button: { en: "Book a Discovery Call →", ar: "احجز مكالمة استشارية ←", fr: "Réserver un appel →" },
    href: "mailto:hello@chloe.studio",
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
