'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'About Me', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Services', href: '/#services', isScroll: true },
  ]

  const handleScroll = (e, href) => {
    if (href.startsWith('/#')) {
      if (pathname === '/') {
        e.preventDefault()
        const id = href.replace('/#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          setIsOpen(false)
        }
      }
    }
  }

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
      
      {/* Main Navbar: lg: se desktop view shuru hoga, 768px (md) par hamburger hi rahega */}
      <nav className="w-full lg:w-auto lg:min-w-[850px] h-[56px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-5 flex items-center justify-between shadow-2xl overflow-hidden">
        
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center w-35 h-full">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="max-h-[22px] md:max-h-[32px] w-auto object-contain" 
            />
          </Link>
        </div>

        {/* Desktop Links (Hidden on Tablets & Phones) */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => link.isScroll && handleScroll(e, link.href)}
              className="text-gray-300 hover:text-white text-[14px] font-medium transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden lg:block">
            <motion.button
             whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full border border-white/10 transition-all"
            >
              Contact Me
            </motion.button>
          </Link>

          {/* Mobile/Tablet Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/5 rounded-full border border-white/10 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-16 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] p-5 flex flex-col gap-3 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if(link.isScroll) handleScroll(e, link.href);
                  else setIsOpen(false);
                }}
                className="text-gray-300 text-sm font-medium p-3 hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="pt-2">
              <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-sm">
                Contact Me
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}