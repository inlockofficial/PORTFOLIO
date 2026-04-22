import { useMemo, useState } from "react";
import { CONFIG, type Lang } from "@/config";

const LANGS: { code: Lang; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "ar", label: "AR", dir: "rtl" },
  { code: "fr", label: "FR", dir: "ltr" },
];

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const dir = useMemo(() => LANGS.find((l) => l.code === lang)!.dir, [lang]);
  const t = CONFIG;
  const isRTL = dir === "rtl";

  return (
    <div
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-900"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob animate-blob-1 -top-32 -left-32 h-[420px] w-[420px] bg-[#FCA5A5]" />
        <div className="blob animate-blob-2 top-1/3 -right-32 h-[480px] w-[480px] bg-[#06b6d4]" />
        <div className="blob animate-blob-3 -bottom-40 left-1/4 h-[460px] w-[460px] bg-[#84cc16]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div
            className="font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-lime-500 align-middle ltr:mr-2 rtl:ml-2" />
            {t.creator.name[lang]}
          </div>
          <span className="rounded-full glass-card px-3 py-1 text-xs font-medium text-slate-700">
            UGC · 2025
          </span>
        </header>

        {/* 12-col bento grid */}
        <section className="grid auto-rows-[minmax(110px,auto)] grid-cols-1 gap-4 sm:gap-5 md:grid-cols-12">
          {/* HERO 8x2 */}
          <div className="glass-card col-span-1 rounded-3xl p-7 md:col-span-8 md:row-span-2 sm:p-9">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex items-start gap-5">
                <Avatar initials={t.creator.initials} url={t.creator.avatarUrl} />
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase tracking-widest text-slate-500">
                    {t.creator.title[lang]}
                  </div>
                  <h1
                    className="mt-2 text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t.creator.name[lang]}
                  </h1>
                </div>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                {t.creator.bio[lang]}
              </p>
            </div>
          </div>

          {/* STATUS 4x1 */}
          <div className="glass-card col-span-1 rounded-3xl p-6 md:col-span-4">
            <Label text={t.ui.sectionLabels.status[lang]} />
            <div className="mt-3 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500" />
              </span>
              <span className="text-sm font-semibold text-slate-900">
                {t.status.available[lang]}
              </span>
            </div>
            <div className="mt-2 text-sm text-slate-600">📍 {t.status.location[lang]}</div>
          </div>

          {/* LANGUAGE 4x1 */}
          <div className="glass-card col-span-1 rounded-3xl p-6 md:col-span-4">
            <Label text={t.ui.sectionLabels.language[lang]} />
            <div className="mt-3 flex gap-2">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                    lang === l.code
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                      : "bg-white/60 text-slate-700 hover:bg-white/90"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="mt-2 text-xs text-slate-500">
              Direction: <span className="font-mono">{dir.toUpperCase()}</span>
            </div>
          </div>

          {/* PORTFOLIO 3x (4x2) */}
          {t.portfolio.map((p, i) => (
            <div
              key={i}
              className="glass-card relative col-span-1 overflow-hidden rounded-3xl p-6 md:col-span-4 md:row-span-2"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${p.accent}`}
              />
              <div className="flex h-full flex-col justify-between">
                <div>
                  <Label text={t.ui.sectionLabels.portfolio[lang]} />
                  <div className="mt-3 text-4xl">{p.emoji}</div>
                  <h3
                    className="mt-3 text-2xl font-semibold tracking-tight text-slate-900"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title[lang]}
                  </h3>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-600">{p.category[lang]}</span>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${p.accent} text-white shadow-md`}
                  >
                    {isRTL ? "←" : "→"}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* STATS 2x (3x1) */}
          {t.stats.map((s, i) => (
            <div key={i} className="glass-card col-span-1 rounded-3xl p-6 md:col-span-3">
              <Label text={t.ui.sectionLabels.stats[lang]} />
              <div
                className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.value}
              </div>
              <div className="mt-1 text-sm text-slate-600">{s.label[lang]}</div>
            </div>
          ))}

          {/* WHY ME 6x1 */}
          <div className="glass-card col-span-1 rounded-3xl p-7 md:col-span-6">
            <Label text="✨" />
            <h3
              className="mt-2 text-xl font-semibold tracking-tight text-slate-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.whyMe.heading[lang]}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.whyMe.body[lang]}</p>
          </div>

          {/* SERVICES 4x2 */}
          <div className="glass-card col-span-1 rounded-3xl p-6 md:col-span-4 md:row-span-2">
            <Label text={t.ui.sectionLabels.services[lang]} />
            <ul className="mt-4 space-y-3">
              {t.services.items[lang].map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-800">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-lime-500" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TESTIMONIAL 4x1 */}
          <div className="glass-card col-span-1 rounded-3xl p-6 md:col-span-4">
            <Label text={t.ui.sectionLabels.testimonial[lang]} />
            <p
              className="mt-3 text-base italic leading-relaxed text-slate-800"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "{t.testimonial.quote[lang]}"
            </p>
            <div className="mt-3 text-xs font-medium text-slate-500">
              {t.testimonial.author[lang]}
            </div>
          </div>

          {/* CTA 4x2 */}
          <div className="relative col-span-1 overflow-hidden rounded-3xl bg-slate-900 p-7 text-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.5)] transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 hover:scale-[1.01] md:col-span-4 md:row-span-2">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#FCA5A5] to-[#06b6d4] opacity-40 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-lime-400 opacity-30 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-white/60">
                  Let's collab
                </div>
                <h3
                  className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.cta.title[lang]}
                </h3>
                <p className="mt-3 text-sm text-white/70">{t.cta.subtitle[lang]}</p>
              </div>
              <a
                href={t.cta.href}
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FCA5A5] via-[#06b6d4] to-[#84cc16] px-5 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.03]"
              >
                {t.cta.button[lang]}
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {t.creator.name[lang]} · Crafted with intention
        </footer>
      </main>
    </div>
  );
}

function Label({ text }: { text: string }) {
  return (
    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
      {text}
    </div>
  );
}

function Avatar({ initials, url }: { initials: string; url?: string }) {
  if (url) {
    return (
      <img
        src={url}
        alt={initials}
        className="h-20 w-20 flex-shrink-0 rounded-2xl object-cover shadow-lg ring-4 ring-white/70"
      />
    );
  }
  return (
    <div
      className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FCA5A5] via-[#06b6d4] to-[#84cc16] text-2xl font-bold text-white shadow-lg ring-4 ring-white/70"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {initials}
    </div>
  );
}
