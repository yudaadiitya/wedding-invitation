import { motion } from 'framer-motion'
import { MapPin, Navigation as NavigationIcon, Compass } from 'lucide-react'

const Location = () => {
  const address = 'Dsn. Bojong Inong, RT 01 RW 03, Desa Jatimulya, Kab. Sumedang'
  const googleMapsUrl = 'https://maps.app.goo.gl/xCMN5dUGXRDWgjkh9'

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-dusty-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none"
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
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-4"
          >
            <Compass className="text-gold-500 w-12 h-12 drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
          </motion.div>
          <h2 className="font-script text-5xl md:text-7xl animate-gradient-text mb-3">
            Lokasi Acara
          </h2>
          <p className="font-serif italic text-dusty-blue-500">
            Kediaman Mempelai Wanita
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -4 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-dusty-blue-400 to-gold-400 rounded-3xl opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-700" />

          <div className="relative bg-gradient-to-br from-white via-dusty-blue-50/40 to-white p-6 md:p-8 rounded-3xl shadow-soft border border-white/80">
            {/* Address pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-dusty-blue-100 to-gold-100 shadow-sm">
                <MapPin className="w-4 h-4 text-gold-600" />
                <p className="font-display text-base md:text-lg text-dusty-blue-700 font-semibold">
                  {address}
                </p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg ring-2 ring-white mb-6 relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0977966847545!2d107.91404931477282!3d-6.875385695024858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d1f5a5a5a5a5%3A0x1234567890abcdef!2sDsn.%20Bojong%20Inong%2C%20Jatimulya%2C%20Sumedang!5e0!3m2!1sid!2sid!4v1715091200000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
                title="Lokasi Pernikahan - Dsn. Bojong Inong, Jatimulya, Sumedang"
              ></iframe>
              {/* Pin pulse overlay (decorative) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-3 h-3 bg-gold-500 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-gold-500 rounded-full animate-ping opacity-60" />
              </div>
            </motion.div>

            <div className="text-center">
              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-3.5 font-sans font-medium text-white shadow-glow-blue"
                style={{
                  background: 'linear-gradient(135deg, #5e7fa0 0%, #4a6686 50%, #3a506b 100%)',
                }}
              >
                <span className="absolute inset-0 shimmer-bg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <NavigationIcon className="w-5 h-5 relative z-10 group-hover/btn:rotate-45 transition-transform duration-500" />
                <span className="relative z-10 tracking-wider">Buka di Google Maps</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Location
