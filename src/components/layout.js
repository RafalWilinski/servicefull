import React from 'react'
import { Container, Title, StyledLink, Text, Line, HiddenExternalLink } from "../theme";

class Layout extends React.Component {
  render() {
    const { location, title, children, description } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <Title>
            <StyledLink to={'/'}>
              {title}
            </StyledLink>
          </Title>
          <Line />
          <Text style={{ marginTop: '5px' }}>
            <HiddenExternalLink target="_blank" href={'https://www.slideshare.net/jedi4ever/from-serverless-to-service-full-how-the-role-of-devops-is-evolving'} style={{
              textDecoration: 'none',
              color: 'black'
            }}>
              {description}
            </HiddenExternalLink>
          </Text>
        </>
      )
    } else {
      header = (
        <>
          <Title>
            <StyledLink>
              {title}
            </StyledLink>
          </Title>
          <Line />
        </>
      )
    }
    return (
      <Container>
        {header}
        {children}
      </Container>
    )
  }
}

export default Layout
