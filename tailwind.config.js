module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "#945DE3",
        "light-yellow": "#FBF5EE",
        "dark-yellow": "#FFEAC9",
        "light-amber": "#FD7E50",
        "light-blue": "#95CFD5",
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
