import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {LayOut} from '../components/index'
export default function App({ Component, pageProps }: AppProps) {
  return (
  <LayOut>
    <Component {...pageProps} />
  </LayOut>)
}
