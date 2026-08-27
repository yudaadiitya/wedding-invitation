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
          50: '#FBF8F1',
          100: '#F8F4E7',
          200: '#EFE3DC',
          300: '#D9BFBF',
          400: '#B98D8D',
          500: '#996D6D',
          600: '#845B5B',
          700: '#714646',
          800: '#5A3636',
          900: '#3D2222',
        },
        'gold': {
          100: '#F6EDE0',
          200: '#EBD9C2',
          300: '#DBB38A',
          400: '#D2A87E',
          500: '#C4A17E',
          600: '#B08A62',
          700: '#8A6A4A',
        },
      },
      fontFamily: {
        script: ['Carattere', 'cursive'],
        serif: ['Cardo', 'serif'],
        display: ['Cardo', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
        'gold-gradient': 'linear-gradient(135deg, #D2A87E 0%, #C4A17E 50%, #B08A62 100%)',
        'mesh-blue': 'radial-gradient(at 0% 0%, #F8F4E7 0px, transparent 50%), radial-gradient(at 100% 0%, #F6EDE0 0px, transparent 50%), radial-gradient(at 100% 100%, #EFE3DC 0px, transparent 50%), radial-gradient(at 0% 100%, #EBD9C2 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(196,161,126, 0.4), 0 0 60px rgba(196,161,126, 0.15)',
        'glow-blue': '0 0 30px rgba(217,191,191, 0.45), 0 0 60px rgba(217,191,191, 0.2)',
        'soft': '0 10px 40px -10px rgba(113,70,70, 0.25)',
        'inner-glow': 'inset 0 0 30px rgba(196,161,126, 0.15)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(196,161,126, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(196,161,126, 0.7)' },
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
