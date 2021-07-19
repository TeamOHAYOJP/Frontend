module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#EDF6E5',
      blue: '#B5EAEA',
      pink: '#FFBCBC',
      red: '#F38BA0',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
