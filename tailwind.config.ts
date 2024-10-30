import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abel: ['Abel', 'sans-serif'],
        amatic: ['Amatic SC', 'cursive'],
        archivo: ['Archivo', 'sans-serif'],
        ebGaramond: ['EB Garamond', 'serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        background: "var(--background)", // Color de fondo
        foreground: "var(--foreground)", // Color de texto
        customOrange: '#6026f5',
      },
    },
  },
  plugins: [],
};

export default config;
