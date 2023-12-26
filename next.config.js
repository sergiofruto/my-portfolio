/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "images.prismic.io",
      "teenage.engineering",
      "assets-global.website-files.com",
    ],
  },
};

module.exports = nextConfig;
