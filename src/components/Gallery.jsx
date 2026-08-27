import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

const DoaPengantin = () => {
  const prayers = [
    {
      id: 1,
      arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
      translation: 'Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.',
      source: 'QS. Al-Furqan: 74'
    },
    {
      id: 2,
      arabic: 'بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
      translation: 'Semoga Allah memberkahimu dan melimpahkan berkah atasmu, serta mengumpulkan kalian berdua dalam kebaikan.',
      source: 'HR. Abu Daud'
    }
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-dusty-blue-50 via-white to-dusty-blue-50 overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none" />

      {/* Background ambient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-gold-200 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-dusty-blue-200 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <Heart className="w-6 h-6 text-gold-500 fill-current animate-heartbeat" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="font-script text-5xl md:text-7xl animate-gradient-text mb-3">
            Doa untuk Pengantin
          </h2>
          <p className="font-serif italic text-dusty-blue-500">
            Doa dan berkah untuk pernikahan yang penuh keberkahan
          </p>
        </motion.div>

        {/* Prayer Cards */}
        <div className="space-y-8">
          {prayers.map((prayer, index) => (
            <motion.div
              key={prayer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative group"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-300 via-dusty-blue-300 to-gold-300 rounded-3xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white via-dusty-blue-50/60 to-white p-8 md:p-10 rounded-3xl shadow-soft border border-white/60">
                {/* Sparkles */}
                <Sparkles className="absolute top-4 right-4 w-5 h-5 text-gold-400 animate-sparkle opacity-60" />
                
                {/* Arabic Text */}
                <div className="text-center mb-6">
                  <p className="font-arabic text-2xl md:text-3xl lg:text-4xl leading-relaxed text-dusty-blue-800 mb-4" 
                     style={{ direction: 'rtl', lineHeight: '2.2' }}>
                    {prayer.arabic}
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 my-6">
                  <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
                  <div className="w-2 h-2 rounded-full bg-gold-400" />
                  <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
                </div>

                {/* Translation */}
                <div className="text-center mb-5">
                  <p className="font-serif text-base md:text-lg text-dusty-blue-700 leading-relaxed italic">
                    "{prayer.translation}"
                  </p>
                </div>

                {/* Source */}
                <div className="text-center">
                  <span className="inline-block font-sans text-xs md:text-sm text-gold-600 font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-100/50 to-dusty-blue-100/50">
                    {prayer.source}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-gold-500 mb-4">
            <Heart className="w-5 h-5 fill-current animate-heartbeat" style={{ animationDelay: '0s' }} />
            <Heart className="w-7 h-7 fill-current animate-heartbeat" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-5 h-5 fill-current animate-heartbeat" style={{ animationDelay: '0.4s' }} />
          </div>
          <p className="font-serif italic text-lg md:text-xl text-dusty-blue-600 max-w-2xl mx-auto">
            "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fi khair"
          </p>
          <p className="font-sans text-sm text-dusty-blue-500 mt-3">
            Semoga Allah memberkahi kalian berdua dan melimpahkan berkah atas kalian, 
            serta mengumpulkan kalian berdua dalam kebaikan
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DoaPengantin
