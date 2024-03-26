/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "abrir-menu": "url('../menu/menu.svg')",
        "cerrar-menu": "url('../menu/close.svg')",
      },
      colors: {
        main: "#faebd7",
      },
      keyframes: {
        "bg-animated": {
          "0%, 100%": { "background-position": "0%, 50%" },
          "50%": { "background-position": "100%, 50%" },
        },
      },
      animation: {
        "bg-animated": "bg-animated 6s ease infinite",
      },
    },
  },
  plugins: [],
};
