/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // background
        mainBg : '#2a3447',
        softBg: '#384256',
        darkBg: '#222b3c',
        // text
        mainColor: 'white',
        softColor: '#ddd',
        darkColor: '#2a3447'
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1400px"
    }
  },

  plugins: [],
}