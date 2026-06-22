'use client'

import { motion } from 'framer-motion'

export default function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8 group hover:bg-white/10 transition-colors"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mb-6 inline-block"
      >
        <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-3xl group-hover:bg-white/20 transition-colors">
          {icon}
        </div>
      </motion.div>

      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
        {title}
      </h3>

      <p className="text-text-muted leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
