/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "#727f96",
        "custom-color2": "#33ff57",
      },
    },
  },
  plugins: [],
};
