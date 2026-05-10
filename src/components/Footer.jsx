import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-dusty-blue-700 via-dusty-blue-800 to-dusty-blue-900 text-white py-16 px-4 overflow-hidden">
      {/* Floating ambient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-gold-500 rounded-full blur-3xl opacity-15"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-dusty-blue-400 rounded-full blur-3xl opacity-25"
      />

      {/* Floral decorations */}
      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-0 w-40 h-40 opacity-15 pointer-events-none"
      >
        <img src="/assets/images/floral-left.svg" alt="" className="w-full h-full object-contain" />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-0 w-40 h-40 opacity-15 pointer-events-none"
      >
        <img src="/assets/images/floral-right.svg" alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Sparkles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.4] }}
          transition={{ duration: 3, delay: Math.random() * 4, repeat: Infinity }}
        >
          <Sparkles className="w-3 h-3 text-gold-300" />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px bg-gradient-to-r from-transparent to-gold-400 flex-1" />
          <Heart className="w-6 h-6 text-gold-400 fill-current animate-heartbeat drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
          <div className="h-px bg-gradient-to-l from-transparent to-gold-400 flex-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="font-script text-5xl md:text-6xl mb-3 text-gradient-gold drop-shadow-lg">
              Asri & Ayuda
            </h3>
            <p className="font-display text-lg md:text-xl text-dusty-blue-200 tracking-[0.3em] uppercase">
              30 · Mei · 2026
            </p>
          </div>

          <div className="max-w-2xl mx-auto px-4">
            <p className="font-serif italic text-base md:text-lg text-dusty-blue-100 leading-relaxed">
              "Sesungguhnya Allah sangat mencintai hamba-Nya yang menikah dan membenci hamba-Nya yang membujang."
            </p>
            <p className="font-sans text-xs text-gold-400 mt-3 tracking-[0.3em] uppercase">
              — HR. Bukhari
            </p>
          </div>

          <div className="pt-6 border-t border-white/15">
            <p className="font-serif text-base md:text-lg mb-1">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami
            </p>
            <p className="font-serif text-base md:text-lg mb-5 text-dusty-blue-100">
              apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
            </p>
            <p className="font-sans text-xs text-dusty-blue-300 tracking-widest uppercase">
              Atas kehadiran dan doa restunya, kami ucapkan
            </p>
            <p className="font-script text-2xl md:text-3xl text-gradient-gold mt-3 drop-shadow-md">
              Jazakumullah Khairan Katsira
            </p>
          </div>

          <div className="pt-6">
            <p className="font-serif text-base mb-3 text-dusty-blue-200">Hormat Kami,</p>
            <p className="font-display text-base md:text-lg font-semibold">
              Kel. Bpk. Atang Hermawan & Ibu Popong Siti Hajar
            </p>
            <p className="font-display text-base md:text-lg font-semibold">
              Kel. Bpk. Ade Yuspida & Ibu Eli Subiarsih
            </p>
          </div>

          <div className="pt-8 border-t border-white/15">
            <p className="font-sans text-xs text-dusty-blue-300 tracking-wider">
              © {currentYear} Asri & Ayuda Wedding Invitation
            </p>
            <p className="font-sans text-xs text-dusty-blue-400 mt-2">
              Made with <Heart className="inline w-3 h-3 text-gold-400 fill-current animate-heartbeat" /> for a special day
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
