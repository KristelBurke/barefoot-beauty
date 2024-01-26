/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'pink': '#f5e1e1', // Replace with the exact light pink color you want
        'gold': '#D4AF37', // Replace with the exact shade of gold you want
        'brown': '#805a46', // Replace with the exact shade of gold you want
      }
    },
  },
  plugins: [],
}

