import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 该属性可配置生成SSG 或者 CSR
	images: {
		unoptimized: true,
		remotePatterns: [new URL('https://picsum.photos/**')],
	},
	// [SSR反向代理](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites)
	rewrites () {
		return [
			{
				source: '/api/:slug*',
				destination: 'https://jsonplaceholder.typicode.com/:slug*',
			}
		]
	}
}

export default nextConfig
