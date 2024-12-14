/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        nav: ["var(--font-nav)"],
      },
      backgroundImage: {
        "card-dark": "linear-gradient(120deg, #202020 0%, #050505 100%)",
      },
    },
  },
  plugins: [flowbitePlugin],
};
