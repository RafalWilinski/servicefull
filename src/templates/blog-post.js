import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Text, Subtitle, Meta } from "../theme";
import PrevNextNav from "../components/prevNextNav";
import Discuss from "../components/discuss";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Meta style={{marginTop: 40}}>
          {post.frontmatter.date} / {post.frontmatter.length} / {post.frontmatter.categories}
        </Meta>
        <Subtitle>{post.frontmatter.title}</Subtitle>
        <Text dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        <Discuss />
        <hr/>
        <hr/>
        <Bio />
        <PrevNextNav next={next} previous={previous} />
        <hr/>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        length
      }
    }
  }
`
