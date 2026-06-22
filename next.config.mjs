import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Enable static export for GitHub Pages
  output: 'export',

  // Set base path for GitHub Pages (only in production)
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',

  // GH Pages 只能按 folder/index.html 解析路径，必须开启
  trailingSlash: true,

  images: {
    // Disable image optimization for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
