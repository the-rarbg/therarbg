import '../styles/global.scss';
import Layout from "../layouts/layout";
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
     <ToastContainer />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
