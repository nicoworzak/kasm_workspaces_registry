/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Nicos Registry',
    description: 'My list of Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://nicoworzak.github.io/kasm_workspaces_registry/',
    contactUrl: 'https://github.com/nicoworzak/kasm_workspaces_registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm_workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
