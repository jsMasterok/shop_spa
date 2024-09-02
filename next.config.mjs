/** @type {import('next').NextConfig} */
const nextConfig = {
  proxy: "https://d1mw0dsp1qe5h5.cloudfront.net",
  images: {
    domains: [
      "127.0.0.1",
      "https://d1mw0dsp1qe5h5.cloudfront.net"
    ],
    unoptimized: true,
  },
};

export default nextConfig;
