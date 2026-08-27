import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Heart } from 'lucide-react'
import { events as weddingEvents, venue } from '../data/wedding'

const EventDetails = () => {
  const events = weddingEvents.map((event, i) => ({
    ...event,
    icon: i === 0 ? Calendar : Heart,
    gradient:
      i === 0
        ? 'from-dusty-blue-600 to-dusty-blue-800'
        : 'from-gold-400 to-gold-600',
    accent: i === 0 ? 'from-dusty-blue-100 to-dusty-blue-200' : 'from-gold-100 to-gold-200',
  }))

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-dusty-blue-50 via-white to-dusty-blue-50 overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-gold-200 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <p className="font-arabic text-3xl md:text-5xl text-gold-600 leading-relaxed mb-4 drop-shadow-[0_0_12px_rgba(196,161,126,0.25)]">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="font-display italic text-lg md:text-xl text-dusty-blue-700 mb-2">
            Bismillahirrahmanirrahiim
          </p>
          <p className="font-display text-base md:text-lg text-dusty-blue-800 mb-6 tracking-wide">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
          <p className="font-serif italic text-base md:text-lg text-dusty-blue-600 leading-relaxed px-4">
            Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan resepsi
            pernikahan putra-putri kami yang Insya Allah akan diselenggarakan pada:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <Calendar className="w-5 h-5 text-gold-500" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <h2 className="font-script text-5xl md:text-7xl animate-gradient-text mb-3">
            Save The Date
          </h2>
          <p className="font-serif italic text-lg text-dusty-blue-500 max-w-2xl mx-auto">
            Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: index === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group perspective-card"
            >
              {/* Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${event.gradient} rounded-3xl opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />

              <div className="relative bg-white p-8 rounded-3xl shadow-soft border border-white/80 overflow-hidden">
                {/* Decorative top bar */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${event.gradient}`} />

                {/* Decorative corner */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${event.accent} rounded-full opacity-50 blur-2xl`} />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-6"
                  >
                    <div className={`bg-gradient-to-br ${event.gradient} p-5 rounded-2xl shadow-lg ring-4 ring-white`}>
                      <event.icon className="w-9 h-9 text-white" />
                    </div>
                  </motion.div>

                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-600 text-center mb-2 font-semibold">
                    {event.subtitle}
                  </p>
                  <h3 className="font-script text-5xl text-dusty-blue-700 text-center mb-6">
                    {event.title}
                  </h3>

                  <div className="space-y-4">
                    {[
                      { icon: Calendar, value: event.date },
                      { icon: Clock, value: event.time },
                      { icon: MapPin, value: event.location },
                    ].map((row, i) => {
                      const Icon = row.icon
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3 + i * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-dusty-blue-50 to-transparent"
                        >
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <Icon className="w-4 h-4 text-gold-500" />
                          </div>
                          <p className="font-display text-base md:text-lg text-dusty-blue-700">
                            {row.value}
                          </p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-start gap-2 max-w-xl mx-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-dusty-blue-50 to-gold-100/60 text-left">
            <MapPin className="w-4 h-4 text-gold-600 mt-1 shrink-0" />
            <p className="font-serif text-sm md:text-base text-dusty-blue-700 leading-relaxed">
              {venue.address}
            </p>
          </div>
          <p className="font-serif italic text-dusty-blue-600 mt-6">
            Atas kehadiran dan do'a restunya, kami ucapkan terima kasih
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails
