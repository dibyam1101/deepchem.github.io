/** @type {import('next').NextConfig} */


const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  swcMinify: true,

  images: {
    unoptimized: true,
  },

  basePath: !debug ? "/deepchem.github.io" : "",
  assetPrefix: !debug ? "/deepchem.github.io/" : "",

  async redirects() {
    return [
      {
        source: '/tutorials',
        destination: '/tutorials/About_nODE_Using_Torchdiffeq_in_Deepchem',
        permanent: true,
      },
    ]
  },

  
};

module.exports = nextConfig;
