'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap } from 'lucide-react'

const projects = [
  {
    title: 'Residential Rooftop – 5kW',
    location: 'Rajgarh Colony, Rajgarh',
    capacity: '5kW',
    saved: '₹7,200/month',
    type: 'Residential',
    gradient: 'from-green-900/80 to-green-950/90',
    bg: 'bg-gradient-to-br from-solar-dark-3 to-solar-dark-4',
  },
  {
    title: 'Commercial Setup – 25kW',
    location: 'Industrial Area, Biaora',
    capacity: '25kW',
    saved: '₹35,000/month',
    type: 'Commercial',
    gradient: 'from-blue-900/80 to-blue-950/90',
    bg: 'bg-gradient-to-br from-blue-950 to-solar-dark',
  },
  {
    title: 'Solar Carport – 10kW',
    location: 'Near Bus Stand, Rajgarh',
    capacity: '10kW',
    saved: '₹14,500/month',
    type: 'Carport',
    gradient: 'from-yellow-900/80 to-yellow-950/90',
    bg: 'bg-gradient-to-br from-yellow-950 to-solar-dark',
  },
  {
    title: 'Farm Solar Pump – 7.5kW',
    location: 'Khilchipur, Rajgarh',
    capacity: '7.5kW',
    saved: '₹10,800/month',
    type: 'Agriculture',
    gradient: 'from-emerald-900/80 to-emerald-950/90',
    bg: 'bg-gradient-to-br from-emerald-950 to-solar-dark',
  },
  {
    title: 'School Rooftop – 15kW',
    location: 'Govt School, Rajgarh',
    capacity: '15kW',
    saved: '₹21,600/month',
    type: 'Institutional',
    gradient: 'from-purple-900/80 to-purple-950/90',
    bg: 'bg-gradient-to-br from-purple-950 to-solar-dark',
  },
  {
    title: 'Ground Mounted – 50kW',
    location: 'Narsinghgarh Road, MP',
    capacity: '50kW',
    saved: '₹72,000/month',
    type: 'Ground Mount',
    gradient: 'from-orange-900/80 to-orange-950/90',
    bg: 'bg-gradient-to-br from-orange-950 to-solar-dark',
  },
]

// Solar Panel SVG for project cards
function SolarPanelSVG({ color = '#4ade80' }: { color?: string }) {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
      {Array.from({length:3}).map((_,row) =>
        Array.from({length:4}).map((_,col) => (
          <rect key={`${row}-${col}`}
            x={col*48+4} y={row*44+4}
            width={42} height={38}
            rx="3"
            fill={color} fillOpacity="0.15"
            stroke={color} strokeOpacity="0.5" strokeWidth="1"
          />
        ))
      )}
      {/* Grid lines */}
      {[52,100,148].map(x => <line key={x} x1={x} y1="4" x2={x} y2="136" stroke={color} strokeOpacity="0.3" strokeWidth="0.5"/>)}
      {[48,92].map(y => <line key={y} x1="4" y1={y} x2="196" y2={y} stroke={color} strokeOpacity="0.3" strokeWidth="0.5"/>)}
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-solar-dark-2">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-solar-green text-xs tracking-widest uppercase mb-3"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-bold text-white"
            >
              Installed{' '}
              <span className="text-solar-green">Across</span>{' '}
              MP
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-xs text-sm font-body"
          >
            Powering homes, farms, schools & businesses across Rajgarh district.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-solar-green/30 transition-all duration-400 cursor-pointer"
            >
              {/* Visual area */}
              <div className={`relative h-44 ${project.bg} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <SolarPanelSVG />
                </div>
                {/* Type badge */}
                <span className="absolute top-3 left-3 text-[10px] font-mono bg-black/40 backdrop-blur-sm border border-white/10 text-white/60 px-2 py-1 rounded-full tracking-widest uppercase">
                  {project.type}
                </span>
                {/* Capacity badge */}
                <span className="absolute top-3 right-3 text-sm font-bold font-display text-solar-green bg-black/40 backdrop-blur-sm border border-solar-green/20 px-3 py-1 rounded-full">
                  {project.capacity}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-solar-green/0 group-hover:bg-solar-green/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="glass p-5">
                <h3 className="font-display text-base font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-white/40 text-xs mb-3">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-solar-green text-sm font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    Savings: {project.saved}
                  </div>
                  <span className="text-xs text-white/30 group-hover:text-solar-green transition-colors">View →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="inline-flex items-center gap-2 border border-solar-green/30 hover:border-solar-green text-solar-green hover:bg-solar-green/5 px-8 py-3 rounded-full transition-all duration-300 font-body text-sm">
            Start Your Project
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
