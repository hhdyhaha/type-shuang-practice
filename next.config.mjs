/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // 禁止在打包时进行 ESLint 检查
    },
};

export default nextConfig;
