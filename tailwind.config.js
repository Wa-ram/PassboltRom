/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#d40101",
        themeGray: "#1f1f1f",
        themeBlack: "#171717",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

