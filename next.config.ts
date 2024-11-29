import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export"
};

if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/nextjs-on-github-pages";
}

export default nextConfig;
