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
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/wd/register',
        permanent: true,
      },
    ];
  },
  //https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#self-hosting-isr
  // experimental: {
  //   // Defaults to 50MB
  //   isrMemoryCacheSize: 0, // cache size in bytes
  // },
};

module.exports = nextConfig;
