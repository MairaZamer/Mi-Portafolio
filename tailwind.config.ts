import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Esto habilita el modo oscuro
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#E0BBE4',
          DEFAULT: '#9B5DE5',
          dark: '#3A0CA3',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ['"La Belle Aurore"', 'cursive'], // Fuente personalizada
      },
    },
  },
  plugins: [],
};

export default config;
