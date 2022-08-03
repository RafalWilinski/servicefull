import React from 'react'
import Link from 'next/link'

const HeaderLink = ({ children, style, to }) => {
  return (
    <Link
      href={to || '/'}
      className="header-link"
      // onMouseLeave={() => setHovering(false)}
      // onMouseOver={() => setHovering(true)}
    >
      <a className="header-link" style={style}>{children}</a>
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
      <HeaderLink to="/consulting">Consulting</HeaderLink>
    </div>
  )
}

export default Header
