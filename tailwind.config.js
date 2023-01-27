/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {'aliceblue': '#f0f8ff'},
      backgroundImage: {'random-shapes': "url('assets/random-shapes.svg')"}
    },
  },
  plugins: [],
}
