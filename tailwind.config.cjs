/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monsterat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      backgroundColor: {
        bgBlack: "hsla(0, 0%, 4%, 0.1)",
      },
    },
  },
  plugins: [],
};
