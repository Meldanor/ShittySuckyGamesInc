module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    lineClamp: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}