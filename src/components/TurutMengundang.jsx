import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, ChevronDown, Heart } from 'lucide-react'

const FamilyPanel = ({ title, list, expanded, onToggle, sideX }) => (
  <motion.div
    initial={{ opacity: 0, x: sideX }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative group"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-dusty-blue-400 via-gold-400 to-dusty-blue-400 rounded-3xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500" />

    <div className="relative bg-white rounded-3xl shadow-soft overflow-hidden border border-white/80">
      <button
        onClick={onToggle}
        className="w-full bg-gradient-to-r from-dusty-blue-500 to-dusty-blue-700 hover:from-dusty-blue-600 hover:to-dusty-blue-800 text-white p-5 flex items-center justify-between transition-all duration-300"
      >
        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Heart className="w-5 h-5 text-gold-300 fill-current" />
          {title}
        </h3>
        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="p-6 space-y-3">
              {list.map((family, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-dusty-blue-50/60 to-transparent hover:from-gold-50/60 transition-colors"
                >
                  <span className="text-gold-500 mt-1 text-lg">✦</span>
                  <span className="font-display text-dusty-blue-700">
                    {family}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
)

const TurutMengundang = () => {
  const [expandedBride, setExpandedBride] = useState(true)
  const [expandedGroom, setExpandedGroom] = useState(true)

  const brideFamily = [
    'Kel. Besar Bpk H. Oo Solihin',
    'Kel. Besar Bpk Ikin (Alm)',
    'KH. Dedi Saepudin, Pimpinan Ponpes Al Waliyudin',
    'Bpk Nunu - Ketua RT 01',
    'Bpk Asep Edi - Ketua RW 03'
  ]

  const groomFamily = [
    'Bpk. Pepen Ucu Atila, ST. MAP beserta istrinya Ibu Ginar Gartika, ST',
    'Kel. Besar Ahmad Memed (Alm)',
    'Kel. Besar Adang Soemantri (Alm)'
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-dusty-blue-50/40 to-white overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Users className="text-gold-500 w-12 h-12 drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
          </motion.div>
          <h2 className="font-script text-5xl md:text-7xl animate-gradient-text mb-3">
            Turut Mengundang
          </h2>
          <p className="font-serif italic text-dusty-blue-500">
            Honored Guests
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <FamilyPanel
            title="Pihak Wanita"
            list={brideFamily}
            expanded={expandedBride}
            onToggle={() => setExpandedBride(!expandedBride)}
            sideX={-30}
          />
          <FamilyPanel
            title="Pihak Pria"
            list={groomFamily}
            expanded={expandedGroom}
            onToggle={() => setExpandedGroom(!expandedGroom)}
            sideX={30}
          />
        </div>
      </div>
    </section>
  )
}

export default TurutMengundang
