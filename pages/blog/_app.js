import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../../src/components/layout'
import SEO from '../../src/components/seo'
import {
  Text,
  Subtitle,
  Meta,
  Point,
  Subsubtitle,
  ColorExternalLink,
} from '../../src/theme'
import PrevNextNav from '../../src/components/prevNextNav'

const components = {
  h1: Subsubtitle,
  p: Text,
  li: Point,

  a: ColorExternalLink,
}

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props)

    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={post.frontmatter.keywords.split(',')}
          image={post.frontmatter.image}
          url={this.props.data.mdx.fields.slug}
        />
        <Meta style={{ marginTop: 40 }}>
          {post.frontmatter.date} / {post.frontmatter.length} /{' '}
          {post.frontmatter.categories}
        </Meta>
        {/* <Subtitle>{post.frontmatter.title}</Subtitle> */}
        <MDXProvider components={components}>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </MDXProvider>

        <br />
        <PrevNextNav next={next} previous={previous} />
      </Layout>
    )
  }
}

export default BlogPostTemplate
