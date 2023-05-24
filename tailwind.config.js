/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    ".src/Form/**/*.php",
    "./vendor/tales-from-a-dev/flowbite-bundle/templates/**/*.html.twig",
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
      backgroundImage: {  
        'hero-pattern': "url('/assets/uploads/imagehome/homeimg.jpg')",
        'hero-admin': "url('/assets/uploads/imagehome/vttadmin.png')",
        
        },
        corePlugins: {
          aspectRatio: false,
        },
        aspectRatio: {
          auto: 'auto',
          square: '1 / 1',
          video: '16 / 9',
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
          10: '10',
          11: '11',
          12: '12',
          13: '13',
          14: '14',
          15: '15',
          16: '16',
        },
    },
    container: {
      center: true,
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
    require('@tailwindcss/aspect-ratio'),
  ],
  
};
