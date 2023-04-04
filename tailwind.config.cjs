const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        primaryYellow: "#e8e817",
        primaryBlue: "#1717e8",
        primaryGrey: "#f3f3f3",
        // MainTheme
        darkGreen: '#8DB89D',
        mediumGreen: '#D3D39A',
        lightYellow: '#FCF8D6',
        bone: '#E0D8C3',
        mainBlue: '#536cc6',
        secBlue: "#5f72bb"
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
      semiMd: "800px",
      md: "1060px",
      lg: "1200px",
      semiLg: "1400px",
      semiLgXl: "1500px",
      xl: "1700px",
      xxl: "2560px",
    },
  },
  plugins: [
      require("@tailwindcss/aspect-ratio"),
      plugin(function({ addVariant }) {
        addVariant('current', '&.active');
      })
  ]
};
