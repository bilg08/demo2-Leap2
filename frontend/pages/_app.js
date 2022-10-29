import { LayOut } from '../components/index';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );

}

export default MyApp
