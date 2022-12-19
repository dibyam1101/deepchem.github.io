import Head from 'next/head';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'react-tooltip/dist/react-tooltip.css';

import MainLayout from '../layouts/main';
import DefaultLayout from '../layouts/default';

import '../styles/globals.css';
import '../styles/carousel.css';
import '../styles/scroll-nav.css';

export default function MyApp({Component, pageProps}) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <>
      <Head>
        <title>DeepChem</title>

        <link rel="shortcut icon" href="/deepchem.github.io/favicon.ico"/>
      </Head>
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </>
  );
}
