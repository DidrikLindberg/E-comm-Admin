/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans these files for class names
  theme: {
    extend: {
      colors: {
        'custom-green': '#4A5E48', // Custom color added
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Example of extending font families
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};