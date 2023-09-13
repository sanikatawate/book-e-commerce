/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors:{
        "myDarkBlue":"#0F131F",
        "myPurple":"#6A5FAD",
        "myOrange":"#E64C3C",
        "myYellow":"#EAB33F",
        "myBlue":"#49818A",
        "myGrey": "#9B9B9B"
      },
      backgroundImage:(theme)=>({
          "mobile-home":"url('./assets/BookStore (Community).png')"
        }),
      fontFamily:{
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
    screens:{
      xs:'480px',
      sm:'768px',
      md:'1060px',
    }
  },
  plugins: [],
}

