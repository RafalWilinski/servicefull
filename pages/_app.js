import '@code-hike/mdx/dist/index.css'
import 'inter-ui/inter.css'
import '../src/styles/global.css'

import { Container } from '../src/theme'
import Footer from '../src/components/footer'
import Header from '../src/components/Header'
import BlogPostTemplate from './blog/_app'

function MyApp(props) {
  console.log(props)

  if (
    router &&
    router.state &&
    router.pathname &&
    router.state.pathname.startsWith('/blog')
  ) {
    console.log(pageProps, Component)
    return <BlogPostTemplate {...pageProps} router={router} />
  }

  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  )
}

export default MyApp
