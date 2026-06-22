'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Parallax({ children, offset = 50 }) {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, offset])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}
