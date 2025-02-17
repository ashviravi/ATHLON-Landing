/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#e8a418',    // Yellow/Gold
          secondary: '#f1b533',  // Lighter Gold
          accent: '#ff6b00',     // Orange
          dark: '#020d30',       // Dark Blue
          'dark-light': '#142554', // Medium Blue
          light: '#f8f9fa',      // Off-White
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        animation: {
          blob: 'blob 7s infinite',
        },
      },
    },
    plugins: [],
  }