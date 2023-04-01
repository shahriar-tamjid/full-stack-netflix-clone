/** @type {import('tailwindcss').Config} */
module.exports = {
  // Inside "content" specify the names of all the files in which you are going to use TailwindCSS
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
