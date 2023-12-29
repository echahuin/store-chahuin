const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/**',
          },
        ],
    },
    // headers: async () => [
    //   {
    //     source: "/api/typeBanners/*",
    //     headers: [
    //       { key: "Access-Control-Allow-Origin", value: "*" },
    //       { key: "Access-Control-Allow-Headers", value: "Content-Type" },
    //       { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE" },
    //     ],
    //   },
    // ],
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
