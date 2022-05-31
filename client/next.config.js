/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  optimizeFonts: false,

  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },

  async rewrites() {
    console.log('rewrites called');

    return process.env.REACT_APP_ENV === 'development' ?
      [
        {
          source: '/api/:paths*',
          destination: 'http://localhost:4200/api/:path*'
        },
        {
          source: '/uploads/:paths*',
          destination: 'http://localhost:4200/uploads/:path*'
        }
      ] : []
  }
}

module.exports = nextConfig
