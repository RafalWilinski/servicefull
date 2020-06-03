import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

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
  }
`
