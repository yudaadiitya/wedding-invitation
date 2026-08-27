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
        background: 'linear-gradient(90deg, #D9BFBF 0%, #C4A17E 50%, #D9BFBF 100%)',
        boxShadow: '0 0 12px rgba(196,161,126,0.5)',
      }}
    />
  )
}

export default ScrollProgress
