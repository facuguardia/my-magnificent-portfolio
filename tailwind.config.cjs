/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'pop': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/images/fondo-bg.png')",
      }
    },
  },
  plugins: [],
};
