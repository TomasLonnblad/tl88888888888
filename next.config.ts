import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    domains: ['https://tomaslonnblad.github.io/'],    
     remotePatterns: [
      { protocol: 'https', hostname: 'tomaslonnblad.github.io', pathname: '/2.jpg' },
      { protocol: 'https', hostname: 'tomaslonnblad.github.io', pathname: '/3.jpg' },
      { protocol: 'https', hostname: 'tomaslonnblad.github.io', pathname: '/4.jpg' },
    ],
  },
}
export default nextConfig;
