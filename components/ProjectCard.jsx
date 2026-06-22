'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project, delay = 0 }) {
  const { title, description, image, tags, link, github, category } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-secondary">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
            <div className="flex gap-3">
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center"
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center"
                >
                  <Github size={20} />
                </motion.a>
              )}
            </div>
            <span className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-lg">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
            {title}
          </h3>
          <p className="text-text-muted mb-4 flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
