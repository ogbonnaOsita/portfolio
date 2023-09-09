/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // colors: {
    //   'primary': '#F59E00',
    //   'darkPrimary': '#4bffa5',
    //   'secondary': '#141414',
    // },
    extend: {
      colors: {
        primary: "#F59E00",
        darkPrimary: "#4bffa5",
        secondary: "#141414",
        brownAccent: "#EADECE",
      },
    },
  },
  plugins: [],
};
