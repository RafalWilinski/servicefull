import React from 'react'
import Link from 'next/link'

const HeaderLink = ({ children, style, to }) => {
  return (
    <div
      className="header-link"
      style={style}
      // onMouseLeave={() => setHovering(false)}
      // onMouseOver={() => setHovering(true)}
    >
      <a href={to || '/'}>{children}</a>
    </div>
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
