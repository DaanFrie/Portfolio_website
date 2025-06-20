/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        domine: ['Domine', 'serif'],
      },
      colors: {

        accentGold: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#e8e1d4',
          300: '#dbc9b1',
          400: '#c9ad87',
          500: '#b4a978', // Main gold color
          600: '#a39666',
          700: '#8a7d56',
          800: '#71674a',
          900: '#5c543d',
        },
      },
    },
  },
  plugins: [],
}
