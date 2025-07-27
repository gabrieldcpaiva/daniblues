/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefbf0',
          100: '#fef5d6',
          200: '#fdebad',
          300: '#fcd974',
          400: '#f9c94a',
          500: '#f5b22a',
          600: '#d4921a',
          700: '#b07318',
          800: '#8f5a1a',
          900: '#764a19',
        },
        elegant: {
          black: '#0a0a0a',
          darkgray: '#1a1a1a',
          lightgray: '#f8f8f8',
          white: '#ffffff'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}