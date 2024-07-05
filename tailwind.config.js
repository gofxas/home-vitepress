/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./docs/**/*.{vue,js,md,html}"],
  theme: {
    extend: {},
  },
  options: {
    safelist: ["html", "body"],
  },
  plugins: [],
};
