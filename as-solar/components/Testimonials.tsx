'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Rajesh Kumar Sharma',
    role: 'Homeowner, Rajgarh Colony',
    initials: 'RK',
    rating: 5,
    text: 'A&S Solar ne mera bijli bill ₹4,500 se ₹0 kar diya! 5kW system lagwaya aur subsidy bhi mil gayi. Team bahut professional hai aur kaam time pe hua. Bahut khush hun.',
    system: '5kW Residential',
    savings: '₹4,500/month saved',
    color: 'from-green-900 to-green-950',
  },
  {
    name: 'Sunita Agarwal',
    role: 'Business Owner, Biaora',
    initials: 'SA',
    rating: 5,
    text: 'Our factory electricity cost was very high. Arjun bhai and his team installed 25kW commercial system. Now our monthly savings are over ₹35,000. Best decision ever for our business.',
    system: '25kW Commercial',
    savings: '₹35,000/month saved',
    color: 'from-blue-900 to-blue-950',
  },
  {
    name: 'Dinesh Patel',
    role: 'Farmer, Khilchipur',
    initials: 'DP',
    rating: 5,
    text: 'Solar pump lagwane ke baad kheti mein bahut fayda hua. Diesel ka kharcha khatam aur paani bhi timely milta hai. A&S team ne sarkari subsidy bhi dilwai. Thank you A&S!',
    system: '7.5kW Agriculture',
    savings: '₹8,000/month saved',
    color: 'from-emerald-900 to-emerald-950',
  },
  {
    name: 'Anita Verma',
    role: 'Principal, Govt School Rajgarh',
    initials: 'AV',
    rating: 5,
    text: 'School mein 15kW system lagwaya. Ab bijli bill bilkul nahi aata. Bacche bhi happy hain air conditioning ki wajah se. A&S Solar ka service exceptional hai. Highly recommended.',
    system: '15kW Institutional',
    savings: '₹21,600/month saved',
    color: 'from-purple-900 to-purple-950',
  },
  {
    name: 'Mohammad Farid',
    role: 'Hotel Owner, Rajgarh',
    initials: 'MF',
    rating: 5,
    text: 'Hotel ka bijli bill bahut zyada aata tha. 10kW system se ab savings hain. A&S team ne design se lekar commissioning tak sab kuch handle kiya. Professional aur trustworthy team.',
    system: '10kW Commercial',
    savings: '₹14,500/month saved',
    color: 'from-orange-900 to-orange-950',
  },
  {
    name: 'Priya Singh',
    role: 'Homeowner, Pachore',
    initials: 'PS',
    rating: 5,
    text: '3kW system se hamare ghar ka bill zero ho gaya. Arjun ji ne subsidy application bhi handle ki. Pura process bahut smooth raha. Rajgarh mein best solar company yahi hai!',
    system: '3kW Residential',
    savings: '₹3,200/month saved',
    color: 'from-teal-900 to-teal-950',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-solar-dark to-solar-dark-2" />
      
      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 text-solar-green/5">
        <Quote className="w-40 h-40" fill="currentColor" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-solar-green text-xs tracking-widest uppercase mb-3"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            What Our{' '}
            <span className="text-solar-green">Customers</span>{' '}
            Say
          </motion.h2>
        </div>

        {/* Featured testimonial */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-bright border-gradient rounded-2xl p-8 mb-8 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center font-display text-xl font-bold text-white flex-shrink-0`}>
              {testimonials[active].initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({length: testimonials[active].rating}).map((_,i) => (
                  <Star key={i} className="w-4 h-4 text-solar-gold fill-solar-gold" />
                ))}
              </div>
              <p className="font-display text-lg font-bold text-white">{testimonials[active].name}</p>
              <p className="text-white/40 text-sm font-body">{testimonials[active].role}</p>
            </div>
            <Quote className="w-8 h-8 text-solar-green/20 flex-shrink-0" fill="currentColor" />
          </div>
          
          <p className="text-white/70 text-base leading-relaxed font-body italic mb-5">
            &ldquo;{testimonials[active].text}&rdquo;
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-mono bg-solar-green/10 border border-solar-green/20 text-solar-green px-3 py-1.5 rounded-full">
              {testimonials[active].system}
            </span>
            <span className="text-xs font-mono bg-solar-gold/10 border border-solar-gold/20 text-solar-gold px-3 py-1.5 rounded-full">
              {testimonials[active].savings}
            </span>
          </div>
        </motion.div>

        {/* Thumbnail nav */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setActive(i)}
              className={`relative p-3 rounded-xl border text-left transition-all duration-200 ${
                active === i
                  ? 'border-solar-green/50 bg-solar-green/5'
                  : 'border-white/5 glass hover:border-white/20'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white mb-2`}>
                {t.initials}
              </div>
              <p className="text-xs font-semibold text-white leading-tight">{t.name.split(' ')[0]}</p>
              <p className="text-[10px] text-white/30 font-mono mt-0.5 truncate">{t.system}</p>
            </motion.button>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-solar-gold/20">
            <div className="flex">
              {Array.from({length:5}).map((_,i) => (
                <Star key={i} className="w-4 h-4 text-solar-gold fill-solar-gold" />
              ))}
            </div>
            <span className="font-display text-xl font-bold text-white">4.9</span>
            <span className="text-white/40 text-sm font-body">/ 5 — Based on 200+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
