import React from 'react'
import { graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Subtitle,
  ColorLink,
  ColorExternalLink,
  ColorInternalLink,
} from '../theme'

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
    href:
      'https://www.youracclaim.com/badges/025a2b45-2792-4a3a-8d8d-24fc95f18157/public_url',
  },
  {
    date: '2019',
    name: 'Worked on XHQ.com as Backend Lead',
    href: 'https://xhq.com',
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
    name: 'Got my first AWS Architect certification',
    href:
      'https://www.youracclaim.com/badges/355f7d52-9071-46f9-8986-1a45bfe3cd7f/public_url',
  },
  {
    date: '2016',
    name: 'Released Express-status-monitor',
    href: 'https://github.com/RafalWilinski/express-status-monitor',
  },
  {
    date: '2015',
    name: 'Joined Fandom.com',
    href: 'https://www.fandom.com/',
  },
  {
    date: '2014',
    name: 'Landed my first "real" Software Engineering job',
    href: undefined,
  },
  {
    date: '2012',
    name: 'Released Voxel Rush, game downloaded over 2 million times',
    href: 'https://www.riotgames.com/en',
  },
]

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
                    color: '#999',
                  }}
                  className="big-only"
                >
                  {node.frontmatter.date}
                </span>
                <ColorLink to={node.fields.slug}>{title}</ColorLink>
              </div>
            )
          })}

        <ColorInternalLink
          style={{ fontWeight: '600', fontSize: '1em', marginTop: '1em' }}
          to="/blog"
        >
          View all posts
        </ColorInternalLink>

        <Subtitle style={{ marginBottom: '1em', marginTop: '3em' }}>
          Highlights
        </Subtitle>
        {highlights.map(project => (
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
            <ColorLink
              to={project.href}
              style={{ color: project.href ? 'rgb(45, 200, 50)' : 'black' }}
            >
              {project.name}
            </ColorLink>
          </div>
        ))}
        <ColorInternalLink
          style={{ fontWeight: '600', fontSize: '1em', marginTop: '1em' }}
          to="/about"
        >
          More about me
        </ColorInternalLink>
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
