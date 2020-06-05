import React from 'react'
import { ColorLink } from '../theme'

const PrevNextNav = ({ next, previous }) => (
  <div
    style={{
      padding: 0,
    }}
  >
    <div style={{ fontSize: '0.85em' }}>
      {previous && (
        <ColorLink to={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </ColorLink>
      )}
    </div>
    <div style={{ marginTop: '10px', fontSize: '0.85em' }}>
      {next && (
        <ColorLink to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </ColorLink>
      )}
    </div>
  </div>
)

export default PrevNextNav
