'use client'

import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hoverEffect = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -5 } : {}}
      viewport={{ once: true }}
      className={`glass rounded-2xl p-6 md:p-8 ${hoverEffect ? 'hover:bg-white/10 transition-colors' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
