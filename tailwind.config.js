/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c6a250",
          light: "#e9d79e",
          dark: "#9a7b32",
        },
        navy: {
          DEFAULT: "#2c3e50",
          dark: "#1b2836",
        },
        cream: "#fcfaf5",
      },
      fontFamily: {
        script: ["Great Vibes", "cursive"],
        serif: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
        arabic: ["Amiri", "serif"],
      },
    },
  },
  plugins: [],
}
