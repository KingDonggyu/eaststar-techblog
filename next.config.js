const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
