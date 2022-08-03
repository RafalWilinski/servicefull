import React from 'react'
import { THEME_COLOR } from '../theme'

const HeaderLink = ({children}) => <a style={{
  textDecoration: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  color: 'black',
  marginRight: '15px',
  transition: '0.2s color',
  "&:hover": {
    color: THEME_COLOR,
  }
}}>{children}</a>

const Footer = () => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      marginTop: '5em',
    }}
  >
    <HeaderLink
      target="_blank"
      rel="noreferrer noopener"
      href={`https://github.com/RafalWilinski`}
    >
      Github
    </HeaderLink>
    <HeaderLink
      target="_blank"
      rel="noreferrer noopener"
      href={`https://twitter.com/rafalwilinski`}
    >
      Twitter
    </HeaderLink>
    <HeaderLink
      target="_blank"
      rel="noreferrer noopener"
      href={`https://instagram.com/rwilinski`}
    >
      Instagram
    </HeaderLink>
  </div>
)

export default Footer
