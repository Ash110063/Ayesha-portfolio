import Image from "next/image";
import { SECTION_IDS } from "@/data/nav";
import { HERO_FOLDERS, HERO_TAGLINE } from "@/data/projects";
import FolderCard from "@/components/ui/FolderCard";
import HeroWordmark from "@/components/sections/HeroWordmark";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-[100svh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #000000 70.748%, #9af842 154.56%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <BackgroundVideo className="opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80" />
      </div>

      <div className="pointer-events-none absolute right-0 scale-120 bottom-[-31px] h-[min(673px,85vw)] w-[min(560px,72vw)] opacity-45 lg:opacity-100 xl:left-[calc(50%+180px)] xl:right-auto">
        <Image
          src="/images/hero/portrait-vercel.png"
          alt=""
          fill
          priority
          className="object-contain object-right-bottom"
          // style={{ transform: "rotate(180deg) scaleY(-1)" }}
          // sizes="(max-width: 1023px) 72vw, 560px"
        />
      </div>

      <div className="relative z-10 container-page flex min-h-[100svh] flex-col justify-end pb-14 pt-[calc(var(--nav-h)+48px)] md:justify-center md:pb-20">
        <HeroWordmark />

        <p className="mt-8 max-w-xl text-base leading-snug text-white md:mt-16 md:text-2xl md:leading-none">
          {HERO_TAGLINE[0]}
          <br />
          {HERO_TAGLINE[1]}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:max-w-[756px] md:grid-cols-3 md:gap-[35px]">
          {HERO_FOLDERS.map((folder) => (
            <FolderCard
              key={folder.title}
              shape={folder.shape}
              title={folder.title}
              body={folder.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
