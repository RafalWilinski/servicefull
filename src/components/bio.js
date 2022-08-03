import React from 'react'
import Link from 'next/link'
import { Annotation } from '../components/Annotation'
import { ColorExternalLink, THEME_COLOR } from '../theme'

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
        <Annotation
          type="highlight"
          show={true}
          animationDelay={1000}
          color="rgba(45,200,50, 0.33)"
        >
          cloud-native software engineer
        </Annotation>
        , AWS consultant and founder of{' '}
        <ColorExternalLink
          style={{ fontWeight: '600' }}
          href="https://dynobase.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dynobase
        </ColorExternalLink>
        . After hours, I'm big supporter of{' '}
        <Annotation
          type="highlight"
          show={true}
          animationDelay={2000}
          color="rgba(45,200,50, 0.33)"
        >
          Serverless
        </Annotation>{' '}
        paradigm, wannabe generative artist, cyclist and calisthenics fan.
        <br style={{ marginTop: '20px' }} />
      </p>
      <p>
        I can help you{' '}
        <span
          style={{
            color: THEME_COLOR,
            cursor: 'pointer',
            textDecoration: 'underline',
            fontWeight: 600,
          }}
        >
          <a href="/consulting">move your business to the AWS cloud</a>
        </span>
        .
      </p>
      {/* <ColorExternalLink
        href="https://twitter.com/rafalwilinski"
        target="_blank"
        rel="noreferrer noopener"
      >
        @rafalwilinski on Twitter
      </ColorExternalLink> */}
    </div>
  )
}

export default Bio
