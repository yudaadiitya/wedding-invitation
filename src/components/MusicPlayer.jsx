import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react'

const MusicPlayer = ({ isOpened }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log('Autoplay prevented')
      })
      setIsPlaying(true)
    }
  }, [isOpened])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  if (!isOpened) return null

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/assets/audio/background-music.mp3" type="audio/mp3" />
      </audio>

      <AnimatePresence>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50"
        >
          <div className="relative">
            {/* Animated rings around the play button when playing */}
            {isPlaying && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full border-2 border-gold-400"
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                  className="absolute inset-0 rounded-full border-2 border-dusty-blue-400"
                />
              </>
            )}

            <div className="flex gap-2 items-center glass shadow-soft rounded-full p-1.5 border border-white/60">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={togglePlay}
                className="relative bg-gradient-to-br from-dusty-blue-500 to-dusty-blue-700 hover:from-dusty-blue-600 hover:to-dusty-blue-800 text-white p-3 rounded-full shadow-lg transition-colors"
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
              >
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={isPlaying ? { duration: 8, repeat: Infinity, ease: 'linear' } : {}}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  {isPlaying && (
                    <div className="w-1.5 h-1.5 bg-gold-400 rounded-full absolute top-1" />
                  )}
                </motion.div>
                {isPlaying ? <Pause className="w-5 h-5 relative z-10" /> : <Play className="w-5 h-5 relative z-10 ml-0.5" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleMute}
                className="bg-gradient-to-br from-dusty-blue-400 to-dusty-blue-600 hover:from-dusty-blue-500 hover:to-dusty-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </motion.button>

              {isPlaying && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  className="hidden md:flex items-center gap-1.5 pr-3 pl-2 overflow-hidden"
                >
                  <Music className="w-3.5 h-3.5 text-gold-500" />
                  <div className="flex items-end gap-0.5 h-4">
                    {[0.3, 0.6, 1, 0.7, 0.4].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ scaleY: [h, 1, h] }}
                        transition={{ duration: 0.8 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ originY: 1 }}
                        className="w-0.5 h-full bg-gradient-to-t from-dusty-blue-500 to-gold-500 rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MusicPlayer
