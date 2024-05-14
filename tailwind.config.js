const { black } = require('color-name');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'btn-color': '#b417d9', // Defina sua cor personalizada aqui
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
    }
    },
  },
  plugins: [],
}