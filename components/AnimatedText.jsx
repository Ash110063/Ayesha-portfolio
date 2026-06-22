'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AnimatedText({ text, className = '', stagger = 0.05, delay = 0 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('span')

    gsap.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: stagger,
        delay: delay,
        ease: 'power2.out',
      }
    )
  }, [stagger, delay])

  return (
    <div ref={containerRef} className={className}>
      {text.split('').map((char, index) => (
        <span key={index} style={{ display: 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}
