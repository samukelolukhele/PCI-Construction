/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#146C94",
        brandSecondary: "#BAD7E9",
        brandBg: "#0A2647",
        brandBgSecondary: "#8758FF",
      },
    },
  },
  plugins: [],
};
