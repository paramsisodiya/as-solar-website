'use client'

import { motion } from 'framer-motion'
import { Sun, MapPin, Phone, Mail, ArrowUpCircle } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Residential Solar',
  'Commercial Solar',
  'Solar Carport',
  'Agricultural Pump',
  'Net Metering',
  'Government Subsidy',
  'AMC & Maintenance',
  'Turnkey EPC',
]

const areas = [
  'Rajgarh', 'Biaora', 'Khilchipur',
  'Narsinghgarh', 'Pachore', 'Sarangpur',
  'Shujalpur', 'Kurawar', 'Zirapur',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-solar-dark border-t border-white/5">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-solar-green/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border-2 border-solar-green flex items-center justify-center">
                <Sun className="w-5 h-5 text-solar-green" />
              </div>
              <div>
                <p className="font-display text-xl font-bold">A<span className="text-solar-green">&</span>S Solar</p>
                <p className="text-[10px] text-white/30 font-mono tracking-widest uppercase">Solutions</p>
              </div>
            </div>
            <p className="text-white/40 text-sm font-body leading-relaxed mb-5">
              Rajgarh&apos;s most trusted solar installation company. Powering a greener future for MP with quality solar solutions since 2020.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-white/40 text-xs font-body">
                <MapPin className="w-3.5 h-3.5 text-solar-green flex-shrink-0 mt-0.5" />
                Girnar City, Near Main Gate, Rajgarh (M.P.)
              </div>
              <a href="tel:9039897640" className="flex items-center gap-2 text-white/40 hover:text-solar-green text-xs font-body transition-colors">
                <Phone className="w-3.5 h-3.5 text-solar-green flex-shrink-0" />
                9039897640 | 6267921229
              </a>
              <a href="mailto:arjunmewade133@gmail.com" className="flex items-center gap-2 text-white/40 hover:text-solar-green text-xs font-body transition-colors truncate">
                <Mail className="w-3.5 h-3.5 text-solar-green flex-shrink-0" />
                arjunmewade133@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-solar-green transition-colors font-body flex items-center gap-1.5 group">
                    <span className="text-solar-green/0 group-hover:text-solar-green transition-colors">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/50 hover:text-solar-green transition-colors font-body flex items-center gap-1.5 group">
                    <span className="text-solar-green/0 group-hover:text-solar-green transition-colors">›</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-5">Service Areas</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {areas.map(area => (
                <span key={area} className="text-xs border border-white/10 text-white/40 px-2.5 py-1 rounded-full font-mono hover:border-solar-green/30 hover:text-solar-green/60 transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
            
            {/* Subsidy CTA */}
            <div className="glass rounded-xl p-4 border border-solar-gold/20 mt-4">
              <p className="text-solar-gold text-xs font-mono font-bold mb-1">🎯 PM SURYA GHAR</p>
              <p className="text-white/60 text-xs font-body mb-3">Get up to ₹78,000 government subsidy on your solar system</p>
              <a href="#contact" className="block text-center text-xs font-bold bg-solar-gold/10 border border-solar-gold/30 text-solar-gold px-3 py-2 rounded-lg hover:bg-solar-gold/20 transition-colors">
                Apply for Subsidy →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-mono text-center sm:text-left">
            © {new Date().getFullYear()} A&S Solar Solutions. All rights reserved. | Rajgarh, Madhya Pradesh, India
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/20 text-xs font-mono">GSTIN: Coming Soon</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full border border-solar-green/20 flex items-center justify-center text-solar-green hover:bg-solar-green/10 transition-colors"
            >
              <ArrowUpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
