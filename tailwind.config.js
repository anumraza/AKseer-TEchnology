/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#0ea5e9",
        accent: "#06b6d4",
      },
    },
  },
  plugins: [],
};
