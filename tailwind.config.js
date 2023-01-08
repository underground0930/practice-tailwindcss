/** @type {import('tailwindcss').Config} */

// REFERENCE: defaultConfig
// URL: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: [`var(--font-poppins)`],
      },
    },
  },
  plugins: [],
}
