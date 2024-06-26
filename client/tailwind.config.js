/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '300px', 'max': '600px'},
      'md': {'min': '601px', 'max': '899px'},
      'lg': {'min': '900px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},    },
    extend: {},
  },
  plugins: [
  ],
}
