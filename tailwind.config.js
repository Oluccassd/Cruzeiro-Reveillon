const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
