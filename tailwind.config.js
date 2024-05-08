/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRgb: 'rgb(245, 245, 245)', // Orange color
        darktheme: 'rgb(29, 30, 32)',
      },
    },
  },
  plugins: [],
};
