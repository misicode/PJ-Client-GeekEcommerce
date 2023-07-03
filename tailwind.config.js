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
          400: "#2EB8A4",
          500: "#22A699",
          600: "#1F998D",
          700: "#1C887E",
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

