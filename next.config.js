/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'png.pngtree.com',
      'localhost',
      'image.tmddb.org',
      'image.tmdb.org',
    ],
  },
};

module.exports = nextConfig;
