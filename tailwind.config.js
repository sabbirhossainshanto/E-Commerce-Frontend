import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fd3d57",
        secondary: "#2b2d42",
      },
      backgroundColor: {
        primary: "#fd3d57",
        secondary: "#2b2d42",
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
};
