// module.exports = {
//   plugins: {
//     tailwindcss: {'./tailwind.js'},
//     autoprefixer: {},
//   },
// }

const tailwindcss = require('tailwindcss');

module.exports = {
  Plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
}