/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        quickSand: ["quicksand", "sans-serif"],
        poppins:["poppins", "sans-serif"],
        pacifico:["pacifico","sans-serif"]
    },
      colors:{
        brightOrange:'#FF642F',
        dimOrange:'#FFD7C9',
        lightBlue:'#E3F1FF',
        black:'#000000',
        darkGray:'#7F7F7F',
        lightGray:'#E8E8E8',
        lightestGray:'#F9F9f9',
        darkerGray:"#3a3a3a"
    }
  }
  },
  plugins: [],
}

