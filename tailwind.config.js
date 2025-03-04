/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
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
=======
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E7E9EF',
          100: '#C2C9D6',
          200: '#9BA6BD',
          300: '#7483A4',
          400: '#4D608B',
          500: '#273D72',
          600: '#1E3159',
          700: '#162540',
          800: '#0E1827',
          900: '#060C13',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
>>>>>>> 1b9e315 (complete changes)
