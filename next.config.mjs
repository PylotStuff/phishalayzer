/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/check-site',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
