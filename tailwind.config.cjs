/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        primaryYellow: "#e8e817",
        primaryBlue: "#1717e8",
        primaryGrey: "#f3f3f3"
      },
      transitionProperty: {
        left: "left",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/town.jpeg')",
      }
    },
    screens: {
      ultraSmall: '10px',
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      semiLg: "1400px",
      xl: "1700px",
      xxl: "2560px",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};
