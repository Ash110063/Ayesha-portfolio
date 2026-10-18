"use client";

import { useEffect, useRef, useState } from "react";
import st from "./cplusoft.module.css";

type Lang = "en" | "ar";

const copy = {
  en: {
    dir: "ltr",
    nav: ["Home", "AI", "Products", "Services", "Company"],
    kicker: "AUTOMATION BUILT FOR HOW QATAR WORKS",
    h: "Better operations. Built with AI. Backed by world-class engineering.",
    p: "We design and build AI agents, automated workflows and secure cloud systems for Qatari enterprises and government entities. Arabic and English from day one.",
    cta: "Request a consultation",
    f1: "Full name",
    f2: "Work email",
    f3: "Organisation",
    chips: ["AI agents", "Automation", "Cloud", "Data & BI"],
    submit: "Send request",
  },
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "الذكاء الاصطناعي", "المنتجات", "الخدمات", "الشركة"],
    kicker: "أتمتة مصممة لطريقة عمل قطر",
    h: "عمليات أفضل، مبنية بالذكاء الاصطناعي، ومدعومة بهندسة عالمية المستوى.",
    p: "نصمم ونبني وكلاء ذكاء اصطناعي وسير عمل مؤتمتة وأنظمة سحابية آمنة للمؤسسات والجهات الحكومية في قطر، بالعربية والإنجليزية منذ اليوم الأول.",
    cta: "اطلب استشارة",
    f1: "الاسم الكامل",
    f2: "البريد الإلكتروني للعمل",
    f3: "المؤسسة",
    chips: ["وكلاء الذكاء الاصطناعي", "الأتمتة", "الحوسبة السحابية", "البيانات"],
    submit: "إرسال الطلب",
  },
} as const;

/** Recreation of the MENA page hero that mirrors between English and Arabic. */
export function RtlDemo() {
  const [lang, setLang] = useState<Lang>("ar");
  const [shown, setShown] = useState<Lang>("ar");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const switchTo = (next: Lang) => {
    if (next === lang) return;
    setLang(next);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(next);
      return;
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShown(next), 220);
  };

  const c = copy[shown];
  const fading = lang !== shown;

  return (
    <>
      <div className={st.browser}>
        <div className={st.bar}>
          <span className={st.dots} aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span className={st.url}>cplusoft.com/locations/mena</span>
          <div className={st.toggle} role="group" aria-label="Page language">
            <button type="button" lang="en" aria-pressed={lang === "en"} onClick={() => switchTo("en")}>
              EN
            </button>
            <button type="button" lang="ar" aria-pressed={lang === "ar"} onClick={() => switchTo("ar")}>
              عربي
            </button>
          </div>
        </div>
        <div className={`${st.site} ${fading ? st.swap : ""}`} dir={c.dir} lang={shown}>
          <div className={st.siteNav}>
            <div className={st.siteLogo}>
              <i aria-hidden />
              CPLUSOFT
            </div>
            <div className={st.siteLinks}>
              {c.nav.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </div>
          <div className={st.siteCopy}>
            <span className={st.kicker}>{c.kicker}</span>
            <p className={st.siteH}>{c.h}</p>
            <p className={st.siteP}>{c.p}</p>
            <span className={st.siteCta}>
              {c.cta}
              <svg viewBox="0 0 12 12" aria-hidden>
                <path d="M1 6h10M7 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </div>
          <div className={st.siteForm} aria-hidden>
            <span className={st.field}>
              {c.f1}
              <i />
            </span>
            <span className={st.field}>
              {c.f2}
              <i />
            </span>
            <span className={`${st.field} ${st.full}`}>
              {c.f3}
              <i />
            </span>
            <div className={st.chips}>
              {c.chips.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <span className={st.submit}>{c.submit}</span>
          </div>
        </div>
      </div>
    </>
  );
}
