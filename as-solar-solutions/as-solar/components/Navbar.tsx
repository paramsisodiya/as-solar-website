'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-green-900/30 py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-solar-green rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
              <div className="relative w-10 h-10 rounded-full border-2 border-solar-green flex items-center justify-center">
                <Sun className="w-5 h-5 text-solar-green" />
              </div>
            </div>
            <div>
              <span className="font-display text-xl font-bold text-white tracking-tight">A<span className="text-solar-green">&</span>S</span>
              <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase leading-none">Solar Solutions</p>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 hover:text-solar-green transition-colors duration-200 font-body tracking-wide underline-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9039897640"
              className="flex items-center gap-2 text-sm text-solar-green border border-solar-green/30 hover:border-solar-green/60 px-4 py-2 rounded-full transition-all duration-200 hover:bg-solar-green/5"
            >
              <Phone className="w-3.5 h-3.5" />
              9039897640
            </a>
            <a
              href="#contact"
              className="shine-btn bg-solar-green text-solar-dark font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-green-400 transition-colors duration-200"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-solar-green transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 glass-bright pt-20"
          >
            <div className="flex flex-col h-full p-6">
              <ul className="flex flex-col gap-2 mb-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 border-b border-white/5 text-lg text-white/80 hover:text-solar-green transition-colors"
                    >
                      {link.label}
                      <span className="text-solar-green/40">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3">
                <a
                  href="tel:9039897640"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-solar-green/40 rounded-xl text-solar-green"
                >
                  <Phone className="w-4 h-4" />
                  9039897640
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-solar-green text-solar-dark font-semibold rounded-xl"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
