/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  animation: {
    typing: "typing 5s steps(22), blink .5s step-end infinite alternate;"
  },
  keyframes: {
    typing: {
      "from": {
        width: 0
      },
      "50": {
        borderColor: "transparent"
      },
    }
  },
theme: {
    extend: {},
  },
  plugins: [],
}
