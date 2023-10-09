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
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/dev',
        permanent: true,
      },
      {
        source: '/dev',
        destination: '/dev/themes/kakaovc',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
