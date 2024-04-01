// /** @type {import('next').NextConfig} */
// const nextConfig = { reactStrictMode: true };

// module.exports = {
//   image: {
//     domains: ["images.unsplash.com"],
//   },
// };
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };

module.exports = {
  ...nextConfig,
  images: {
    domains: ["images.unsplash.com"],
  },
};
