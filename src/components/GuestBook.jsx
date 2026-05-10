import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, User, Heart, Check } from 'lucide-react'

const GuestBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    attendance: 'hadir'
  })
  const [messages, setMessages] = useState([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const savedMessages = localStorage.getItem('guestbook_asri_ayuda')
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newMessage = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      attendance: formData.attendance,
      date: new Date().toISOString()
    }

    const updatedMessages = [newMessage, ...messages]
    setMessages(updatedMessages)
    localStorage.setItem('guestbook_asri_ayuda', JSON.stringify(updatedMessages))

    setFormData({ name: '', message: '', attendance: 'hadir' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-dusty-blue-50/30 to-white overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-gold-200 rounded-full blur-3xl opacity-30 pointer-events-none"
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
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <MessageCircle className="text-gold-500 w-12 h-12 drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
          </motion.div>
          <h2 className="font-script text-5xl md:text-7xl animate-gradient-text mb-3">
            Buku Tamu
          </h2>
          <p className="font-serif italic text-dusty-blue-500">
            Berikan ucapan & doa untuk kami
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group mb-10"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-dusty-blue-400 via-gold-400 to-dusty-blue-400 rounded-3xl opacity-30 group-hover:opacity-50 blur-lg transition-opacity duration-500" />

          <form onSubmit={handleSubmit} className="relative bg-white p-6 md:p-8 rounded-3xl shadow-soft space-y-5 border border-white/80">
            <div className="space-y-2">
              <label className="block font-sans text-sm tracking-wider uppercase text-dusty-blue-700 font-semibold">
                Nama
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={60}
                className="w-full px-4 py-3 border-2 border-dusty-blue-100 bg-dusty-blue-50/40 rounded-xl focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-100 font-sans transition-all duration-300"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-sans text-sm tracking-wider uppercase text-dusty-blue-700 font-semibold">
                Ucapan & Doa
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                maxLength={500}
                className="w-full px-4 py-3 border-2 border-dusty-blue-100 bg-dusty-blue-50/40 rounded-xl focus:outline-none focus:border-gold-400 focus:bg-white focus:ring-4 focus:ring-gold-100 font-sans resize-none transition-all duration-300"
                placeholder="Tulis ucapan dan doa untuk kami..."
              ></textarea>
              <p className="text-xs text-dusty-blue-400 text-right font-sans">
                {formData.message.length}/500
              </p>
            </div>

            <div className="space-y-2">
              <label className="block font-sans text-sm tracking-wider uppercase text-dusty-blue-700 font-semibold">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'hadir', label: 'Hadir', emoji: '🎉' },
                  { value: 'tidak_hadir', label: 'Tidak Hadir', emoji: '🙏' },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center justify-center gap-2 cursor-pointer p-3 rounded-xl border-2 transition-all duration-300 ${
                      formData.attendance === opt.value
                        ? 'border-gold-400 bg-gold-50 shadow-glow-gold'
                        : 'border-dusty-blue-100 bg-dusty-blue-50/40 hover:border-dusty-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={opt.value}
                      checked={formData.attendance === opt.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-xl">{opt.emoji}</span>
                    <span className="font-sans font-medium text-dusty-blue-700">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative w-full overflow-hidden rounded-xl py-3.5 font-sans font-medium text-white flex items-center justify-center gap-2 shadow-glow-blue"
              style={{
                background: 'linear-gradient(135deg, #5e7fa0 0%, #4a6686 50%, #3a506b 100%)',
              }}
            >
              <span className="absolute inset-0 shimmer-bg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <Send className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              <span className="relative z-10 tracking-wider">Kirim Ucapan</span>
            </motion.button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-50 border-2 border-green-200 text-green-700 font-sans"
                >
                  <Check className="w-5 h-5" />
                  Terima kasih! Ucapan Anda telah terkirim.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Messages List */}
        {messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-dusty-blue-100 to-gold-100 text-dusty-blue-700 font-sans text-sm">
                <Heart className="w-4 h-4 text-gold-500 fill-current" />
                {messages.length} Ucapan Tamu
              </div>
            </div>

            <div className="space-y-4 max-h-[28rem] overflow-y-auto pr-2">
              <AnimatePresence>
                {messages.slice(0, 10).map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="bg-white p-5 rounded-2xl shadow-soft border-l-4 border-gold-400 hover:shadow-glow-gold transition-shadow duration-500"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-dusty-blue-100 to-gold-100 p-2.5 rounded-full ring-2 ring-white shadow-sm">
                        <User className="w-5 h-5 text-dusty-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <h4 className="font-display font-semibold text-dusty-blue-800 text-base">
                            {msg.name}
                          </h4>
                          <span className={`text-xs px-3 py-1 rounded-full font-sans font-medium ${
                            msg.attendance === 'hadir'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {msg.attendance === 'hadir' ? '🎉 Hadir' : '🙏 Tidak Hadir'}
                          </span>
                        </div>
                        <p className="font-serif text-dusty-blue-600 italic leading-relaxed">
                          "{msg.message}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GuestBook
