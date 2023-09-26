/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.wanted.co.kr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wanted.co.kr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/jobsfeed',
        permanent: true,
      },
    ]
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
