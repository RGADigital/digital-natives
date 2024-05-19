/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  paths: {
    '@/atoms/*': ['src/components/atoms/*'],
    '@/molecules/*': ['src/components/molecules/*'],
    '@/globals/*': ['src/components/globals/*'],
    '@/organisms/*': ['src/components/organisms/*'],
    '@/helpers/*': ['src/helpers/*'],
    '@/utils/*': ['src/utils/*'],
    '@/templates/*': ['src/components/templates/*'],
  },
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  experimental: {
    // Tree shaking for Mantine component
    // https://mantine.dev/guides/next/
    // https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
})
