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
        // eduDots: ['Edu AU VIC WA NT Dots', 'cursive'],
        // exo: ['Exo 2', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        // indie: ['Indie Flower', 'cursive'],
        // kanit: ['Kanit', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        // sixtyfour: ['Sixtyfour Convergence', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: '#6026f5',
      },
    },
  },
  plugins: [],
};
export default config;
