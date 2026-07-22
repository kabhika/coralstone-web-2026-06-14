import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F3EBDD",
        "sand-2": "#EBE0CD",
        "sand-3": "#E2D4BC",
        ink: "#122052",
        "ink-2": "#1C3664",
        coral: "#D86937",
        "coral-2": "#C15629",
        charcoal: "#2A2722",
        muted: "#6B6357",
        paper: "#FBF7EF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
