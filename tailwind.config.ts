/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this matches your project structure
  ],
  theme: {
    extend: {
      colors: {
        "apple-light": "#f4f4f5",
        "apple-medium": "#e5e5e5",
        "apple-gray": "#d1d1d1",
      },
      backgroundImage: {
        "apple-gradient": "linear-gradient(to bottom, #f4f4f5, #e5e5e5)",
        "apple-gradient-dark": "linear-gradient(to bottom, #1c1c1e, #2c2c2e)",
      },
    },
  },
  plugins: [],
};
