module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "#F8F9FE",
        "light-yellow": "#FFF4E2",
        "dark-yellow": "#FFEAC9",
        "light-amber": "#FCF2F0",
        magenta: "#F04770",
        lizard: "#57BE92",
        "pastel-orange": "#F9BA3D",
        "pastel-amber": "#FAF7F5",
      },
      screens: {
        lg: "1025px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
