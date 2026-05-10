import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Mempelai from './components/Mempelai'
import LoveStory from './components/LoveStory'
import DoaPengantin from './components/Gallery'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import Location from './components/Location'
import GuestBook from './components/GuestBook'
import DigitalEnvelope from './components/DigitalEnvelope'
import TurutMengundang from './components/TurutMengundang'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'
import Divider from './components/Divider'
import FloatingParticles from './components/FloatingParticles'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpenInvitation = () => {
    setIsOpened(true)
  }

  return (
    <div className="relative">
      {isOpened && <FloatingParticles count={18} />}
      {isOpened && <ScrollProgress />}
      <MusicPlayer isOpened={isOpened} />
      <Navigation />
      <div id="hero" className="relative z-10">
        <Hero onOpen={handleOpenInvitation} isOpened={isOpened} />
      </div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative z-10"
          >
            <div id="mempelai">
              <Mempelai />
            </div>
            <Divider />
            <div id="lovestory">
              <LoveStory />
            </div>
            <Divider />
            <div id="gallery">
              <DoaPengantin />
            </div>
            <Divider />
            <div id="countdown">
              <Countdown />
            </div>
            <Divider />
            <div id="event">
              <EventDetails />
            </div>
            <Divider />
            <div id="location">
              <Location />
            </div>
            <Divider />
            <div id="turut-mengundang">
              <TurutMengundang />
            </div>
            <Divider />
            <div id="guestbook">
              <GuestBook />
            </div>
            <Divider />
            <div id="envelope">
              <DigitalEnvelope />
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
