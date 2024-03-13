// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ['page.jsx', 'api.js'],
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      pure: true,
    },
  },
  pageExtensions: ["page.tsx", "api.ts"],
  serverRuntimeConfig: {
    mode: process.env.MODE,
  },
  publicRuntimeConfig: {
    appVersion: process.env.APP_VERSION,
  },
};

module.exports = nextConfig;
