/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#eeeed2',
        black: '#769656',
        'white-select': '#f5f689',
        'black-select': '#b9ca4e',
      },
    },
  },
  plugins: [],
};
