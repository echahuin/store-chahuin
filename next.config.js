const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.blogs.es'],
      },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
