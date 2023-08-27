const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '7rem',
      '8xl': '8rem',
      '9xl': '9rem',
      '10xl': '10rem',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 0.3s linear',
        'wiggle-opposite': 'wiggleOpposite 0.3s linear',
      },
      colors: {
        'app-pure-white': 'hsl(0, 0%, 100%)', // #FFFFFF
        'app-red': 'hsl(0, 97%, 63%)', // #FC4747
        'app-dark-blue': 'hsl(223, 30%, 9%)', // #10141E
        'app-semi-dark-blue': '#161D2F', // #161D2F
        'app-greyish-blue': 'hsl(223, 23%, 46%)', // #5A698F
        'app-grey': 'hsl(225, 3%, 77%)', // #C3C4C7
        'app-placeholder': 'hsl(223, 3%, 54%)', // #87898E
      },
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'app-heading-lg': '2rem',
        'app-heading-md': '1.5rem',
        'app-heading-sm': '1.5rem',
        'app-heading-xs': '1.125rem',
        'app-body-md': '0.9375rem',
        'app-body-sm': '0.8125rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'skewY(0deg)' },
          '50%': { transform: 'skewY(-3deg)' },
        },
        wiggleOpposite: {
          '0%, 100%': { transform: 'skewY(0deg)' },
          '50%': { transform: 'skewY(3deg)' },
        },
      },
      screens: {
        '3xs': '320px',
        '2xs': '375px',
        xs: '420px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
