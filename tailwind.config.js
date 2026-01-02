
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { ink: "#2F4357", wave: "#34D058" }
      }
    }
  },
  plugins: []
};
