/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // No external domains needed for local images
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
