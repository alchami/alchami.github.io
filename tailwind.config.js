/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'Arial', 'sans-serif'],
      'mono': ['"IBM Plex Mono Bold"', '"Courrier New"'],
    },
    extend: {
      colors: {'aliceblue': '#f0f8ff'},
      backgroundImage: {'random-shapes': "url('assets/random-shapes.svg')"}
    },
  },
  plugins: [],
}
