/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f0fdfb",
          100: "#ccf7f5",
          600: "#0B7A8C",
          700: "#00606e",
        },
        pink: {
          50: "#fdf2f8",
          600: "#E8385F",
        },
      },
      borderRadius: {
        "2xl": "1rem",
      },
      fontFamily: {
        sans: ["Quicksand", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
