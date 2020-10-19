module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'head': 'Robato, sans-serif',
      },
      screens: {
        'land': { 'raw': '(orientation: landscape)' },
        // => @media (orientation: landscape) { ... }
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        'full': '100%',
      },
      height: {
        '90':'90%'
      }
    },
  },
  variants: {},
  plugins: [],
}
