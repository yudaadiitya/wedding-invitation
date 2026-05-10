import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Heart, Instagram, Sparkles } from 'lucide-react'
import { useRef } from 'react'

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`perspective-card ${className}`}
    >
      {children}
    </motion.div>
  )
}

const ProfileCard = ({ name, fullName, instagram, igHandle, parentLabel, parents, emoji, delay = 0 }) => (
  <TiltCard>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className="relative bg-gradient-to-br from-white via-dusty-blue-50 to-white p-8 rounded-3xl shadow-soft hover:shadow-glow-gold transition-shadow duration-700 overflow-hidden"
    >
      {/* corner sparkles */}
      <Sparkles className="absolute top-4 right-4 w-5 h-5 text-gold-400 animate-sparkle" />
      <Sparkles className="absolute bottom-4 left-4 w-4 h-4 text-dusty-blue-400 animate-sparkle" style={{ animationDelay: '1.2s' }} />

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gold-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-dusty-blue-200 rounded-full blur-3xl" />
      </div>

      <div className="text-center relative z-10">
        {/* Profile photo with rotating gradient ring */}
        <div className="mb-6 flex justify-center">
          <div className="gradient-ring inline-block rounded-full">
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="w-40 h-40 bg-gradient-to-br from-dusty-blue-100 to-dusty-blue-300 rounded-full flex items-center justify-center overflow-hidden shadow-inner-glow"
            >
              <span className="font-script text-7xl text-gradient-gold drop-shadow-xl">
                {emoji}
              </span>
            </motion.div>
          </div>
        </div>

        <h3 className="font-script text-5xl md:text-6xl text-gradient-gold mb-3">
          {name}
        </h3>
        <h4 className="font-display text-xl md:text-2xl font-semibold text-dusty-blue-800 mb-3">
          {fullName}
        </h4>

        <motion.a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-dusty-blue-100 to-gold-100 text-dusty-blue-700 hover:text-gold-600 transition-colors duration-300 shadow-sm"
        >
          <Instagram className="w-4 h-4" />
          <span className="font-sans text-sm font-medium">{igHandle}</span>
        </motion.a>

        <div className="space-y-1">
          <p className="font-sans text-sm text-dusty-blue-500 italic">
            {parentLabel}
          </p>
          <p className="font-display text-lg font-semibold text-dusty-blue-700">
            {parents.father}
          </p>
          <p className="font-display text-lg font-semibold text-dusty-blue-700">
            & {parents.mother}
          </p>
        </div>
      </div>
    </motion.div>
  </TiltCard>
)

const Mempelai = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-dusty-blue-50/40 to-white overflow-hidden">
      {/* pattern dots */}
      <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 pointer-events-none">
        <img src="/assets/images/floral-left.svg" alt="" className="w-full h-full object-contain animate-tilt" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none">
        <img src="/assets/images/floral-right.svg" alt="" className="w-full h-full object-contain animate-tilt" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500" />
            <Heart className="w-4 h-4 text-gold-500 fill-current animate-heartbeat" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="font-script text-5xl md:text-7xl animate-gradient-text mb-2">
            Mempelai
          </h2>
          <p className="font-serif italic text-dusty-blue-500 mt-2">The Bride & Groom</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <ProfileCard
            name="Asri"
            fullName="Asri Aditya Lestari, M.Pd., Gr."
            instagram="https://instagram.com/asriadityalestari"
            igHandle="@asriadityalestari"
            parentLabel="Putri Pertama dari"
            parents={{ father: 'Bpk. Atang Hermawan', mother: 'Ibu Popong Siti Hajar' }}
            emoji="AS"
            delay={0}
          />
          <ProfileCard
            name="Ayuda"
            fullName="Ayuda Noveliana Megus, S.Par."
            instagram="https://instagram.com/okazakiiyuda7"
            igHandle="@okazakiiyuda7"
            parentLabel="Putra Pertama dari"
            parents={{ father: 'Bpk. Ade Yuspida', mother: 'Ibu Eli Subiarsih' }}
            emoji="AY"
            delay={0.2}
          />
        </div>

        {/* Quote with elegant treatment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16 max-w-3xl mx-auto relative"
        >
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-7xl text-gold-300 font-serif leading-none select-none">"</span>
          <p className="font-serif italic text-lg md:text-xl text-dusty-blue-700 leading-relaxed relative z-10 px-6">
            Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-8 bg-gold-400" />
            <p className="font-sans text-sm text-gold-600 tracking-widest uppercase">QS. Ar-Rum: 21</p>
            <span className="h-px w-8 bg-gold-400" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mempelai
