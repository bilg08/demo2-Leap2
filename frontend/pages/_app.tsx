import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {LayOut} from '../components/index';
import {SelectedAdContextProvider} from '../context/index';
export default function App({ Component, pageProps }: AppProps) {
  return (
      <SelectedAdContextProvider>
        <LayOut>
            <Component {...pageProps} />
        </LayOut>
      </SelectedAdContextProvider>
  )
}
