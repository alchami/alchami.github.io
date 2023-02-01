/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    fontFamily: {
      'sans': ['"IBM Plex Sans Light"', 'Arial', 'sans-serif'],
      'mono': ['"IBM Plex Mono Bold"', '"Courrier New"'],
    },
    extend: {
      fontSize: {
        'body': '3vw',
        'heading': '3vw',
        'lg-body': '1.5vw',
        'lg-heading': '1.8vw'
      },
      colors: {
        'cyan': '#D2F7FF',
        'pink': '#E2E2FD',
        'pastel-green': '#D2FFD1'
      },
      backgroundImage: {
        'graph-paper': "url('assets/graph-paper.svg')",
      }
    },
  },
  plugins: [],
}
