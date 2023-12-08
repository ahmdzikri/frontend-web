import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#000105",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
        heading: ["var(--font-barlow-condensed)"],
        display: ["var(--font-akira-expanded)"],
      },
      animation:{
        'reverse-spin': 'reverse-spin 10s linear infinite',
        'spin-slow': 'spin 10s linear infinite',

      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#020617",
          secondary: "#FBB83B",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        mytheme: {
          primary: "#FBB83B",
          secondary: "#00d4ff",
          accent: "#0000ff",
          neutral: "#250f06",
          "base-100": "#020617",
          info: "#00e7ff",
          success: "#00af17",
          warning: "#f1a800",
          error: "#ff485f",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
export default config
