/** @type {import('next').NextConfig} */
const withImages = require('next-images')

module.exports = {
  reactStrictMode: true
}
module.exports = withImages({
  esModule: true,
  inlineImageLimit: false // A codificação de URL base4/data (SVG) não é suportada ao usar o componente para otimização.
})
