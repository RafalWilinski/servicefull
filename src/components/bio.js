import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Text, Avatar, BioWrapper, ColorLink, StyledLink } from '../theme'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <BioWrapper>
            <Avatar
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{ marginLeft: 0 }}
            />
            <Text style={{ fontSize: 16 }}>
              Written by{' '}
              <a
                href="https://twitter.com/RafalWilinski"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: 'underline', color: 'rgb(45,200,58)' }}
              >
                {author}
              </a>{' '}
              - Serverless Consultant and Founder of{' '}
              <a
                target="_blank"
                rel="noopener"
                href={`https://twitter.com/${social.twitter}`}
                style={{ color: 'rgb(45, 200, 58)' }}
              >
                Dynobase
              </a>
            </Text>
          </BioWrapper>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
