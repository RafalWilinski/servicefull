import React from 'react'
import { getPosts } from '../../lib/getPosts'
import SEO from '../../src/components/seo'
import { Meta, Subtitle, Text } from '../../src/theme'

export function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts
    }
  }
}

export default ({posts}) => {
  return (
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
    {posts.map((post) => {
      const title = post.data.title
      return (
        <div key={post.slug} style={{ marginBottom: '20px' }}>
          <Meta>
            {post.data.date} / {post.data.length} /{' '}
            {post.data.categories}
          </Meta>
          <Subtitle style={{ marginBottom: '10px' }}>
            <a to={post.slug}>{title}</a>
          </Subtitle>
          <Text
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ marginTop: 0 }}
          />
        </div>
      )
    })}
  </div>
) }

