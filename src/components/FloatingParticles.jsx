import { useMemo } from 'react'
import { Heart, Sparkles } from 'lucide-react'

const FloatingParticles = ({ count = 18, density = 'normal' }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const isHeart = i % 3 === 0
      const size = 8 + Math.random() * 18
      return {
        id: i,
        isHeart,
        size,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 14,
        opacity: 0.25 + Math.random() * 0.5,
        drift: Math.random() * 60 - 30,
      }
    })
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: 'strict' }}
    >
      {particles.map((p) => {
        const Icon = p.isHeart ? Heart : Sparkles
        const color = p.isHeart ? '#C4A17E' : '#D9BFBF'
        return (
          <span
            key={p.id}
            className="absolute"
            style={{
              left: `${p.left}%`,
              bottom: '-40px',
              opacity: p.opacity,
              animation: `rise ${p.duration}s linear ${p.delay}s infinite`,
              '--drift': `${p.drift}px`,
            }}
          >
            <Icon
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                color,
                filter: 'drop-shadow(0 0 6px rgba(196,161,126, 0.4))',
              }}
              fill={p.isHeart ? color : 'none'}
            />
          </span>
        )
      })}
    </div>
  )
}

export default FloatingParticles
