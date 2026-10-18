import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Toc } from "./Toc";
import s from "./case.module.css";

export { s as caseStyles };

export type Fact = { label: string; value: string; status?: boolean };
export type TocItem = { id: string; label: string };

type FrameProps = {
  eyebrow: string;
  title: string;
  lede: string;
  tags: { label: string; highlight?: boolean }[];
  facts: Fact[];
  toc: TocItem[];
  /** In-story highlight (gradient or colour) and footer glow for this project. */
  highlight?: string;
  glow?: string;
  className?: string;
  children: ReactNode;
};

function Bullet() {
  return (
    <span className={s.bullet} aria-hidden>
      <i style={{ left: 3, top: 0 }} />
      <i style={{ left: 3, top: 6 }} />
      <i style={{ left: 6, top: 3 }} />
      <i style={{ left: 0, top: 3 }} />
    </span>
  );
}

/** Rail + sticky brief + story column, shared by every case study. */
export function CaseFrame({ eyebrow, title, lede, tags, facts, toc, highlight, glow, className, children }: FrameProps) {
  const vars = { ...(highlight ? { "--hl": highlight } : {}), ...(glow ? { "--glow": glow } : {}) } as CSSProperties;
  return (
    <div className={`${s.root} ${className ?? ""}`} style={vars}>
      <aside className={s.rail} aria-label="Ayesha Riaz">
        <Link href="/" className={s.logo} aria-label="Ayesha Riaz — home">
          <img src="/assets/logo.svg" alt="" width={24} height={20} />
        </Link>
        <span className={s.vertical}>AYESHA RIAZ</span>
        <div className={s.tz}>
          <b>GMT+5</b>
          <span>Open to remote</span>
        </div>
      </aside>

      <header className={s.brief}>
        <nav className={s.briefNav} aria-label="Main">
          <Link href="/">
            <svg width="12" height="10" viewBox="0 0 12 10" aria-hidden>
              <path d="M5 1L1 5l4 4M1 5h10" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            All work
          </Link>
          <a href="#contact">Contact</a>
        </nav>
        <div className={s.briefBody}>
          <span className={`${s.mono} ${s.eyebrow}`}>{eyebrow}</span>
          <h1 className={s.title}>{title}</h1>
          <p className={s.lede}>{lede}</p>
          <ul className={s.tags} aria-label="Disciplines">
            {tags.map((t) => (
              <li key={t.label} className={t.highlight ? s.tagHi : undefined}>
                {t.label}
              </li>
            ))}
          </ul>
          <dl className={s.facts}>
            {facts.map((f) => (
              <div key={f.label}>
                <dt className={s.mono}>{f.label}</dt>
                <dd className={f.status ? s.statusDot : undefined}>{f.value}</dd>
              </div>
            ))}
          </dl>
          <nav className={s.toc} aria-label="On this page">
            <div className={`${s.tocLabel} ${s.mono}`}>
              <Bullet />
              On this page
            </div>
            <Toc items={toc} activeClass={s.on} />
          </nav>
        </div>
      </header>

      <main className={s.story}>
        {children}
        <footer className={`${s.contact} ${s.mono}`} id="contact">
          <span>Ayesha Riaz · Product Design Lead</span>
          <span>
            Email <span className={s.select}>ashii110063@gmail.com</span>
          </span>
          <a href="https://www.linkedin.com/in/ayesha-riaz-452215244/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </footer>
      </main>
    </div>
  );
}

export function Section({ id, n, label, title, children }: { id: string; n: string; label: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className={s.section} id={id}>
      <div className={s.secHead}>
        <span className={s.mono}>
          <b>{n}</b> / {label}
        </span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Plate({ src, width, height, alt, tag, sub }: { src: string; width: number; height: number; alt: string; tag: string; sub: string }) {
  return (
    <figure className={s.plate}>
      <img src={src} width={width} height={height} alt={alt} loading="lazy" />
      <figcaption className={s.plateTag}>
        {tag}
        <em>{sub}</em>
      </figcaption>
    </figure>
  );
}

export function Problems({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className={s.problems}>
      {items.map((p, i) => (
        <li key={p.title}>
          <span>{String.fromCharCode(65 + i)}</span>
          <div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function RoleGrid({ items }: { items: { label: string; text: string }[] }) {
  return (
    <div className={s.roleGrid}>
      {items.map((r) => (
        <div key={r.label}>
          <span className={s.mono}>{r.label}</span>
          <p>{r.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Decisions({ items }: { items: { title: string; text: ReactNode; tradeoff: string }[] }) {
  return (
    <div className={s.decisions}>
      {items.map((d, i) => (
        <article className={s.decision} key={d.title}>
          <span className={s.decisionN}>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </div>
          <div className={s.tradeoff}>
            <span className={s.mono}>Trade-off</span>
            <p>{d.tradeoff}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Cols3({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className={s.cols3}>
      {items.map((o) => (
        <li key={o.title}>
          <h3>{o.title}</h3>
          <p>{o.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function NextUp({ href, label, title }: { href: string; label: string; title: string }) {
  return (
    <Link href={href} className={s.next}>
      <div>
        <span className={s.mono}>{label}</span>
        <h2>{title}</h2>
      </div>
      <span className={s.arrow} aria-hidden>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path d="M3 9h12M10 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
    </Link>
  );
}
