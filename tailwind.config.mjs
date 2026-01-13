/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      serif: ['var(--font-playfair)', 'serif'],
    },
    colors: {
      emerald: { 950: '#0A2F1F' },
      gold: { 500: '#D4AF37' },
      cream: { 100: '#F8F5F0' }
        }
      },
    },
  plugins: [],
};