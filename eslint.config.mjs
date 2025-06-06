import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  {
    ignores: [
      'logs',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',
      'lerna-debug.log*',

      'node_modules',
      'dist',
      'dist-ssr',
      '*.local',

      '.vscode/*',
      '!.vscode/extensions.json',
      '.idea',
      '.DS_Store',
      '*.suo',
      '*.ntvs*',
      '*.njsproj',
      '*.sln',
      '*.sw?',

      '.output',
      '.data',
      '.nuxt',
      '.nitro',
      '.cache',
      '.next',
      '.vercel',
      'out'
    ]
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
    rules: {
      quotes: ['error', 'single'],
      'no-trailing-spaces': 'error',
			'@typescript-eslint/no-require-imports': 'off'
    }
  }
]

export default eslintConfig
