/** @type {import('tailwindcss').Config} */

const defaultTheme= require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   screens:{
    xs: '540px',
    ...defaultTheme.screens
   },
   extend:{ 
    fontFamily: {
    pressstart: ["'Press Start 2P', sans-serif"]
  },
  colors: {
    'spotify-green': '#1DB954',
    'apple-black': '#333333',
    'amazon-orange': '#FF9900'
  },
  boxShadow: {
    neu1: '-5px -5px 15px 2px rgb(0 0 0 / 0.1)',
    neu2: '-5px -5px 10px 2px rgb(0.9 0.9 0.9 / 0.1)',
    innerneu1: 'inset -5px -5px 10px 2px rgb(0.9 0.9 0.9 / 1)',
    innerneu2: 'inset -5px -5px 15px 2px rgb(0 0 0 / 0.1)'
  }},
  },
  plugins: [],
}
