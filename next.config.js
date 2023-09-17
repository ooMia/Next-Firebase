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
                destination: '/themes/kakaovc',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
