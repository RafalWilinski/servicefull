const theme = require('shiki/themes/github-dark.json')
const { remarkCodeHike } = require('@code-hike/mdx')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [[remarkCodeHike, { theme, showCopyButton: true }]],
  },
})

module.exports = withMDX({
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
