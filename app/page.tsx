import { Sidebar } from "@/components/Sidebar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Sidebar />
      <section className={styles.work} aria-label="Selected work">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </section>
    </main>
  );
}
