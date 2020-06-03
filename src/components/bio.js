import React from 'react'
import { ColorExternalLink } from '../theme'

function Bio() {
  return (
    <div>
      <h1
        style={{
          fontWeight: 800,
          fontSize: '3em',
          marginTop: '1em',
          letterSpacing: '-2.5px',
        }}
      >
        Hello, I'm Rafal
      </h1>
      <p style={{ marginBottom: '0.7em' }}>
        I'm a cloud-native software engineer, AWS consultant and founder of{' '}
        <ColorExternalLink
          style={{ fontWeight: '600' }}
          href="https://dynobase.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dynobase
        </ColorExternalLink>
        . After hours, I'm big supporter of Serverless paradigm, wannabe
        generative artist, cyclist and calisthenics fan.
      </p>
      <ColorExternalLink
        href="https://twitter.com/rafalwilinski"
        target="_blank"
        rel="noreferrer noopener"
      >
        @rafalwilinski on Twitter
      </ColorExternalLink>
    </div>
  )
}

export default Bio
