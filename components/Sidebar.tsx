import { site } from "@/data/site";
import { services } from "@/data/services";
import { RollText } from "./RollText";
import styles from "./Sidebar.module.css";

function Bullet() {
  return (
    <span className={styles.bullet} aria-hidden>
      <i style={{ left: 3, top: 0 }} />
      <i style={{ left: 3, top: 6 }} />
      <i style={{ left: 6, top: 3 }} />
      <i style={{ left: 0, top: 3 }} />
    </span>
  );
}

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Sky wallpaper + fade */}
      <div className={styles.wall} aria-hidden>
        <div className={styles.wallpaper}>
          {site.sidebarVideo ? (
            <video autoPlay muted loop playsInline preload="auto">
              <source src={site.sidebarVideo.replace(/\.mp4$/, ".webm")} type="video/webm" />
              <source src={site.sidebarVideo} type="video/mp4" />
            </video>
          ) : null}
        </div>
        <div className={styles.wallpaperFade} />
      </div>

      {/* Left rail */}
      <div className={styles.rail}>
        <a href="/" className={styles.logo} aria-label="Aisha Riaz — home">
          <img src="/assets/logo.svg" alt="" width={40.613} height={23.479} />
        </a>
        <span className={styles.vertical}>{site.name}</span>

        <div className={styles.slots}>
          <div className={styles.slotsText}>
            <span className={styles.slotsNum}>{site.slotsOpen}</span>
            <span className={styles.slotsLabel}>Slots</span>
            <span className={styles.slotsLabel}>Open</span>
          </div>
          <img src="/assets/slots-icon.svg" alt="" width={25} height={27} />
        </div>
      </div>

      {/* Top nav */}
      <nav className={styles.nav} aria-label="Main">
        {site.nav.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            data-roll
            className={`${styles.navLink} ${i === 0 ? styles.navFirst : ""}`}
          >
            <RollText text={item.label.toUpperCase()} />
          </a>
        ))}
      </nav>

      {/* Main content */}
      <div className={styles.content}>
        <h1 className={styles.headline}>{site.headline}</h1>

        <div className={styles.metaRow}>
          <Bullet />
          <p className={styles.meta}>{site.intro}</p>
        </div>

        <a href={site.cta.href} className={styles.cta} data-roll>
          <span className={styles.person} aria-hidden>
            <span className={styles.personCircle} />
            <span className={styles.personDot} />
            <span className={styles.personPlus} />
          </span>
          <RollText text={site.cta.label} />
        </a>

        <div className={`${styles.metaRow} ${styles.servicesLabel}`}>
          <Bullet />
          <h2 className={styles.meta}>Services I offer</h2>
        </div>

        <ul className={styles.chips}>
          {services.map((row, r) => (
            <li key={r} className={styles.chipRow}>
              {row.map((s) => (
                <span key={s.label} className={styles.chip} style={{ width: s.width }}>
                  <span className={styles.chipIcon} style={{ left: s.iconLeft }} aria-hidden>
                    {s.icon.map((part, i) => (
                      <span key={i} style={{ inset: part.inset }}>
                        <img src={part.src} alt="" />
                      </span>
                    ))}
                  </span>
                  <span className={styles.chipLabel} style={{ left: s.textLeft }}>
                    {s.label}
                  </span>
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
