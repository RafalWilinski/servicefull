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
    . Founder of
    <ColorExternalLink href="https://dynobase.dev">Dynobase</ColorExternalLink>
  </p>
)

export default Signature
