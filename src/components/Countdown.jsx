import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Heart } from 'lucide-react'

const FlipDigit = ({ value }) => {
  const display = value.toString().padStart(2, '0')
  return (
    <div className="flex gap-1 justify-center">
      {display.split('').map((digit, idx) => (
        <div
          key={idx}
          className="relative w-10 md:w-14 h-14 md:h-20 overflow-hidden rounded-lg bg-gradient-to-b from-dusty-blue-700 to-dusty-blue-900 shadow-inner"
        >
          <span
            className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-display font-bold text-gold-400"
            style={{ textShadow: '0 0 18px rgba(212,175,55,0.5)' }}
          >
            {digit}
          </span>
          {/* Center divider line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-black/30" />
        </div>
      ))}
    </div>
  )
}

const Countdown = () => {
  const weddingDate = new Date('2026-05-30T08:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime()
      const distance = weddingDate - now
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [weddingDate])

  const TimeBox = ({ value, label }) => (
    <div className="relative group">
      {/* Glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-dusty-blue-400 to-gold-400 rounded-2xl opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500" />

      <div className="relative bg-white p-4 md:p-6 rounded-2xl shadow-soft border border-white/80">
        <FlipDigit value={value} />
        <div className="text-xs md:text-sm text-dusty-blue-600 font-sans mt-3 tracking-[0.25em] uppercase text-center font-medium">
          {label}
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-dusty-blue-50 to-white overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-dashed border-gold-300 rounded-full pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
            className="inline-block mb-4"
          >
            <Clock className="text-gold-500 w-12 h-12 drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
          </motion.div>
          <h2 className="font-script text-5xl md:text-7xl text-gradient-gold mb-3">
            Hitung Mundur
          </h2>
          <p className="font-serif italic text-lg text-dusty-blue-500">
            Menuju Hari Bahagia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <TimeBox value={timeLeft.days} label="Hari" />
          <TimeBox value={timeLeft.hours} label="Jam" />
          <TimeBox value={timeLeft.minutes} label="Menit" />
          <TimeBox value={timeLeft.seconds} label="Detik" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-dusty-blue-100 to-gold-100 text-dusty-blue-700 font-sans text-sm shadow-sm">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
            >
              <Heart className="w-4 h-4 text-gold-500 fill-current" />
            </motion.div>
            Sabtu, 30 Mei 2026
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Countdown
