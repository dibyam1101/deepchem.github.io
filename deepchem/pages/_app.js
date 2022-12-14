import Head from "next/head";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Layout from "../layouts/layout";

import "../styles/models.css";
import "../styles/CustomCarousel.styles.css";
import "../styles/globals.css";

import "react-tooltip/dist/react-tooltip.css";

import "../styles/notebook-styles.css";

import "../components/Tutorials/ScrollNav.styles.css"

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
