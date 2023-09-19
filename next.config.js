/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    swcMinify: true,
    output: 'standalone',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
