import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: {
          DEFAULT: "#F5F2EE",
          soft: "#FAF5F0",
          muted: "#EDEAE5",
        },
        ink: "#1A1916",
        graphite: {
          DEFAULT: "#2A2723",
          light: "#3D3A35",
        },
        accent: {
          DEFAULT: "#2D5016",
          light: "#4A7C2F",
          muted: "#D4E6C3",
        },
        line: "#D9D4CD",
        faint: "#6B6560",
      },
      maxWidth: {
        shell: "84rem",
      },
      transitionTimingFunction: {
        lux: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
