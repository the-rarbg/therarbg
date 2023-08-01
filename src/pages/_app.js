import '../styles/global.scss';
import React from 'react';
import Layout from "../layouts/layout"
import { ToastContainer } from 'react-toastify';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
     <ToastContainer />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
