/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three-globe', 'taichi.js'],
  webpack: (config, { isServer }) => {
    // Add fallbacks for node modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
      child_process: false,
    };
    return config;
  },
};

export default nextConfig;