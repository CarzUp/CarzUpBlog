import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // ✅ Allow ALL external images
            },
        ],
        unoptimized: true, // ⚠️ Disables Next.js image optimization
    },
};

export default nextConfig;
