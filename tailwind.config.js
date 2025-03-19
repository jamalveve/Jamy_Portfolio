/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0062ff",
        secondary: "#b56141",
        background: "#FFFCF8",
        white: '#FBFBFB'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #F6A64F, #b56141)', // Correct gradient definition
      
      },
  },
  plugins: [],
}


