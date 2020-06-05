import React from 'react'
import { ColorExternalLink } from '../theme'

const Signature = () => (
  <p style={{ fontSize: '0.85em', marginLeft: '0.5em' }}>
    -- Written by{' '}
    <ColorExternalLink href="https://twitter.com/RafalWilinski">
      Rafal Wilinski
    </ColorExternalLink>
    . Cloud-native AWS Consultant -{' '}
    <ColorExternalLink href="mailto:raf.wilinski@gmail.com">
      Hire me!
    </ColorExternalLink>
  </p>
)

export default Signature
