const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(sort: { fields: frontmatter___date }) {
              edges {
                previous {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
                node {
                  id
                  fields {
                    slug
                  }
                }
                next {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }
        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node, previous, next }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: path.resolve(`./src/templates/blog-post.js`),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id, next, previous },
          })
        })
      })
    )
  })
}

const { createFilePath } = require('gatsby-source-filesystem')
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: `/blog${value}`,
    })
  }
}
