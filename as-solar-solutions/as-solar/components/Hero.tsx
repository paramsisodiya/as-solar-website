'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Zap, Shield, Award } from 'lucide-react'
import { useEffect, useRef } from 'react'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 4,
}))

const stats = [
  { value: '500+', label: 'Installations', icon: Zap },
  { value: '₹78K', label: 'Max Subsidy', icon: Shield },
  { value: '25yr', label: 'Panel Warranty', icon: Award },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden solar-grid">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-solar-dark via-solar-dark-2 to-solar-dark" />
      
      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-solar-green opacity-[0.04] blur-[120px]" />
      </div>
      
      {/* Top-right accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-gold opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />
      
      {/* Animated particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-solar-green"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass border border-solar-green/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-solar-green animate-pulse" />
            <span className="text-xs font-mono text-solar-green tracking-widest uppercase">Rajgarh&apos;s #1 Solar Company</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Power Your{' '}
            <span className="relative">
              <span className="text-solar-green glow-text">Future</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </motion.svg>
            </span>
            <br />
            <span className="text-white/90">With Smart</span>
            <br />
            <span className="bg-gradient-to-r from-solar-green via-green-300 to-solar-gold bg-clip-text text-transparent">Solar Solutions</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed mb-10 font-body"
          >
            Save Money. Save Energy. Get up to{' '}
            <span className="text-solar-gold font-semibold">₹78,000 Government Subsidy</span>{' '}
            on your solar installation. Serving Rajgarh, Biaora & all of MP.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#contact"
              className="shine-btn relative group bg-solar-green text-solar-dark font-bold text-base px-8 py-4 rounded-full hover:bg-green-400 transition-all duration-300 hover:shadow-green-glow"
            >
              <span className="relative z-10">Get Free Consultation</span>
            </a>
            <a
              href="tel:9039897640"
              className="group flex items-center gap-2 border border-white/20 hover:border-solar-green/50 text-white/80 hover:text-solar-green px-8 py-4 rounded-full transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-solar-green animate-pulse" />
              Call Now: 9039897640
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-6 sm:gap-10"
          >
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-solar-green/10 border border-solar-green/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-solar-green" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-white/40 font-mono uppercase tracking-wider">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Decorative solar panel illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06] pointer-events-none hidden xl:block">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Solar panel grid */}
          {Array.from({length:4}).map((_,row) =>
            Array.from({length:3}).map((_,col) => (
              <rect key={`${row}-${col}`}
                x={col*120+10} y={row*90+10}
                width={108} height={78}
                rx="4"
                fill="#4ade80" fillOpacity="0.3"
                stroke="#4ade80" strokeOpacity="0.6" strokeWidth="1"
              />
            ))
          )}
        </svg>
      </div>
    </section>
  )
}
