import React from 'react';
import Layout from "../layouts/layout"
import { ToastContainer } from 'react-toastify';
 import '../styles/global.scss';
import {} from '../styles/nprogress.css'


const MyApp = ({ Component, pageProps }) => (
  <Layout>
     <ToastContainer />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
