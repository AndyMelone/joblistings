import type { Config } from "tailwindcss";
import fluid, { extract } from "fluid-tailwind";

export default {
  darkMode: ["class"],
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "header-desktop": "url('/bg-header-desktop.svg')",
        "header-mobile": "url('/bg-header-mobile.svg')",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [fluid],
} satisfies Config;
