'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingDown, Leaf, IndianRupee } from 'lucide-react'

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(3000)
  const [systemSize, setSystemSize] = useState(5)
  const [results, setResults] = useState({
    annualSavings: 0,
    twentyYearSavings: 0,
    co2Saved: 0,
    paybackYears: 0,
    dailyUnits: 0,
    roiPercent: 0,
  })

  useEffect(() => {
    const unitsPerKw = 4.5 // avg in MP
    const dailyUnits = systemSize * unitsPerKw
    const monthlyUnits = dailyUnits * 30
    const costPerUnit = monthlyBill / (monthlyBill / 8) // approx cost per unit = bill / units
    const monthlySavings = Math.min(monthlyBill * 0.85, monthlyUnits * 8) // max 85% savings
    const annualSavings = monthlySavings * 12
    const systemCost = systemSize * 45000 - 78000 // rough cost minus subsidy (min 0)
    const effectiveCost = Math.max(systemCost, 50000)
    const paybackYears = effectiveCost / annualSavings
    const twentyYearSavings = annualSavings * 20
    const co2Saved = (dailyUnits * 365 * 0.82).toFixed(0) // 0.82 kg CO2 per unit in India

    setResults({
      annualSavings: Math.round(annualSavings),
      twentyYearSavings: Math.round(twentyYearSavings),
      co2Saved: Number(co2Saved),
      paybackYears: Math.round(paybackYears * 10) / 10,
      dailyUnits: Math.round(dailyUnits * 10) / 10,
      roiPercent: Math.round((annualSavings / effectiveCost) * 100),
    })
  }, [monthlyBill, systemSize])

  const formatAmount = (n: number) => {
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`
    if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`
    return `₹${n}`
  }

  return (
    <section id="calculator" className="section-pad relative overflow-hidden bg-solar-dark-2">
      <div className="absolute inset-0 solar-grid opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-solar-green text-xs tracking-widest uppercase mb-3"
          >
            Free Tool
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Solar Savings{' '}
            <span className="text-solar-green">Calculator</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 font-body"
          >
            See how much you can save by going solar in Rajgarh
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-bright border-gradient rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-solar-green/10 border border-solar-green/20 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-solar-green" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Your Details</h3>
            </div>

            {/* Monthly Bill Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-white/60 font-body">Monthly Electricity Bill</label>
                <span className="font-display text-xl font-bold text-solar-green">₹{monthlyBill.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="30000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-solar-dark-3 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4ade80 0%, #4ade80 ${((monthlyBill - 500) / 29500) * 100}%, #162416 ${((monthlyBill - 500) / 29500) * 100}%, #162416 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-white/20 font-mono mt-1">
                <span>₹500</span>
                <span>₹30,000</span>
              </div>
            </div>

            {/* System Size Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-white/60 font-body">System Size</label>
                <span className="font-display text-xl font-bold text-solar-green">{systemSize} kW</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={systemSize}
                onChange={(e) => setSystemSize(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4ade80 0%, #4ade80 ${((systemSize - 1) / 19) * 100}%, #162416 ${((systemSize - 1) / 19) * 100}%, #162416 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-white/20 font-mono mt-1">
                <span>1kW</span>
                <span>20kW</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div>
              <p className="text-xs text-white/30 font-mono uppercase tracking-wider mb-3">Quick Presets</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { size: 3, bill: 1500, label: '3kW' },
                  { size: 5, bill: 3000, label: '5kW' },
                  { size: 10, bill: 6000, label: '10kW' },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => { setSystemSize(preset.size); setMonthlyBill(preset.bill) }}
                    className={`py-2 rounded-lg border text-sm font-mono transition-all duration-200 ${
                      systemSize === preset.size
                        ? 'border-solar-green bg-solar-green/10 text-solar-green'
                        : 'border-white/10 text-white/40 hover:border-solar-green/30 hover:text-solar-green/60'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Main savings */}
            <div className="glass-bright border border-solar-green/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                <TrendingDown className="w-4 h-4 text-solar-green" />
                Annual Savings
              </div>
              <motion.p
                key={results.annualSavings}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-display text-5xl font-bold text-solar-green glow-text"
              >
                {formatAmount(results.annualSavings)}
              </motion.p>
              <p className="text-white/30 text-sm mt-1 font-body">per year on electricity bills</p>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: '20-Year Savings',
                  value: formatAmount(results.twentyYearSavings),
                  sub: 'lifetime returns',
                  icon: IndianRupee,
                  color: 'text-solar-gold',
                },
                {
                  label: 'Payback Period',
                  value: `${results.paybackYears} yrs`,
                  sub: 'return on investment',
                  icon: Calculator,
                  color: 'text-blue-400',
                },
                {
                  label: 'Daily Generation',
                  value: `${results.dailyUnits} units`,
                  sub: 'average per day in MP',
                  icon: TrendingDown,
                  color: 'text-solar-green',
                },
                {
                  label: 'CO₂ Saved/year',
                  value: `${(results.co2Saved / 1000).toFixed(1)}T`,
                  sub: 'tonnes of carbon',
                  icon: Leaf,
                  color: 'text-emerald-400',
                },
              ].map(({ label, value, sub, icon: Icon, color }) => (
                <motion.div
                  key={label}
                  className="glass rounded-xl p-4 border border-white/5"
                  whileHover={{ borderColor: 'rgba(74,222,128,0.2)' }}
                >
                  <Icon className={`w-4 h-4 ${color} mb-2`} />
                  <motion.p
                    key={value}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`font-display text-2xl font-bold ${color}`}
                  >
                    {value}
                  </motion.p>
                  <p className="text-white/30 text-xs font-body mt-0.5">{label}</p>
                  <p className="text-white/20 text-[10px] font-mono">{sub}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/919039897640?text=Hi, my monthly bill is ₹${monthlyBill} and I want a ${systemSize}kW solar system. Please give me a quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-btn flex items-center justify-center gap-2 w-full py-4 bg-solar-green text-solar-dark font-bold rounded-xl hover:bg-green-400 transition-colors"
            >
              Get Custom Quote on WhatsApp →
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4ade80;
          cursor: pointer;
          border: 3px solid #050a05;
          box-shadow: 0 0 10px rgba(74,222,128,0.4);
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4ade80;
          cursor: pointer;
          border: 3px solid #050a05;
        }
      `}</style>
    </section>
  )
}
