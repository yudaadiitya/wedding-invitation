import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Copy, Check, CreditCard } from 'lucide-react'

const DigitalEnvelope = () => {
  const [copiedId, setCopiedId] = useState(null)
  const [revealed, setRevealed] = useState(false)

  const accounts = [
    {
      id: 'bca',
      bank: 'BCA',
      accountNumber: '2330905878',
      accountName: 'Ayuda Noveliana Megus',
      gradient: 'from-blue-500 via-blue-600 to-blue-800',
    },
    {
      id: 'mandiri',
      bank: 'Mandiri',
      accountNumber: '1310018040537',
      accountName: 'Asri Aditya Lestari',
      gradient: 'from-yellow-400 via-yellow-500 to-yellow-700',
    }
  ]

  const copyToClipboard = (accountNumber, id) => {
    navigator.clipboard.writeText(accountNumber)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold-200 rounded-full blur-3xl opacity-30 pointer-events-none"
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
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Gift className="text-gold-500 w-12 h-12 drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
          </motion.div>
          <h2 className="font-script text-5xl md:text-7xl animate-gradient-text mb-3">
            Amplop Digital
          </h2>
          <p className="font-serif italic text-base md:text-lg text-dusty-blue-600 max-w-2xl mx-auto px-4">
            Doa restu Anda adalah karunia terindah bagi kami. Namun jika memberi adalah ungkapan tanda kasih,
            Anda dapat memberi melalui:
          </p>
        </motion.div>

        {!revealed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={() => setRevealed(true)}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4 font-sans font-medium text-white shadow-glow-gold"
              style={{
                background: 'linear-gradient(135deg, #E8C468 0%, #D4AF37 50%, #B8962E 100%)',
              }}
            >
              <span className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Gift className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10 tracking-wider">Buka Amplop</span>
            </motion.button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {accounts.map((account, index) => (
                <motion.div
                  key={account.id}
                  initial={{ opacity: 0, y: 50, rotateY: index === 0 ? -10 : 10 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group perspective-card"
                >
                  {/* Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${account.gradient} rounded-3xl opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />

                  {/* Credit card style */}
                  <div className={`relative bg-gradient-to-br ${account.gradient} p-6 rounded-3xl shadow-2xl text-white overflow-hidden min-h-[260px] flex flex-col justify-between`}>
                    {/* Decorative circles */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full" />
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-black/10 rounded-full" />

                    {/* Shimmer overlay on hover */}
                    <span className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 flex justify-between items-start">
                      <div>
                        <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-80">Bank</p>
                        <p className="font-display text-3xl font-bold mt-1">{account.bank}</p>
                      </div>
                      <CreditCard className="w-8 h-8 opacity-80" />
                    </div>

                    <div className="relative z-10 space-y-3 mt-6">
                      <div>
                        <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-70 mb-1">
                          Nomor Rekening
                        </p>
                        <p className="font-mono text-xl md:text-2xl font-bold tracking-wider">
                          {account.accountNumber}
                        </p>
                      </div>
                      <div>
                        <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-70 mb-1">
                          Atas Nama
                        </p>
                        <p className="font-display text-lg font-semibold">
                          {account.accountName}
                        </p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => copyToClipboard(account.accountNumber, account.id)}
                      className="relative z-10 mt-4 w-full bg-white/20 backdrop-blur hover:bg-white/30 text-white font-sans py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 ring-1 ring-white/30"
                    >
                      <AnimatePresence mode="wait">
                        {copiedId === account.id ? (
                          <motion.span
                            key="copied"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-5 h-5" />
                            Tersalin!
                          </motion.span>
                        ) : (
                          <motion.span
                            key="copy"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2"
                          >
                            <Copy className="w-4 h-4" />
                            Salin Nomor Rekening
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="font-serif italic text-dusty-blue-600">
            Terima kasih atas perhatian dan kehadirannya
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DigitalEnvelope
