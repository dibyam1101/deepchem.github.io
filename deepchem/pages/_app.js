import Head from "next/head";

import Layout from "../layouts/layout";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-tooltip/dist/react-tooltip.css";

import "../styles/models.css";
import "../styles/globals.css";
import "../styles/carousel.css";
import "../styles/scroll-nav.css"
// import "../styles/notebook.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DeepChem</title>

        <link rel="shortcut icon" href="/deepchem.github.io/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
