import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import {
  Text,
  Subtitle,
  StyledLink,
  ColorLink,
  ColorExternalLink,
} from '../theme'

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
        <SEO
          title="Servicefull"
          keywords={['blog', 'aws', 'javascript', 'serverless', 'typescript']}
        />
        <Bio />
        <Subtitle style={{ marginBottom: '1em', marginTop: '2em' }}>
          Recent Blog Posts
        </Subtitle>
        {posts
          .filter((n, i) => i < 5)
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div
                key={node.fields.slug}
                style={{ marginBottom: '20px', fontSize: '1em' }}
              >
                <span
                  style={{
                    width: '160px',
                    marginLeft: '-170px',
                    textAlign: 'right',
                    marginRight: '10px',
                    color: '#666',
                  }}
                  className="big-only"
                >
                  {node.frontmatter.date}
                </span>
                <ColorLink to={node.fields.slug}>{title}</ColorLink>
              </div>
            )
          })}

        <ColorExternalLink style={{ fontWeight: '600', fontSize: '1em' }}>
          View all posts
        </ColorExternalLink>

        <Subtitle style={{ marginBottom: '1em', marginTop: '2em' }}>
          Recent Open Source Projects
        </Subtitle>
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
