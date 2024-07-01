/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "catalina-blue": {
          50: "#ebf5ff",
          100: "#dbecff",
          200: "#bedbff",
          300: "#97c1ff",
          400: "#6e9bff",
          500: "#4c76ff",
          600: "#2c4dff",
          700: "#203ae2",
          800: "#1d33b6",
          900: "#120e59",
          950: "#131d53",
          1000: "#1A1937",
        },
        "lightning-yellow": {
          50: "#fefbec",
          100: "#fcf2c9",
          200: "#f9e28e",
          300: "#f5cf54",
          400: "#f6ad12",
          500: "#ec9a14",
          600: "#d1740e",
          700: "#ae530f",
          800: "#8d4013",
          900: "#743513",
          950: "#431a05",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/Rectangle 9.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
