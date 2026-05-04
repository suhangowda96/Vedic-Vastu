/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f0d5b0',
          300: '#e8c49a',
          400: '#d4a574',
          500: '#c8956c',
          600: '#b07a4f',
          700: '#8f5f3a',
          800: '#6b4529',
          900: '#4a2f1b',
        },
        dark: {
          50: '#f5f0eb',
          100: '#e8ddd0',
          200: '#d4c4ab',
          300: '#b8a07a',
          400: '#8b6b42',
          500: '#6b4f2e',
          600: '#4a3520',
          700: '#3a2a1a',
          800: '#2a1e12',
          900: '#1a120a',
        },
        accent: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
