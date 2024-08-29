/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily:{
        custom: ['sans-serif']
      },
      colors:{
        'primary' : '#007df9',
        'body': '#151a25',
        'secondary' : '#999999',
        'invert-secondary': '#efefef',
        'primary-Gray': '#D0D0D0',
        'brand-green': '#95CA40',
        'brand-red': '#E51A25',
      }
    },
  },
  plugins: [],
}

