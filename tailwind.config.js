/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#5356FF',
        'primary-lite': '#378CE7',
        'secondary': '#DFF5FF'
      },
    },
  },
  plugins: [],
};
