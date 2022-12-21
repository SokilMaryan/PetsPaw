/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0f172a',
      gray: '#8C8C8C',
      'gray-light': '#F8F8F7',
      'gray-ultra-light': '#e5e7eb',
      'gray-medium': '#9ca3af',
      'gray-dark': '#374151',
      purpur: '#FF868E',
      'purpur-light': '#FBE0DC',
      'purpur-dark':'#FF868E',
      'purpur_light_bg': '#FF868E4D',
      black: '#1D1D1D',
      primary_bg: '#E5E5E5',
      grean_bg: '#97EAB9',
      grean_light_bg: '#97EAB94D',
      yellow_bg: '#FFD280',
      yellow_light_bg: '#FFD2804D'

    },
    fontFamily: {
      main: ['Jost', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
