import '@code-hike/mdx/dist/index.css'
import 'inter-ui/inter.css'
import '../src/styles/global.css'

import { Container } from '../src/theme'
import Footer from '../src/components/footer'
import Header from '../src/components/Header'

function MyApp(props) {
  return (
    <Container>
      <Header />
      <props.Component {...props.pageProps} />
      <Footer />
    </Container>
  )
}

export default MyApp
