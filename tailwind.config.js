/** @type {import('tailwindcss').Config} */


export default {
  purge: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
     },
     gridTemplateColumns: {
       '70/30': '70:28',
     },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}