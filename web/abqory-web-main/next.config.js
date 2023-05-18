/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abqory-storage-dev.is3.cloudhost.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "abqory-storage.is3.cloudhost.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
