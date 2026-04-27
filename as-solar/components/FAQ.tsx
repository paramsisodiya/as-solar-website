'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much does a solar system cost in Rajgarh?',
    a: 'A 3kW system costs around ₹1,35,000, a 5kW around ₹2,25,000, and a 10kW around ₹4,20,000 before subsidy. With PM Surya Ghar government subsidy of up to ₹78,000, your effective cost drops significantly. Final price depends on site survey.',
  },
  {
    q: 'What is PM Surya Ghar Muft Bijli Yojana and how do I apply?',
    a: 'PM Surya Ghar is a central government scheme offering ₹30,000 for 1kW, ₹18,000 for the 2nd kW, and ₹9,000 for the 3rd kW (max ₹78,000) on residential rooftop solar. A&S Solar handles the entire application process for you — no paperwork hassle.',
  },
  {
    q: 'How long does installation take?',
    a: 'For residential systems (3–10kW), installation typically takes 1–3 days once all materials are at site. Net meter application and activation takes an additional 2–4 weeks depending on MPPKVVCL processing.',
  },
  {
    q: 'Will solar panels work during power cuts?',
    a: 'Standard grid-tied systems don\'t work during power cuts for safety reasons. However, we offer hybrid solar systems with battery storage that provide backup power during outages. Ask about our hybrid solutions.',
  },
  {
    q: 'How much can I save on my electricity bill?',
    a: 'Most residential customers save 70–90% on their monthly bill. The exact savings depend on your system size, consumption, and net metering. Use our savings calculator above to get an estimate.',
  },
  {
    q: 'What is net metering?',
    a: 'Net metering lets you sell surplus solar electricity back to MPPKVVCL (the local grid). Your meter runs backward when generating excess power, earning you credits that offset your night-time electricity use.',
  },
  {
    q: 'Do you serve areas outside Rajgarh city?',
    a: 'Yes! We serve all of Rajgarh district including Biaora, Khilchipur, Narsinghgarh, Pachore, Sarangpur, and surrounding villages. Contact us for site visit availability.',
  },
  {
    q: 'What warranty do you provide?',
    a: 'Solar panels carry 25-year linear performance warranty from the manufacturer. Inverters carry 5-10 years warranty. A&S provides 5-year workmanship warranty on installation. We also offer Annual Maintenance Contracts (AMC).',
  },
  {
    q: 'Is my roof suitable for solar?',
    a: 'Most roofs are suitable. We assess roof age, orientation (south-facing is ideal), shading from nearby trees or buildings, and structural strength. Our team does a free site survey and tells you exactly what\'s possible for your home.',
  },
  {
    q: 'What brands of solar panels do you use?',
    a: 'We use premium Tier-1 panels from brands like Adani Solar, Waaree, Vikram Solar, and Longi — all BIS certified and approved for PM Surya Ghar subsidy. We don\'t compromise on quality.',
  },
]

function FAQItem({ q, a, index }: { q: string, a: string, index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? 'border-solar-green/30 bg-solar-green/3' : 'border-white/5 glass'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className={`font-body text-sm font-medium leading-relaxed transition-colors ${open ? 'text-solar-green' : 'text-white/80'}`}>
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
          <ChevronDown className={`w-5 h-5 transition-colors ${open ? 'text-solar-green' : 'text-white/30'}`} />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-white/50 text-sm leading-relaxed font-body">
          {a}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-solar-dark-2">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-solar-green text-xs tracking-widest uppercase mb-3"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Frequently Asked{' '}
            <span className="text-solar-green">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/40 font-body mb-4">Still have questions?</p>
          <a
            href="https://wa.me/919039897640"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-solar-green text-solar-dark font-bold px-8 py-3 rounded-full hover:bg-green-400 transition-colors"
          >
            Chat With Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
