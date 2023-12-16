/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "main": "#4C8AE1",
        "main-dark": "#1B3252"
      },

      screens:{
        "sm3": "441px",
        "sm2": "572px",
        "md2": "900px",
        "lg2": "1370px",
        
      }
    },
  },
  plugins: [],
}
