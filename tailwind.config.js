const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class",
    theme: {
        extend: {
          colors: {
            trueGray: colors.neutral,
            primary: {
              50: '#f0fdf4',
              100: '#dcfce7',
              200: '#bbf7d0',
              300: '#86efac',
              400: '#4ade80', // Main primary color
              500: '#22c55e',
              600: '#16a34a',
              700: '#15803d',
              800: '#166534',
              900: '#14532d',
              950: '#052e16',
            },
            secondary: {
              50: '#f7fee7',
              100: '#ecfccb',
              200: '#d9f99d',
              300: '#bef264',
              400: '#a3e635', // Main secondary color
              500: '#84cc16',
              600: '#65a30d',
              700: '#4d7c0f',
              800: '#3f6212',
              900: '#365314',
              950: '#1a2e05',
            },
          },
        },
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.serif],
          stock: [defaultTheme.fontFamily.serif],
        },
      },
    plugins: [require('daisyui')]
};
