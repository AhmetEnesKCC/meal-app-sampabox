const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "--main-color": "#FF2525",
      },
    },
  },

  variants: {
    extend: {
      inset: ["hover", "group-hover"],
      margin: ["first"],
      flex: ["responsive"],
      grid: ["responsive"],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".flex-basis-1": {
          "flex-basis": "100%",
        },
        ".flex-basis-2": {
          "flex-basis": "50%",
        },
        ".flex-basis-3": {
          "flex-basis": "33%",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
