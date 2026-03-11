import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        asphalt: "#0a0a0b",
        carbon: "#121316",
        steel: "#1c1d22",
        ember: "#ef4423",
        blaze: "#ff8a1d",
        smoke: "#d8dce2",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(239,68,35,0.20)",
        card: "0 24px 60px rgba(0,0,0,0.32)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hazard-stripe":
          "repeating-linear-gradient(135deg, rgba(255,138,29,0.18) 0, rgba(255,138,29,0.18) 12px, transparent 12px, transparent 24px)",
      },
      animation: {
        "pulse-soft": "pulseSoft 2.2s ease-in-out infinite",
        "float-soft": "floatSoft 5s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.92" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
