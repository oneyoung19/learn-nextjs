import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 该属性可配置生成SSG 或者 CSR
	images: { unoptimized: true }
}

export default nextConfig
