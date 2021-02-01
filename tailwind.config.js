  module.exports = {
    purge: {
      enabled: true,
      content: [
        './index.html',
        './about.html',
        './js/*.js'
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      cursor: {
        crosshair: 'crosshair',
      },
      extend: {
        borderRadius: {
          'vera': '50%'
        },
        fontFamily: {
          'sans': ['Sporting Grotesque']
        },
        fontSize: {
          "lg": ['1.125rem', '2.2rem'],
          "3xl": ['1.875rem', '3.4rem'], // first value is the size, second one the line height
          "6xl": ['3.75rem', '4.5rem'],
        },
        colors: {
          'dreamyellow': '#DAFC53',
          'dreamgreen': '#2BFDAF',
          'dreamred': '#FD3C3E',
          'dreamblue': '#5EECFD',
          'dreampink': '#F980E6',
          'dreamdarkblue': '#077AF2',
          'dreampurple': '#A582FB',
        },
        zIndex: {
          '-10': '-10',
        },
        animation: {
          'spin-slower': 'spin 12s linear infinite',
          'spin-slow': 'spin 8s linear infinite',
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