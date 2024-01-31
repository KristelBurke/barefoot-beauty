/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'pink': '#f5e1e1', 
        'gold': '#D4AF37', 
        'brown': '#805a46'
      }
    },
  },
  plugins: [],
}

