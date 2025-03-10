/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#00ff00', // Example custom green color
        primary: {
          500: '#0E70ED', // Default primary shade
          600: '#0552B3', // Darker primary shade
        },
        multicolor:{
          background: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }
      },
    
    },
  },
  plugins: [],
}

