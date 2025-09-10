import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only use assetPrefix for GitHub Pages subdirectory
  assetPrefix: process.env.NODE_ENV === 'production' ? '/landing-page' : '',
};

export default withNextIntl(nextConfig);
