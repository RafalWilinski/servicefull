import React from 'react'
import styled from 'styled-components'
import { THEME_COLOR } from '../theme'

const HeaderLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  color: black;
  margin-right: 15px;
  transition: 0.2s color;
  &:hover {
    color: ${THEME_COLOR};
  }
`

const Footer = () => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      marginTop: '5em',
    }}
  >
    <HeaderLink target="_blank" href={`https://github.com/RafalWilinski`}>
      Github
    </HeaderLink>
    <HeaderLink target="_blank" href={`https://twitter.com/rafalwilinski`}>
      Twitter
    </HeaderLink>
    <HeaderLink target="_blank" href={`https://instagram.com/rwilinski`}>
      Instagram
    </HeaderLink>
    {/* <HeaderLink
      href={`/`}
      style={{
        marginLeft: '450px',
        textAlign: 'right',
        marginRight: '-220px',
        color: '#333',
      }}
      className="big-only"
    >
      © 2020 Rafal Wilinski
    </HeaderLink> */}
  </div>
)

export default Footer
