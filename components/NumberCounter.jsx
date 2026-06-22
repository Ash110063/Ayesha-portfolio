'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NumberCounter({ from = 0, to = 100, duration = 2, suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(from)

  useEffect(() => {
    const counter = { value: from }

    const tween = gsap.to(counter, {
      value: to,
      duration,
      onUpdate: () => {
        setValue(Math.ceil(counter.value))
      },
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        once: true,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [from, to, duration])

  return (
    <div ref={ref}>
      {value}
      {suffix}
    </div>
  )
}
