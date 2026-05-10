import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Sparkles, Mail, User } from 'lucide-react'
import { useMemo, useRef } from 'react'

const formatGuestName = (raw) => {
  if (!raw) return ''
  try {
    return decodeURIComponent(raw)
      .replace(/[-_+]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ')
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(' ')
  } catch {
    return raw
  }
}

const Hero = ({ onOpen, isOpened }) => {
  const ref = useRef(null)
  const guestName = useMemo(
    () => formatGuestName(new URLSearchParams(window.location.search).get('to')),
    []
  )
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const nameLetters = 'Asri & Ayuda'.split('')

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dusty-blue-100 via-white to-gold-100"
    >
      {/* Animated gradient mesh background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-mesh-blue opacity-70"
      />

      {/* Decorative blurred orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 -left-10 w-72 h-72 bg-dusty-blue-300 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], rotate: [0, -90, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 -right-10 w-96 h-96 bg-gold-300 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-dusty-blue-200 rounded-full blur-3xl opacity-40"
      />

      {/* Sparkle particles inside hero */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.4, 1.2, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 4,
            repeat: Infinity,
          }}
        >
          <Sparkles className="w-3 h-3 text-gold-400" />
        </motion.div>
      ))}

      {/* Floral Decorations */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        animate={{ opacity: 0.7, x: 0, rotate: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-64 h-48 pointer-events-none"
      >
        <img src="/assets/images/floral-left.svg" alt="" className="w-full h-full object-contain animate-tilt" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 10 }}
        animate={{ opacity: 0.7, x: 0, rotate: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute top-0 right-0 w-64 h-48 pointer-events-none"
      >
        <img src="/assets/images/floral-right.svg" alt="" className="w-full h-full object-contain animate-tilt" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
          <Sparkles className="w-4 h-4 text-gold-500 animate-sparkle" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <p className="font-serif text-lg md:text-xl text-dusty-blue-700 mb-3 italic tracking-wide">
            Bismillahirrahmanirrahim
          </p>
          <p className="font-serif text-base md:text-lg text-dusty-blue-600 mb-1">
            Dengan memohon Rahmat dan Ridho Allah SWT,
          </p>
          <p className="font-serif text-base md:text-lg text-dusty-blue-600">
            kami bermaksud menyelenggarakan resepsi pernikahan
          </p>
        </motion.div>

        {/* Animated couple names — letter by letter */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.7 },
            },
          }}
          className="mb-6 relative"
        >
          {/* Glow behind name */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-gold-300/40 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl relative inline-block">
            {nameLetters.map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { type: 'spring', damping: 14, stiffness: 100 },
                  },
                }}
                style={{ display: 'inline-block' }}
                className="text-gradient-gold drop-shadow-[0_4px_18px_rgba(212,175,55,0.35)]"
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-3"
          >
            <Heart className="inline-block text-gold-500 w-8 h-8 md:w-10 md:h-10 fill-current animate-heartbeat drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mb-10"
        >
          <p className="font-display text-2xl md:text-4xl text-dusty-blue-800 font-semibold tracking-widest">
            30 · MEI · 2026
          </p>
          <p className="font-sans text-sm md:text-base text-dusty-blue-600 mt-2 tracking-[0.3em] uppercase">
            Sabtu
          </p>
        </motion.div>

        {!isOpened && guestName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mb-8"
          >
            <p className="font-sans text-xs md:text-sm text-dusty-blue-600 tracking-[0.3em] uppercase mb-3">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm border border-gold-300/50 px-6 py-2 shadow-sm">
              <User className="w-4 h-4 text-gold-500" />
              <p className="font-script text-2xl md:text-3xl text-dusty-blue-800">
                {guestName}
              </p>
            </div>
            <p className="font-serif text-sm md:text-base text-dusty-blue-600 italic mt-3">
              Di tempat
            </p>
          </motion.div>
        )}

        {!isOpened && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.1 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpen}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4 font-sans font-medium text-white shadow-glow-gold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #5e7fa0 0%, #4a6686 50%, #3a506b 100%)',
            }}
          >
            <span className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Mail className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10 tracking-wider">Buka Undangan</span>
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 -z-10" />
          </motion.button>
        )}
      </motion.div>

      {/* Floating Decorative Rings */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-8 md:left-20 opacity-30"
      >
        <div className="w-20 h-20 border-2 border-dusty-blue-400 rounded-full">
          <div className="w-full h-full border-2 border-dashed border-gold-400 rounded-full animate-spin-slow" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [360, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 right-8 md:right-20 opacity-30"
      >
        <div className="w-24 h-24 border-2 border-gold-400 rounded-full">
          <div className="w-full h-full border-2 border-dashed border-dusty-blue-400 rounded-full animate-spin-reverse" />
        </div>
      </motion.div>

      {/* Scroll hint */}
      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2.4, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dusty-blue-600 text-xs tracking-[0.3em] font-sans uppercase"
        >
          Scroll
        </motion.div>
      )}
    </section>
  )
}

export default Hero
