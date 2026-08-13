"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aisha-riaz-452215244/",
    icon: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:ashii110063@gmail.com",
    icon: "email",
  },
  {
    name: "Phone",
    href: "tel:+923328556215",
    icon: "phone",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand - Logo Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Logo Image */}
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-30 w-30 object-contain"
              />
            </Link>

            <p className="text-gray-300 text-sm mt-2">
              Building beautiful and functional web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  UI Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Consultation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Optimization
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-white">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.icon === "linkedin" ? "_blank" : undefined}
                  rel={
                    link.icon === "linkedin" ? "noopener noreferrer" : undefined
                  }
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label={link.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* LinkedIn */}
                    {link.icon === "linkedin" && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}

                    {/* Email */}
                    {link.icon === "email" && (
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                    )}

                    {/* Phone */}
                    {link.icon === "phone" && (
                      <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-300 text-sm">
            © 2026 Dev Ayesha Riaz. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
