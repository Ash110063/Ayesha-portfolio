import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(animationConfig = {}) {
  const elementRef = useRef(null)

  const {
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0 },
    duration = 0.8,
    delay = 0,
    trigger = null,
  } = animationConfig

  useEffect(() => {
    if (!elementRef.current) return

    gsap.fromTo(
      elementRef.current,
      from,
      {
        ...to,
        duration,
        delay,
        scrollTrigger: {
          trigger: trigger || elementRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          markers: false,
        },
      }
    )

    return () => {
      if (elementRef.current) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [from, to, duration, delay, trigger])

  return elementRef
}
