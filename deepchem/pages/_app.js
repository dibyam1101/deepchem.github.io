import Head from "next/head";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Layout from "../layouts/layout";

import "../styles/globals.css";
import "../styles/models.css";
import "../styles/CustomCarousel.styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DeepChem</title>

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
