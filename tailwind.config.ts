import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F3EBDD",
        "sand-2": "#EBE0CD",
        "sand-3": "#E2D4BC",
        ink: "#173A28",
        "ink-2": "#21503a",
        coral: "#D9572E",
        "coral-2": "#C24420",
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
