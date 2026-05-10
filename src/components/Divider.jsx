import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Divider = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`relative w-full max-w-4xl mx-auto my-8 px-6 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/60 to-gold-400/30" />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="relative flex-shrink-0"
        >
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-gold-400/50 flex items-center justify-center">
            <Heart className="w-4 h-4 text-gold-500 fill-current" />
          </div>
        </motion.div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-400/60 to-gold-400/30" />
      </div>
    </motion.div>
  )
}

export default Divider
