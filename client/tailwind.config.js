/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#0F766E", // teal
        primaryDark: "#115E59",

        accent: "#F59E0B", // amber
        accentDark: "#D97706",

        background: "#F3F4F6",
      },
    },
  },

  plugins: [],
};