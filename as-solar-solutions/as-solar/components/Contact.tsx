'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Girnar City, Near Main Gate,\nRajgarh (M.P.) – 465661',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '9039897640 | 6267921229',
    href: 'tel:9039897640',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'arjunmewade133@gmail.com',
    href: 'mailto:arjunmewade133@gmail.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9AM – 7PM\nSunday: 10AM – 4PM',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Build WhatsApp message
    const msg = `New Solar Inquiry from A&S Website!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    const url = `https://wa.me/919039897640?text=${encodeURIComponent(msg)}`
    setTimeout(() => {
      window.open(url, '_blank')
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 solar-grid opacity-30" />
      
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-solar-green to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-solar-green text-xs tracking-widest uppercase mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Start Your Solar{' '}
            <span className="text-solar-green">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 font-body"
          >
            Free site visit • Free consultation • Zero obligation quote
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass rounded-xl p-4 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-solar-green/10 border border-solar-green/20 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-solar-green" />
                  </div>
                  <p className="text-xs text-white/30 font-mono uppercase tracking-wider mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-white/70 hover:text-solar-green transition-colors font-body leading-relaxed block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/70 font-body leading-relaxed whitespace-pre-line">{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:9039897640"
                className="flex items-center justify-center gap-2 py-3.5 bg-solar-green text-solar-dark font-bold rounded-xl hover:bg-green-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919039897640"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 border border-solar-green/40 text-solar-green rounded-xl hover:bg-solar-green/5 transition-colors text-sm font-semibold"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-white/5 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.4!2d76.6864!3d23.7707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzE0LjUiTiA3NsKwNDEnMTEuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="glass-bright border-gradient rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-80">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-6">
                  <CheckCircle className="w-20 h-20 text-solar-green mx-auto" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 font-body mb-6">
                  Your inquiry has been forwarded to WhatsApp. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', email:'', service:'', message:'' }) }}
                  className="text-solar-green border border-solar-green/30 px-6 py-2 rounded-full text-sm hover:bg-solar-green/5 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-bright border-gradient rounded-2xl p-8 space-y-5">
                <h3 className="font-display text-xl font-bold text-white mb-2">Request Free Quote</h3>
                <p className="text-white/40 text-sm font-body mb-6">Fill in your details and we&apos;ll get back to you with a custom solar plan.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="10-digit number"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Service Required *</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({...form, service: e.target.value})}
                    className="form-input"
                    style={{ background: '#0a120a' }}
                  >
                    <option value="">Select a service...</option>
                    <option>3kW Residential System</option>
                    <option>5kW Residential System</option>
                    <option>10kW System</option>
                    <option>Commercial/Industrial Solar</option>
                    <option>Solar Carport</option>
                    <option>Agricultural Solar Pump</option>
                    <option>AMC & Maintenance</option>
                    <option>Government Subsidy Application</option>
                    <option>Free Site Survey</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirement, monthly bill, or any questions..."
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="shine-btn w-full flex items-center justify-center gap-2 py-4 bg-solar-green text-solar-dark font-bold rounded-xl hover:bg-green-400 transition-colors disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-solar-dark border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-white/25 font-mono">
                  Free consultation • No spam • Rajgarh, Madhya Pradesh
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
