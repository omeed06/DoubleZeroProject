/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {'Banner': 'url("Asset/Images/banner.png")',
    },},
  },
  plugins: [],
}