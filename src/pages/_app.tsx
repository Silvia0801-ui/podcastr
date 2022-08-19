import { Header } from '../components/Header'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Component {...pageProps} />
    {/* <Header /> */}
  </div>
  ) 
}

export default MyApp
