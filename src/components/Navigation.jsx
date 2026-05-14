import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Calendar, MapPin, MessageCircle, Gift, Users, Sparkles, BookHeart } from 'lucide-react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home', icon: Heart },
    { id: 'mempelai', label: 'Couple', icon: Users },
    { id: 'lovestory', label: 'Story', icon: BookHeart },
    { id: 'gallery', label: "Doa", icon: Sparkles },
    { id: 'countdown', label: 'Date', icon: Calendar },
    { id: 'event', label: 'Event', icon: Calendar },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'guestbook', label: 'Wishes', icon: MessageCircle },
    { id: 'envelope', label: 'Gift', icon: Gift }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)

      const sections = navItems.map(item => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: item.id,
            offsetTop: rect.top + window.scrollY,
            offsetBottom: rect.bottom + window.scrollY
          }
        }
        return null
      }).filter(Boolean)

      const scrollPosition = window.scrollY + window.innerHeight / 3

      const current = sections.find(section =>
        scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom
      )

      if (current) setActiveSection(current.id)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  // Mobile-friendly: only first 5 in bottom nav
  const mobileNav = navItems.slice(0, 5)

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Navigation - Top */}
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="hidden md:block fixed top-0 left-0 right-0 z-40"
          >
            <div className="glass shadow-soft border-b border-white/40">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between py-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="font-script text-2xl text-gradient-gold cursor-pointer"
                    onClick={() => scrollToSection('hero')}
                  >
                    Asri & Ayuda
                  </motion.div>

                  <ul className="flex gap-1">
                    {navItems.map((item) => {
                      const Icon = item.icon
                      const isActive = activeSection === item.id
                      return (
                        <li key={item.id} className="relative">
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className={`relative flex items-center gap-2 font-sans text-sm px-3 py-2 rounded-full transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-dusty-blue-600 hover:text-dusty-blue-800'
                            }`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-gradient-to-r from-dusty-blue-500 to-dusty-blue-700 rounded-full shadow-glow-blue"
                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                              />
                            )}
                            <Icon className="w-3.5 h-3.5 relative z-10" />
                            <span className="relative z-10">{item.label}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </motion.nav>

          {/* Mobile Navigation - Bottom */}
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="md:hidden fixed bottom-3 left-3 right-3 z-40"
          >
            <div className="glass shadow-soft rounded-2xl border border-white/60">
              <ul className="grid grid-cols-5 gap-1 p-2">
                {mobileNav.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <li key={item.id} className="relative">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`relative w-full flex flex-col items-center gap-1 py-2 rounded-xl transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-dusty-blue-600'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="active-pill-mobile"
                            className="absolute inset-0 bg-gradient-to-br from-dusty-blue-500 to-dusty-blue-700 rounded-xl shadow-glow-blue"
                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                          />
                        )}
                        <Icon className="w-5 h-5 relative z-10" />
                        <span className="text-[10px] font-sans relative z-10 tracking-wide">{item.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.nav>

          <div className="hidden md:block h-16"></div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Navigation
