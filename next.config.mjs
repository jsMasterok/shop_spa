/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // FIXME: remove it when errors fixed
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["127.0.0.1", "via.placeholder.com"],
    unoptimized: true,
  },
};

export default nextConfig;
