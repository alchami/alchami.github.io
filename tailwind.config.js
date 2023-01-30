/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
      'mono': ['"IBM Plex Mono Bold"'],
    },
    extend: {
      colors: {'aliceblue': '#f0f8ff'},
      backgroundImage: {'random-shapes': "url('assets/random-shapes.svg')"}
    },
  },
  plugins: [],
}
