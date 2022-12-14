/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    //config.resolve.fallback = { fs: false };
     
    return config;
  },

  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
 

};

module.exports = nextConfig;
