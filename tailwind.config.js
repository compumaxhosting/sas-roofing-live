
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      desktop: "1440px", // ✅ custom screen
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        bevietnam: ['var(--font-bevietnam)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
