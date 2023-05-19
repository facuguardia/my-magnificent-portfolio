/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'hero' : "url('/images/fondo-bg.png')"
      }
    },
  },
  plugins: [],
};
