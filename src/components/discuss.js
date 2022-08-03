import React from 'react'
import { ColorExternalLink } from '../theme'

const Discuss = ({ url }) => (
  <ColorExternalLink
    target="_blank"
    rel="noreferrer noopener"
    href={`https://twitter.com/search?q=https://servicefull.cloud${url}`}
  />
)

export default Discuss
