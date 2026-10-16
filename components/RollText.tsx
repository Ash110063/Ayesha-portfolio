import styles from "./RollText.module.css";

/**
 * Letter-by-letter "roll" on hover, matching the Figma setup where each
 * character carries a copy of itself 18px below (via text-shadow).
 * The hover is triggered by any ancestor with the `data-roll` attribute.
 */
export function RollText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`${styles.roll} ${className ?? ""}`} aria-label={text}>
      {Array.from(text).map((ch, i) =>
        ch === " " ? (
          <span key={i} className={styles.space} aria-hidden />
        ) : (
          <span key={i} className={styles.cell} aria-hidden>
            <span className={styles.char} style={{ transitionDelay: `${i * 18}ms` }}>
              {ch}
            </span>
          </span>
        )
      )}
    </span>
  );
}
