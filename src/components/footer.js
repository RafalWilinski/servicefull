import React from 'react'
import { THEME_COLOR } from '../theme'

const FooterLink = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    style={{
      textDecoration: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      color: 'black',
      marginRight: '15px',
      transition: '0.2s color',
      '&:hover': {
        color: THEME_COLOR,
      },
    }}
  >
    {children}
  </a>
)

const Footer = () => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      marginTop: '5em',
    }}
  >
    <FooterLink
      target="_blank"
      rel="noreferrer noopener"
      href={`https://github.com/RafalWilinski`}
    >
      Github
    </FooterLink>
    <FooterLink
      target="_blank"
      rel="noreferrer noopener"
      href={`https://twitter.com/rafalwilinski`}
    >
      Twitter
    </FooterLink>
    <FooterLink
      target="_blank"
      rel="noreferrer noopener"
      href={`https://instagram.com/rwilinski`}
    >
      Instagram
    </FooterLink>
  </div>
)

export default Footer
