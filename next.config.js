const theme = require("shiki/themes/nord.json")
const {
  remarkCodeHike,
} = require("@code-hike/mdx")

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, { theme }]
    ],
  },
})

module.exports = withMDX({
  pageExtensions: [
    "ts", "tsx", "js", 
    "jsx", "md", "mdx"
  ],
})
