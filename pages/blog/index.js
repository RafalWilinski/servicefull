import React from 'react'
import SEO from '../../src/components/seo'
import { Meta, Subtitle, Text } from '../../src/theme'

export default props => (
  <div>
    <SEO
      title="Cloud Native Blog"
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
    <p>My recent thoughts about AWS, Serverless, DynamoDB and more...</p>
    {/* {props.data.allMdx.edges.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug} style={{ marginBottom: '20px' }}>
          <Meta>
            {node.frontmatter.date} / {node.frontmatter.length} /{' '}
            {node.frontmatter.categories}
          </Meta>
          <Subtitle style={{ marginBottom: '10px' }}>
            <a to={node.fields.slug}>{title}</a>
          </Subtitle>
          <Text
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
            style={{ marginTop: 0 }}
          />
        </div>
      )
    })} */}
  </div>
)

