import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Meta, Subtitle, StyledLink, Text } from '../theme'

export default props => (
  <Layout
    location={props.location}
    title={props.data.site.siteMetadata.title}
    description={props.data.site.siteMetadata.description}
  >
    <SEO
      title="Blog - Rafal Wilinski"
      keywords={['blog', 'aws', 'javascript', 'serverless', 'typescript']}
    />
    <h1
      style={{
        fontWeight: 800,
        fontSize: '3em',
        marginTop: '1em',
        letterSpacing: '-2.5px',
      }}
    >
      Blog
    </h1>
    {props.data.allMdx.edges.map(({ node }) => {
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
