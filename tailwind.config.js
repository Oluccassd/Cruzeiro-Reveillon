module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '4px 4px 1px rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        'roboto': ['Roboto Condensed'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
