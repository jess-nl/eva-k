/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
};

module.exports = nextConfig;
