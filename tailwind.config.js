const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      "background-color":`#5796B4`
    },
    fontFamily: {
      sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
