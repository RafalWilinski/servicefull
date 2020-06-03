import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { THEME_COLOR } from '../theme'

const HeaderLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  color: black;
  margin-right: 15px;
  transition: 0.2s color;
  &:hover {
    color: ${THEME_COLOR};
  }
`

const Header = () => (
  <div>
    <HeaderLink
      to="/"
      style={{
        width: '220px',
        marginLeft: '-280px',
        textAlign: 'right',
        marginRight: '60px',
        color: '#333',
      }}
      className="big-only"
    >
      Rafal Wilinski
    </HeaderLink>
    <HeaderLink to="/blog">Blog</HeaderLink>
    <HeaderLink to="/oss">OSS</HeaderLink>
    <HeaderLink to="/about">About</HeaderLink>
    <HeaderLink to="/consulting">Consulting</HeaderLink>
  </div>
)

export default Header
