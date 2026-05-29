import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        /* Backgrounds — use bg-canvas, bg-canvas-secondary */
        canvas: {
          DEFAULT: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        /* Text — use text-foreground, text-foreground-muted */
        foreground: {
          DEFAULT: "var(--text-primary)",
          muted: "var(--text-secondary)",
          inverse: "var(--text-inverse)",
        },
        /* shadcn-compatible aliases */
        primary: {
          DEFAULT: "var(--bg-primary)",
          foreground: "var(--text-primary)",
        },
        secondary: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-secondary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          muted: "var(--accent-muted)",
          foreground: "var(--text-inverse)",
        },
        deep: "var(--bg-deep)",
        border: "var(--border)",
        muted: {
          DEFAULT: "var(--text-secondary)",
          foreground: "var(--text-secondary)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        container: "80rem",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
