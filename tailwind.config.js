module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sporting Grotesque']
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-text-fill-stroke')(),
  ],
  rotate: {
    '24': '24deg',
  },
  colors: {
  thepink: '#5c6ac4',
  // ...
}
}
}
