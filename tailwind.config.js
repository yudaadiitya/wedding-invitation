/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dusty-blue': {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#c1d5e8',
          300: '#9BB5CE',
          400: '#7a9ab8',
          500: '#5e7fa0',
          600: '#4a6686',
          700: '#3a506b',
          800: '#2d3e54',
          900: '#1f2a3a',
        },
        'gold': {
          100: '#FBF1D7',
          200: '#F5E2A4',
          300: '#EFD278',
          400: '#E8C468',
          500: '#D4AF37',
          600: '#B8962E',
          700: '#8C7022',
        },
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        serif: ['Cormorant Garamond', 'serif'],
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
        'gold-gradient': 'linear-gradient(135deg, #E8C468 0%, #D4AF37 50%, #B8962E 100%)',
        'mesh-blue': 'radial-gradient(at 0% 0%, #d9e6f2 0px, transparent 50%), radial-gradient(at 100% 0%, #FBF1D7 0px, transparent 50%), radial-gradient(at 100% 100%, #c1d5e8 0px, transparent 50%), radial-gradient(at 0% 100%, #F5E2A4 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.15)',
        'glow-blue': '0 0 30px rgba(155, 181, 206, 0.45), 0 0 60px rgba(155, 181, 206, 0.2)',
        'soft': '0 10px 40px -10px rgba(58, 80, 107, 0.25)',
        'inner-glow': 'inset 0 0 30px rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 14s linear infinite',
        'spin-reverse': 'spinReverse 18s linear infinite',
        'sparkle': 'sparkle 2.4s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.6s ease-in-out infinite',
        'rise': 'rise 8s linear infinite',
        'tilt': 'tilt 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.4) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.18)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.12)' },
          '70%': { transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(212, 175, 55, 0.7)' },
        },
        rise: {
          '0%': { transform: 'translateY(110vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-10vh) translateX(40px) rotate(360deg)', opacity: '0' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
}
