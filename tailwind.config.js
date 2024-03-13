/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#b2dba0",
        "secondary":"#4334eb",
        "tertiary":"#b06684",
        
      },
      fontFamily:{
        "logo": ["Great Vibes"],
      }
    },
  },
  plugins: [],
}