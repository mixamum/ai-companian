require("dotenv").config();

const environment = process.env.NODE_ENV || "dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};



module.exports = nextConfig;
