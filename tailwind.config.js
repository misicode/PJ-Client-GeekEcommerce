/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          400: "#0BA99A",
          500: "#0A9487",
          550: "#0B8B7F",
          600: "#088276",
          700: "#077369",
        },
      },
      fontFamily: {
        "primary": ["Kanit", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
}

