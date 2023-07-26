/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {

        "primary": "#F38181",
        "secondary": "#FCE38A",
        "tertiary": "#EAFFD0",
        "additional": "#95E1D3",

        'google': {
          "btn": '#dd4b39',
          "btn-hover": '#dd4b39'
        },
        'facebook': {
          'blue': "#4468b0"
        }

      },
    },

  },
  plugins: [],
  app: {
    pageTransition: { name: 'layout', mode: 'out-in' }

  },

}

