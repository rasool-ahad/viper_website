/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    PUBLIC_URL: '/'
  }
}

module.exports = nextConfig
