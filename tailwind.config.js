module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sporting Grotesque']
      },
      colors: {
        'dreamyellow':  '#DAFC53',
        'dreamgreen':   '#2BFDAF',
        'dreamred':     '#FD3C3E',
        'dreamblue':    '#5EECFD',
        'dreampink':    '#F980E6',
        'dreamdarkblue':'#2D2DFF',
      }
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
