/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    apiHost: process.env.API_HOST,
  },
};

module.exports = nextConfig;
