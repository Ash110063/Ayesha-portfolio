"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface BackgroundVideoProps {
  src?: string;
  poster?: string;
  className?: string;
}

export default function BackgroundVideo({
  src = "/video/hero-bg.mp4",
  poster = "/images/hero/sky-bg.png",
  className,
}: BackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const play = () => {
      if (document.visibilityState === "hidden") return;
      if (!video.paused && !video.ended) return;
      void video.play().catch(() => {});
    };

    play();
    video.addEventListener("canplay", play);
    video.addEventListener("loadeddata", play);
    video.addEventListener("ended", play);
    video.addEventListener("pause", play);

    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", play);
    window.addEventListener("focus", play);
    window.addEventListener("touchstart", play, { passive: true });
    window.addEventListener("click", play);

    return () => {
      video.removeEventListener("canplay", play);
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("ended", play);
      video.removeEventListener("pause", play);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", play);
      window.removeEventListener("focus", play);
      window.removeEventListener("touchstart", play);
      window.removeEventListener("click", play);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 size-full object-cover",
        className,
      )}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      tabIndex={-1}
      disablePictureInPicture
      disableRemotePlayback
    />
  );
}
