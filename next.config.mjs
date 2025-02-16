/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
      API_ENDPOINT: process.env.API_ENDPOINT,
    }
  }
  
  module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
