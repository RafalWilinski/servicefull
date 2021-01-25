import React from 'react'
import { ColorExternalLink } from '../theme'

const Signature = () => (
  <p style={{ fontSize: '0.85em' }}>
    Thanks for reading!
    <br />
    <br />
    -- Written by{' '}
    <ColorExternalLink href="https://twitter.com/RafalWilinski">
      Rafal Wilinski
    </ColorExternalLink>
    . Founder of{' '}
    <ColorExternalLink href="https://dynobase.dev">
      Dynobase - Professional GUI Client for DynamoDB
    </ColorExternalLink>
  </p>
)

export default Signature
