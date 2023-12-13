/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:"1rem"
    },
    extend: {
      screens:{
        lg:"1124px",
        xl:"1224px"
      },
      fontFamily:{
        titleFont:['Fira Sans', 'sans-serif'],
      },
      boxShadow: {
        white: '0 1px 2px 0 rgba(200, 225, 255, 0.05), 0 1px 3px 1px rgba(200, 225, 255, 0.05)',
      },
    },
  },
  plugins: [],
}

