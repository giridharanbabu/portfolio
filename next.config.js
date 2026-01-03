/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
module.exports = {
  experimental: {
    optimizeFonts: false,
  },
}
module.exports = nextConfig
