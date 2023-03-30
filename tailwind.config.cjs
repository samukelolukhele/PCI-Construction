/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#EA5455",
        brandSecondary: "#BAD7E9",
        brandBg: "#2B3A55",
        brandBgSecondary: "#8758FF",
      },
    },
  },
  plugins: [],
};
