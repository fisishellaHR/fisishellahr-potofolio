/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#257652",
        dark: "#0b231a",
        secondary: "#b8e2c9",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
