import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import { Text, Subtitle, StyledLink, Meta } from '../theme'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMdx.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={siteDescription}
      >
        <link rel="stylesheet" href="https://use.typekit.net/srd8xkt.css" />
        <SEO
          title="Servicefull"
          keywords={['blog', 'aws', 'javascript', 'serverless', 'typescript']}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} style={{ marginBottom: '20px' }}>
              <Meta>
                {node.frontmatter.date} / {node.frontmatter.length} /{' '}
                {node.frontmatter.categories}
              </Meta>
              <Subtitle style={{ marginBottom: '10px' }}>
                <StyledLink to={node.fields.slug}>{title}</StyledLink>
              </Subtitle>
              <Text
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
                style={{ marginTop: 0 }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 240)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            length
            categories
          }
        }
      }
    }
  }
`
