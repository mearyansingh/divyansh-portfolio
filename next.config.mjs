/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  distDir:'dist',
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/divyansh-portfolio' : '',
  basePath: isProd ? '/divyansh-portfolio' : '',
};

export default nextConfig;
