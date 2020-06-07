import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { RoughNotation } from 'react-rough-notation'

const HeaderLink = ({ children, style, to }) => {
  const [isHovering, setHovering] = useState(false)

  const L = () => (
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

  if (isHovering) {
    return (
      <RoughNotation
        type="underline"
        show={true}
        color="rgb(45,200,50)"
        strokeWidth={2}
        animationDuration={400}
      >
        <L />
      </RoughNotation>
    )
  }

  return <L />
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
      <HeaderLink to="/oss">OSS</HeaderLink>
      <HeaderLink to="/about">About</HeaderLink>
      <HeaderLink to="/consulting">Consulting</HeaderLink>
    </div>
  )
}

export default Header
