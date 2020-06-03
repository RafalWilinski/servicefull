import React from 'react'
import { Container } from '../theme'
import Footer from './footer'
import Header from './Header'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Layout
