import React from 'react'
import styled from 'styled-components'
import { THEME_COLOR } from '../theme'

const HeaderLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  color: black;
  margin-right: 15px;
  &:hover {
    color: ${THEME_COLOR};
  }
`

const Footer = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
    }}
  >
    <HeaderLink href={`/`}>Rafal Wilinski</HeaderLink>
    <HeaderLink
      target="_blank"
      href={`https://rwilinski.me/consulting/index.html`}
    >
      Github
    </HeaderLink>
    <HeaderLink
      target="_blank"
      href={`https://rwilinski.me/consulting/index.html`}
    >
      Twitter
    </HeaderLink>
    <HeaderLink
      target="_blank"
      href={`https://rwilinski.me/consulting/index.html`}
    >
      Instagram
    </HeaderLink>

    <HeaderLink
      target="_blank"
      href={`https://rwilinski.me/consulting/index.html`}
    >
      Consulting
    </HeaderLink>
  </div>
)

export default Footer
