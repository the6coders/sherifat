// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,ts,jsx,tsx}', // This tells Tailwind to scan ALL html, js, ts, jsx, tsx files in ALL subdirectories
  ],
  theme: {
    extend: {
      // 👇 ADD THE COLORS OBJECT HERE
      colors: {
        'tawny-brown': '#B9864D', 
      },
      // 👆
      keyframes: {
        'square-in-center': {
          'from': { 'clip-path': 'inset(100% 100% 100% 100%)' },
          'to': { 'clip-path': 'inset(0 0 0 0)' },
        }
      },
      animation: {
        'square-in-center': 'square-in-center 2.5s cubic-bezier(.25, 1, .30, 1) both',
      },
    },
  },
  plugins: [],
}