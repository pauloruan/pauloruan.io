/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**"
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
        port: "",
        pathname: "/media/**"
      },
      {
        protocol: "https",
        hostname: "media1.giphy.com",
        port: "",
        pathname: "/media/**"
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
}
