import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Text, Avatar, BioWrapper, ColorLink, StyledLink } from "../theme";


function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <BioWrapper>
            <Avatar
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{ marginLeft: 0 }}
            />
            <Text style={{ fontSize: 16 }}>
              Written by <a href="https://rwilinski.me" target="_blank" style={{ textDecoration: 'underline', color: 'black' }}><strong>{author}</strong></a>, certified AWS Architect, Serverless enthusiast and consultant.{' '}

              <a href={`https://twitter.com/${social.twitter}`} style={{ color: 'rgb(45, 200, 58)' }}>You may find me on Twitter</a>

            </Text>
          </BioWrapper>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar:file(absolutePath: { regex: "/profile-pic.jpg/" }) {
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
