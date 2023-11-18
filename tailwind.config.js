/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-white": "#ffffff",
        "text-black": "#0b0c0e",
        "text-light": "#bbbbbb",
        "bg-light-gray": "#f1f1f1",
        "bg-dark-gray": "#212121",
        border: "#414141",
        "bg-dark-gray": "#141415",
        "text-footer": "#59607C",
      },
      fontFamily: {
        main: "var(--ff-main)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
