/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff",
        secondary: "#d40101",
        themeGray: "#1f1f",
        themeBlack: "#1717"
      },
    },
  },
  plugins: [],
};

