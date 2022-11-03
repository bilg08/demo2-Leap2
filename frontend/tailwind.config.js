/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": '#804fb3',
        'mid-purple': '#ccb7e5',
        'light-purple': '#e6d1f2'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        border: "border 1s ease",
      },
      keyframes: {
        border: {
          "0%": { border: '2px solid white' },
          "100%": { border: '2px solid blue' },
        },
      },
    },
  },
  plugins: [],
};
