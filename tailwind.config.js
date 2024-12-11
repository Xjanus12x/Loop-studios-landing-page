/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkGray: "hsl(0, 0%, 55%)",
          veryDarkGray: "hsl(0, 0%, 41%)",
        },
      },
    },
  },
  plugins: [],
};
