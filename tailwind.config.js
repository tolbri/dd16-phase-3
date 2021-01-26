module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      crosshair: 'crosshair',
    },
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
        'dreamdarkblue':'#077AF2',
      },
      zIndex: {
        '-10': '-10',
        }
  },
  variants: {
    extend: {
      bottom: ['hover'],
      inset: ['hover']
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-text-fill-stroke')(),
  ],
}
}
