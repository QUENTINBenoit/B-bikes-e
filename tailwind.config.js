/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "84rem",
        "10xl": "96rem",
      },
      boxShadow: {
        "3xl": "35px 35px 0 2px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        gluten: ["Gluten"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
  ],
};
