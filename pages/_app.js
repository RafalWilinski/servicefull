import "@code-hike/mdx/dist/index.css"
import "inter-ui/inter.css";
import '../src/styles/global.css'

import { Container } from '../src/theme'
import Footer from '../src/components/footer'
import Header from '../src/components/Header'

function MyApp({ Component, pageProps }) {
  return <Container>
  <Header />
  <Component {...pageProps} />
  <Footer />
</Container>
}

export default MyApp