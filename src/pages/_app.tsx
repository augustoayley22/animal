import '@/styles/globals.css';
import type { AppProps } from 'next/app'; // Importa o tipo AppProps

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
