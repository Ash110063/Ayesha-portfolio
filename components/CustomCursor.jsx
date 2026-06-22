'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const cursorPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const animateCursor = () => {
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * 0.3
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * 0.3

      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPosition.current.x - 12 + 'px'
        cursorRef.current.style.top = cursorPosition.current.y - 12 + 'px'
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = mousePosition.current.x - 4 + 'px'
        cursorDotRef.current.style.top = mousePosition.current.y - 4 + 'px'
      }

      requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', handleMouseMove)
    const animationId = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="hidden lg:block fixed pointer-events-none z-50 w-6 h-6 border-2 border-white rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        ref={cursorDotRef}
        className="hidden lg:block fixed pointer-events-none z-50 w-2 h-2 bg-white rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}
