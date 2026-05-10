import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #9BB5CE 0%, #D4AF37 50%, #9BB5CE 100%)',
        boxShadow: '0 0 12px rgba(212,175,55,0.5)',
      }}
    />
  )
}

export default ScrollProgress
