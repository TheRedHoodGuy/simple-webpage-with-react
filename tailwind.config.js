/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      red_c: '#F15E50',
      orange_c: '#E9AB53',
      white_c: '#FFFDFA',
      gray_c: '#C5C6CE',
      dark_blue: '#5D5F79',
      black_c: '#00001A'
    },
  },
  plugins: [],
}
