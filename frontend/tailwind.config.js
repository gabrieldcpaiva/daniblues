/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e9deff',
          300: '#d6c1ff',
          400: '#be9bff',
          500: '#a374ff',
          600: '#8b4cf7',
          700: '#7c3aed',
          800: '#6830c8',
          900: '#552ba0',
        },
        elegant: {
          black: '#0a0a0a',
          darkgray: '#1a1a1a',
          lightgray: '#f5f5f7',
          white: '#fafafa',
          cream: '#fcfcfc'
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