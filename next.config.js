/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "https://links.papareact.com",
      "upload.wikimedia.org",
      "cdn-icons-png.flaticon.com",
    ],
  },
};
