import { ReactElement } from 'react';
import { GlobalStyle } from '../styles/global';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  return (
    <>
      <GlobalStyle />
      <Header />
      {getLayout(<Component {...pageProps} />)}

    </>
  );
}