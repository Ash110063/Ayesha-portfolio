'use client'

import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, accent = true, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center ${className}`}
    >
      {accent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-2 rounded-full glass"
        >
          <span className="text-sm font-semibold text-white">✨ {accent}</span>
        </motion.div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
