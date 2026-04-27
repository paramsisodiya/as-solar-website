'use client'

import { motion } from 'framer-motion'
import { Users, Zap, Award, MapPin, TrendingUp, Leaf } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Zap, value: '2MW+', label: 'Power Installed' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: MapPin, value: '15+', label: 'Areas Covered' },
  { icon: TrendingUp, value: '₹2Cr+', label: 'Customer Savings' },
  { icon: Leaf, value: '3000T', label: 'CO₂ Saved' },
]

const brands = ['Adani Solar', 'Waaree', 'Vikram Solar', 'Longi', 'Growatt', 'Havells']

export default function TrustBand() {
  return (
    <>
      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden bg-solar-dark-3 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-solar-green/3 via-transparent to-solar-gold/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-solar-green/10 border border-solar-green/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-solar-green" />
                </div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white">{value}</p>
                <p className="text-white/40 text-xs font-mono mt-1 uppercase tracking-wide">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-10 bg-solar-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-mono text-white/20 uppercase tracking-widest mb-8">
            Authorized Partner — Premium Solar Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-mono font-bold text-white/20 hover:text-white/50 transition-colors cursor-default tracking-widest uppercase"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
