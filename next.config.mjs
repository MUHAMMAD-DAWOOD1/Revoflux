/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'ui-avatars.com' },
    ],
  },
  /* Netlify and modern Next.js standard config */
};

export default nextConfig;
