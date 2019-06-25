import React from 'react'
import { ColorLink } from "../theme";

const PrevNextNav = ({ next, previous}) => (
  <ul
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0,
  }}
>
  <li>
    {
      previous &&
      <ColorLink to={previous.fields.slug} rel="prev">
        ← {previous.frontmatter.title}
      </ColorLink>
    }
  </li>
  <li>
    {
      next &&
      <ColorLink to={next.fields.slug} rel="next">
        {next.frontmatter.title} →
      </ColorLink>
    }
  </li>
</ul>
)

export default PrevNextNav;