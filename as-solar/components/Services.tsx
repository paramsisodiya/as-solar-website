'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building2, Zap, WrenchIcon, Sun, LineChart, BadgeCheck, Truck } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Rooftop solar systems for homes. Cut your electricity bill by up to 90% and earn from surplus power.',
    tag: 'Most Popular',
    color: 'from-green-900/30 to-green-950/10',
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Large-scale EPC solutions for offices, factories, and commercial establishments in Rajgarh & MP.',
    tag: null,
    color: 'from-blue-900/20 to-blue-950/5',
  },
  {
    icon: Sun,
    title: 'Solar Carport',
    description: 'Dual-purpose solar carport structures that protect your vehicles while generating clean energy.',
    tag: 'New',
    color: 'from-yellow-900/20 to-yellow-950/5',
  },
  {
    icon: Zap,
    title: 'Net Metering',
    description: 'Full DISCOM net metering setup. Sell surplus electricity back to the grid and earn monthly credits.',
    tag: null,
    color: 'from-orange-900/20 to-orange-950/5',
  },
  {
    icon: WrenchIcon,
    title: 'AMC & Maintenance',
    description: 'Annual maintenance contracts. Regular cleaning, inspection, and performance optimization for your system.',
    tag: null,
    color: 'from-purple-900/20 to-purple-950/5',
  },
  {
    icon: LineChart,
    title: 'Solar Audit',
    description: 'Free solar potential assessment for your site. We analyze shading, roof angle, and load requirements.',
    tag: 'Free',
    color: 'from-teal-900/20 to-teal-950/5',
  },
  {
    icon: BadgeCheck,
    title: 'Subsidy Assistance',
    description: 'Complete government subsidy documentation and application support. Get up to ₹78,000 PM Surya Ghar subsidy.',
    tag: 'Save ₹78K',
    color: 'from-green-900/30 to-green-950/10',
  },
  {
    icon: Truck,
    title: 'Turnkey EPC',
    description: 'End-to-end Engineering, Procurement & Construction. From design to commissioning, we handle everything.',
    tag: null,
    color: 'from-indigo-900/20 to-indigo-950/5',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-hover glass border-gradient rounded-2xl p-6 group cursor-default"
    >
      {/* Tag */}
      {service.tag && (
        <span className="inline-block text-[10px] font-mono text-solar-green border border-solar-green/30 bg-solar-green/5 px-2.5 py-1 rounded-full mb-4 tracking-widest uppercase">
          {service.tag}
        </span>
      )}
      
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-solar-green" />
      </div>

      <h3 className="font-display text-lg font-bold text-white mb-2">{service.title}</h3>
      <p className="text-sm text-white/50 leading-relaxed font-body">{service.description}</p>

      {/* Bottom arrow */}
      <div className="mt-4 flex items-center gap-2 text-solar-green/0 group-hover:text-solar-green/70 transition-all duration-300 text-sm font-medium">
        <span>Learn more</span>
        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 solar-grid opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-solar-green text-xs tracking-widest uppercase mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Complete Solar{' '}
            <span className="text-solar-green glow-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto font-body"
          >
            From residential rooftops to large commercial installations — A&S Solar delivers end-to-end clean energy solutions across Rajgarh.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
