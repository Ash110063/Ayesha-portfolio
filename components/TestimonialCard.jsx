'use client'

import { motion } from 'framer-motion'

export default function TestimonialCard({ testimonial, delay = 0 }) {
  const { name, role, image, message, rating } = testimonial

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-8"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>

      {/* Message */}
      <p className="text-white mb-6 italic leading-relaxed">
        "{message}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-white">
            {name}
          </p>
          <p className="text-text-muted text-sm">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
