import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Text,
  Subtitle,
  Meta,
  Point,
  Subsubtitle,
  Code,
  ColorExternalLink,
} from '../theme'
import PrevNextNav from '../components/prevNextNav'
import Discuss from '../components/discuss'

const components = {
  h1: Subsubtitle,
  p: Text,
  li: Point,
  pre: Code,
  a: ColorExternalLink,
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={post.frontmatter.keywords.split(',')}
        />
        <Meta style={{ marginTop: 40 }}>
          {post.frontmatter.date} / {post.frontmatter.length} /{' '}
          {post.frontmatter.categories}
        </Meta>
        <Subtitle>{post.frontmatter.title}</Subtitle>
        <MDXProvider components={components}>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </MDXProvider>
        <p />
        <p>
          Agree? Disa̶g̶r̶e̶e̶? <Discuss url={this.props.data.mdx.fields.slug} />
        </p>
        <p />
        <Bio />
        <PrevNextNav next={next} previous={previous} />
        <p />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      code {
        body
      }
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        length
        keywords
      }
    }
  }
`
