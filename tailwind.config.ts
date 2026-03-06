import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#FDB813",
      },
      fontFamily: {
        pressStart: ['var(--font-press-start)', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(253, 184, 19, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(253, 184, 19, 0.6)' },
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2s infinite ease-in-out',
      }
    },
  },
  plugins: [],
};
export default config;
