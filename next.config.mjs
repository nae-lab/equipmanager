/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: process.env.GITHUB_ACTIONS && "/equipmanager",
  basePath: "/equipmanager",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
