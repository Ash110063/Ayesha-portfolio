'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTAButton({ children, href, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-black text-white border border-white hover:bg-white hover:text-black',
    outline: 'border border-white text-white hover:bg-white hover:text-black',
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={18} />
    </motion.a>
  )
}
