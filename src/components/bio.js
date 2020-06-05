import React from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
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
        I'm a{' '}
        <RoughNotation
          type="highlight"
          show={true}
          animationDelay={1000}
          color="rgba(45,200,50, 0.2)"
        >
          cloud-native software engineer
        </RoughNotation>
        , AWS consultant and founder of{' '}
        <ColorExternalLink
          style={{ fontWeight: '600' }}
          href="https://dynobase.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dynobase
        </ColorExternalLink>
        . After hours, I'm big supporter of{' '}
        <RoughNotation
          type="highlight"
          show={true}
          animationDelay={2000}
          color="rgba(45,200,50, 0.2)"
        >
          Serverless
        </RoughNotation>{' '}
        paradigm, wannabe generative artist, cyclist and calisthenics fan.
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
