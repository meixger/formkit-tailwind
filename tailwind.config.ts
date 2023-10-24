import FormKitVariants from '@formkit/themes/tailwindcss'

const formkit = "./node_modules/@formkit/themes/dist/tailwindcss/genesis/**/*.mjs"
// would work:
// import FormKitTailWindGenesis from '@formkit/themes/tailwindcss/genesis'
// const formkit = { raw: JSON.stringify(FormKitTailWindGenesis), extension: "js" }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    formkit
  ],
  theme: {
    extend: {},
  },
  plugins: [FormKitVariants],
}

