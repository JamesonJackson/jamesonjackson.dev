const withMDX = require("@next/mdx")({extension: /\.mdx?$/});
const path = require('path');

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
