import React from 'react'
import styled from 'styled-components'
import { THEME_COLOR } from '../theme'

const HeaderLink = styled.a`
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
    <HeaderLink>Rafal Wilinski</HeaderLink>
    <HeaderLink>Blog</HeaderLink>
    <HeaderLink>OSS</HeaderLink>
    <HeaderLink>About</HeaderLink>
    <HeaderLink>Consulting</HeaderLink>
  </div>
)

export default Header
