/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Tilt:["Tilt", "sans-serif"],
        MuolLight:["MuolLight", "sans-serif"],
      }
    },
  },
  plugins: [],
}