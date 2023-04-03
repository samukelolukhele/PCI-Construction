/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#EA5455",
        brandSecondary: "#BCCEF8",
        brandBg: "#16003B",
        brandBgSecondary: "#567189",
      },
    },
  },
  plugins: [],
};
