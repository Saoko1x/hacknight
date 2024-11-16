/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com", // Para imágenes de perfil de Google
      "avatars.githubusercontent.com", // Por si usas GitHub en el futuro
      "fonts.googleapis.com",
      "fonts.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
