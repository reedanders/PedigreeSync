const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class",
    theme: {
        extend: {
          colors: {
            trueGray: colors.neutral,
          },
        },
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.serif],
          stock: [defaultTheme.fontFamily.serif],
        },
      },
    plugins: [require('daisyui')]
};
