/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#3B5BFC',
          light: '#5B78FF',
          dark: '#2A42D8',
        },
        dark: {
          DEFAULT: '#0F1221',
          2: '#161A2E',
          3: '#1E2340',
        },
        accent: '#00E5FF',
        green: '#22C55E',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
