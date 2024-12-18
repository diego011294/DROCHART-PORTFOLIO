/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        rampart: ['Rampart One', 'sans-serif'],
      },
      colors: {
        primario: '#F0B040',
        tipo: '#333333',
        fondo: '#FAF9EF',
      },
    },
  },
  plugins: [],
}