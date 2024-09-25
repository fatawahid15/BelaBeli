import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Existing plugin for animations
    require("daisyui"), // DaisyUI plugin for prebuilt components
  ],
  // Optional: Customize DaisyUI theming
  daisyui: {
    themes: ["light", "dark"], // Choose from pre-built themes like 'light', 'dark', 'cupcake', etc.
  },
};

export default config;
