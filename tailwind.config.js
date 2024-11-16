const { theme } = require("./src/styles/theme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        bgGray: theme.colors.bgGray,
        background: theme.colors.background,
        secondaryV2: theme.colors.secondary,
      },
    },
  },
  plugins: [],
};
