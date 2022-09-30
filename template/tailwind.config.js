/** @type {import("tailwindcss").Config} */
/* eslint-disable */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {},
  plugins: [require("tw-elements/dist/plugin"), require("daisyui")],
  important: true
};
