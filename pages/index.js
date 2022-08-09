import React from 'react'
import { getPosts } from '../lib/getPosts'
import Bio from '../src/components/bio'
import Link from 'next/link'
import SEO from '../src/components/seo'
import { ColorExternalLink, Subtitle } from '../src/theme'

export function getStaticProps() {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}

const highlights = [
  {
    date: '2021',
    name: 'Dynobase crosses 10k MRR mark',
    href: 'https://dynobase.dev',
  },
  {
    date: '2020',
    name: 'Joined Stedi as Serverless Engineer',
    href: 'https://stedi.com',
  },
  {
    date: '2020',
    name: 'Started Dynobase',
    href: 'https://dynobase.dev',
  },
  {
    date: '2019',
    name: 'Became Certified AWS Architect Professional',
    href: 'https://www.youracclaim.com/badges/025a2b45-2792-4a3a-8d8d-24fc95f18157/public_url',
  },
  {
    date: '2017',
    name: 'Worked on multiple projects for Riot Games',
    href: 'https://www.riotgames.com/en',
  },
  {
    date: '2016',
    name: 'Worked on Serverless Framework',
    href: 'https://serverless.com',
  },
  {
    date: '2016',
    name: 'Started doing AWS consulting',
    href: 'https://netguru.co',
  },
  {
    date: '2016',
    name: 'Released Express-status-monitor, NPM module downloaded over million times',
    href: 'https://github.com/RafalWilinski/express-status-monitor',
  },
  {
    date: '2015',
    name: 'Joined Fandom.com',
    href: 'https://www.fandom.com/',
  },
  {
    date: '2012',
    name: 'Released Voxel Rush, a mobile game downloaded over 2 million times',
    href: 'https://www.riotgames.com/en',
  },
]

function BlogIndex({ posts }) {
  const siteTitle = 'Rafal Wilinski'
  const siteDescription =
    'Because Serverless is a terrible name. Blog about AWS Cloud, Serverless and more'

  return (
    <>
      <SEO
        title="Cloud Native Engineer"
        keywords={[
          'blog',
          'aws',
          'javascript',
          'serverless',
          'typescript',
          'consulting',
          'serverless consulting',
          'aws consulting',
          'cdk',
        ]}
      />
      <Bio />
      <Subtitle style={{ marginBottom: '1em', marginTop: '2em' }}>
        Recent Blog Posts
      </Subtitle>
      {posts
        .filter((n, i) => i < 5)
        .map((node) => {
          const title = node.data.title
          return (
            <div
              key={node.slug}
              style={{ marginBottom: '20px', fontSize: '1em' }}
            >
              <span
                style={{
                  width: '160px',
                  marginLeft: '-170px',
                  textAlign: 'right',
                  marginRight: '10px',
                  color: '#999',
                }}
                className="big-only"
              >
                {node.data.date}
              </span>
              <Link href={`/blog/${node.slug}`}>
                <ColorExternalLink href={`/blog/${node.slug}`}>
                  {title}
                </ColorExternalLink>
              </Link>
            </div>
          )
        })}

      <Link
        style={{ fontWeight: '600', fontSize: '1em', marginTop: '1em' }}
        href="/blog"
      >
        <ColorExternalLink href="/blog">View all posts</ColorExternalLink>
      </Link>

      <Subtitle style={{ marginBottom: '1em', marginTop: '3em' }}>
        Highlights
      </Subtitle>
      {highlights.map((project) => (
        <div
          key={project.name}
          style={{ marginBottom: '15px', fontSize: '1em' }}
        >
          <span
            style={{
              width: '160px',
              marginLeft: '-170px',
              textAlign: 'right',
              marginRight: '10px',
              color: '#999',
            }}
            className="big-only"
          >
            {project.date}
          </span>
          <a
            to={project.href || '#'}
            style={{ color: project.href ? 'rgb(45, 200, 50)' : 'black' }}
          >
            {project.name}
          </a>
        </div>
      ))}
    </>
  )
}

export default BlogIndex
