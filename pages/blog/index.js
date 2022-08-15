import React from 'react'
import { format } from 'date-fns'
import Link from 'next/link'
import { getPosts } from '../../lib/getPosts'
import SEO from '../../src/components/seo'
import { Meta, Subtitle, Text } from '../../src/theme'

export function getStaticProps() {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}

export default ({ posts }) => {
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
      <p style={{ marginBottom: '30px' }}>
        My recent thoughts about AWS, Serverless, DynamoDB and more...
      </p>
      {posts
        .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
        .map((post) => {
          const title = post.data.title
          return (
            <div key={post.slug} style={{ marginBottom: '20px' }}>
              <Meta style={{ marginBottom: -10 }}>
                {format(new Date(post.data.date), 'PPP')} / {post.data.length} /{' '}
                {post.data.categories}
              </Meta>
              <Link href={`/blog/${post.slug}`}>
                <a style={{ textDecorationColor: 'black' }}>
                  <Subtitle
                    style={{
                      marginBottom: '10px',
                      color: 'black',
                      textDecorationColor: 'black',
                    }}
                  >
                    {title}
                  </Subtitle>
                </a>
              </Link>
              <Text style={{ marginTop: 0, marginBottom: '50px' }}>
                {post.data.excerpt}
              </Text>
            </div>
          )
        })}
    </div>
  )
}
