'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, IndianRupee } from 'lucide-react'

const plans = [
  {
    name: '3kW System',
    subtitle: 'Perfect for small homes',
    price: '1,35,000',
    subsidyPrice: '57,000',
    subsidy: '78,000',
    units: '12–15 units/day',
    saving: '₹4,500/month',
    payback: '3–4 years',
    popular: false,
    features: [
      'Up to 3,000W peak output',
      '9 solar panels (330W each)',
      'Premium string inverter',
      'Net meter installation',
      'PM Surya Ghar subsidy',
      '5-year workmanship warranty',
      '25-year panel warranty',
      'Free annual check-up',
    ],
    color: 'border-white/10',
    glow: '',
  },
  {
    name: '5kW System',
    subtitle: 'Most popular choice',
    price: '2,25,000',
    subsidyPrice: '1,47,000',
    subsidy: '78,000',
    units: '20–25 units/day',
    saving: '₹7,500/month',
    payback: '3 years',
    popular: true,
    features: [
      'Up to 5,000W peak output',
      '15 solar panels (335W each)',
      'High-efficiency hybrid inverter',
      'Net meter installation',
      'PM Surya Ghar full subsidy',
      'Remote monitoring app',
      '5-year workmanship warranty',
      '25-year panel warranty',
      'Free biannual maintenance',
      'Priority customer support',
    ],
    color: 'border-solar-green/40',
    glow: 'shadow-green-glow',
  },
  {
    name: '10kW System',
    subtitle: 'For large homes & offices',
    price: '4,20,000',
    subsidyPrice: '3,42,000',
    subsidy: '78,000',
    units: '40–50 units/day',
    saving: '₹15,000/month',
    payback: '2.5 years',
    popular: false,
    features: [
      'Up to 10,000W peak output',
      '30 solar panels (335W each)',
      'Hybrid 3-phase inverter',
      'Battery storage ready',
      'Net meter installation',
      'PM Surya Ghar subsidy',
      'Remote monitoring system',
      '7-year workmanship warranty',
      '25-year panel warranty',
      'Quarterly maintenance visits',
      'Dedicated account manager',
    ],
    color: 'border-white/10',
    glow: '',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 solar-grid opacity-30" />
      
      {/* Subsidy Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-12 relative z-10"
      >
        <div className="relative overflow-hidden rounded-2xl border border-solar-gold/30 bg-gradient-to-r from-yellow-950/50 to-solar-dark-3">
          <div className="absolute inset-0 bg-gradient-to-r from-solar-gold/5 to-transparent pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 relative z-10">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-solar-gold/10 border border-solar-gold/20 flex items-center justify-center">
              <IndianRupee className="w-7 h-7 text-solar-gold" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-solar-gold font-mono text-xs tracking-widest uppercase mb-1">PM Surya Ghar Muft Bijli Yojana</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Get Up to <span className="text-solar-gold glow-text">₹78,000</span> Government Subsidy
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Central government scheme for residential rooftop solar. A&S handles all paperwork.
              </p>
            </div>
            <div className="flex-shrink-0 sm:ml-auto">
              <a href="#contact" className="block text-center bg-solar-gold text-black font-bold text-sm px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors whitespace-nowrap">
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-solar-green text-xs tracking-widest uppercase mb-3"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Solar{' '}
            <span className="text-solar-green">Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 mt-3 font-body max-w-md mx-auto"
          >
            All prices inclusive of panels, inverter, mounting, wiring, net meter & installation.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-2xl border ${plan.color} ${plan.glow} overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-solar-green via-green-300 to-solar-green" />
              )}
              
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1 bg-solar-green text-solar-dark text-[10px] font-bold px-2.5 py-1 rounded-full font-mono tracking-wider uppercase">
                    <Star className="w-2.5 h-2.5" fill="currentColor" /> Best Value
                  </span>
                </div>
              )}

              <div className={`p-7 flex-1 ${plan.popular ? 'glass-bright' : 'glass'}`}>
                {/* Name & price */}
                <div className="mb-6">
                  <p className="text-white/40 text-sm font-body mb-1">{plan.subtitle}</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{plan.name}</h3>

                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-white/40 text-sm mt-1.5 line-through">₹{plan.price}</span>
                    <div>
                      <span className="text-xs text-solar-gold font-mono bg-solar-gold/10 px-2 py-0.5 rounded-full">- ₹{plan.subsidy} subsidy</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-white/60 text-lg mt-1">₹</span>
                    <span className="font-display text-4xl font-bold text-white">{plan.subsidyPrice}</span>
                  </div>
                  <p className="text-white/30 text-xs font-mono mt-1">After government subsidy</p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white/3 border border-white/5">
                  <div className="text-center">
                    <p className="text-solar-green text-xs font-semibold">{plan.units}</p>
                    <p className="text-white/30 text-[10px] font-mono mt-0.5">Daily Units</p>
                  </div>
                  <div className="text-center border-x border-white/5">
                    <p className="text-solar-green text-xs font-semibold">{plan.saving}</p>
                    <p className="text-white/30 text-[10px] font-mono mt-0.5">Savings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-solar-green text-xs font-semibold">{plan.payback}</p>
                    <p className="text-white/30 text-[10px] font-mono mt-0.5">Payback</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/60 font-body">
                      <Check className="w-4 h-4 text-solar-green flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/919039897640?text=Hi, I'm interested in the ${plan.name} package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-solar-green text-solar-dark hover:bg-green-400 shine-btn'
                      : 'border border-solar-green/30 text-solar-green hover:bg-solar-green/5 hover:border-solar-green/60'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Get {plan.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-xs font-mono mt-8"
        >
          * Prices are indicative. Final quote depends on site survey. GST extra. EMI options available.
        </motion.p>
      </div>
    </section>
  )
}
