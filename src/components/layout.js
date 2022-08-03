import React from 'react'
import { Container } from '../theme'
import Footer from './footer'
import Header from './Header'

function Layout({children}) {
    return (
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    )
}

export default Layout
