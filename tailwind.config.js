/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B4A72',
        secondary: 'rgba(0, 0, 0, 0.70)',
        background: '#FEF8F1',
        buttonColor: '#184066',
        black: '#121212',

      },
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'laila': ['Laila', 'sans-serif']
    },
  },
  plugins: [],
}

