import React from 'react'
import { Link } from 'gatsby'

const HeaderLink = ({ children, style, to }) => {
  return (
    <Link
      to={to}
      className="header-link"
      style={style}
      onMouseLeave={() => setHovering(false)}
      onMouseOver={() => setHovering(true)}
    >
      {children}
    </Link>
  )
}

const Header = () => {
  return (
    <div>
      <HeaderLink
        to="/"
        style={{
          width: '220px',
          marginLeft: '-280px',
          textAlign: 'right',
          marginRight: '60px',
          color: '#333',
          display: 'inline-block',
        }}
        className="big-only"
      >
        Rafal Wilinski
      </HeaderLink>
      <HeaderLink to="/blog">Blog</HeaderLink>
      {/* <HeaderLink to="/oss">OSS</HeaderLink> */}
      <HeaderLink to="/consulting">Consulting</HeaderLink>
    </div>
  )
}

export default Header
