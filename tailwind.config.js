/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scale: 'scaleAnimation 5s infinite',
      },
      keyframes: {
        scaleAnimation: {
          '0%, 100%': { 
            transform: 'scale(1)', // Original size
            filter: 'grayscale(100%)', // Grayscale effect
          },
          '50%': { 
            transform: 'scale(1.1)', // Scale up to 110%
            filter: 'grayscale(0%)', // Remove grayscale effect
          },
        },
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
        poppins: ['Poppins', 'sans-serif'], // Add the Google font here
      },
    },
  },
  plugins: [],
}
