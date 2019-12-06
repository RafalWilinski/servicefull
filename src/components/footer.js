import React from 'react'
import { ColorExternalLink } from '../theme'

const Footer = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <ColorExternalLink href={`/`}>Home</ColorExternalLink>
    <span style={{ margin: 20 }}>/</span>
    <ColorExternalLink
      target="_blank"
      href={`https://rwilinski.me/consulting/index.html`}
    >
      Consulting
    </ColorExternalLink>
    <span style={{ margin: 20 }}>/</span>
    <ColorExternalLink target="_blank" href={`https://rwilinski.me/`}>
      About Me
    </ColorExternalLink>
    <span style={{ margin: 20 }}>/</span>
    <ColorExternalLink href={`https://servicefull.cloud/rss.xml`}>
      RSS
    </ColorExternalLink>
  </div>
)

export default Footer
