/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  animation: {
    typing: "typing 5s steps(22), blink .5s step-end infinite alternate;",
  },
  keyframes: {
    typing: {
      from: {
        width: 0,
      },
      50: {
        borderColor: "transparent",
      },
    },
  },
  theme: {
    screens: {
      xxs: "280px",

      xs: "360px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      lmd: "822px",
      // => @media (min-width: 822px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... },
    },
    plugins: [],
  },
};
