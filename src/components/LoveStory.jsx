import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Sparkles, Church } from 'lucide-react'
import { useRef } from 'react'

const LoveStory = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ['0%', '100%'])

  const timeline = [
    {
      id: 1,
      icon: Heart,
      title: 'Ta\'aruf',
      date: 'Maret 2026',
      description: 'Tidak ada kisah cinta yang diumbar panjang, tidak pula janji yang diikat dalam hubungan bernama pacaran. Namun, Allah mempertemukan kami dengan cara yang paling tenang dan paling indah - melalui jalan ta\'aruf yang dijaga, melalui perantara guru-guru yang kami hormati, dan melalui doa-doa yang diam-diam dipanjatkan dalam sujud panjang. Awalnya hanyalah saling mengenal seperlunya, sudah berada dalam circle yang sama, tanpa ada rasa yang dipaksa tumbuh. Hingga pada suatu waktu, dua hati yang berjalan sendiri-sendiri dipertemukan dalam tujuan yang sama: menyempurnakan ibadah dan menjemput ridha-Nya.',
      side: 'left'
    },
    {
      id: 2,
      icon: Sparkles,
      title: 'Khitbah',
      date: 'April 2026',
      description: 'Dalam proses yang sederhana namun penuh makna, kami belajar bahwa cinta terbaik bukanlah yang datang terburu-buru, melainkan yang hadir bersama keseriusan. Dari pertemuan singkat yang dijaga adabnya, hadir keyakinan yang menguatkan langkah menuju khitbah. Hari itu menjadi awal dari doa-doa yang semakin dipersatukan. Bukan tentang memiliki hubungan spesial atau seberapa lama saling mengenal, tetapi tentang seberapa yakin kami melibatkan Allah dalam setiap keputusan.',
      side: 'right'
    },
    {
      id: 3,
      icon: Church,
      title: 'Pernikahan',
      date: 'Mei 2026',
      description: 'Kini, dengan penuh syukur, kami melangkah menuju hari pernikahan. Memulai perjalanan baru, bukan sebagai dua insan yang sempurna, tetapi sebagai dua hamba yang ingin saling membersamai dalam kebaikan, bertumbuh dalam iman, dan menua bersama dalam keberkahan. Semoga setiap langkah yang dimulai ini menjadi jalan menuju sakinah, mawaddah, wa rahmah.',
      side: 'center'
    }
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-dusty-blue-50/30 to-white overflow-hidden">
      {/* Background ambient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-dusty-blue-200 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-gold-200 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-4xl mx-auto relative z-10" ref={containerRef}>
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
            Perjalanan Cinta Kami
          </h2>
          <p className="font-serif italic text-dusty-blue-500">Menuju ridha-Nya dalam ikatan yang suci</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Background line (faded) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-dusty-blue-100 hidden md:block rounded-full" />

          {/* Animated drawing line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 hidden md:block rounded-full"
          >
            <div className="w-full h-full bg-gradient-to-b from-dusty-blue-300 via-gold-400 to-dusty-blue-300" />
            {/* glowing dot at the leading edge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-500 shadow-glow-gold animate-pulse" />
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => {
              const Icon = item.icon
              const isLeft = item.side === 'left'
              const isRight = item.side === 'right'
              const isCenter = item.side === 'center'

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -80 : isRight ? 80 : 0, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative"
                >
                  {/* Timeline node */}
                  {!isCenter && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20 items-center justify-center"
                    >
                      <div className="w-5 h-5 bg-gold-500 rounded-full ring-4 ring-white shadow-glow-gold" />
                      <div className="absolute w-12 h-12 rounded-full border-2 border-gold-300 animate-ping opacity-40" />
                    </motion.div>
                  )}

                  <div className={`flex ${
                    isLeft ? 'md:justify-start md:pr-[calc(50%+2rem)]' :
                    isRight ? 'md:justify-end md:pl-[calc(50%+2rem)]' :
                    'justify-center'
                  }`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className={`${isCenter ? 'w-full max-w-lg' : 'w-full md:w-auto md:max-w-md'} relative group`}
                    >
                      {/* Glow on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-gold-300 via-dusty-blue-300 to-gold-300 rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500" />

                      <div className="relative bg-gradient-to-br from-white via-dusty-blue-50/60 to-white p-6 md:p-7 rounded-2xl shadow-soft border border-white/60">
                        <div className={`flex items-start gap-4 ${isCenter ? 'flex-col items-center text-center' : ''}`}>
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-dusty-blue-500 to-dusty-blue-700 p-3.5 rounded-2xl shrink-0 shadow-lg shadow-dusty-blue-300/50 ring-2 ring-gold-400/30"
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>

                          <div className="flex-1">
                            <h3 className="font-display text-2xl font-bold text-dusty-blue-800 mb-1">
                              {item.title}
                            </h3>
                            <p className="font-sans text-xs text-gold-600 font-semibold tracking-widest uppercase mb-3">
                              {item.date}
                            </p>
                            <p className="font-serif text-dusty-blue-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
            "Cinta terbaik adalah yang diawali dengan doa, dijaga dengan adab, dan direstui oleh-Nya"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default LoveStory
