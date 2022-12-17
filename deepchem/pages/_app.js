import Head from "next/head";

import MainLayout from "../layouts/main";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-tooltip/dist/react-tooltip.css";

import "../styles/models.css";
import "../styles/globals.css";
import "../styles/carousel.css";
import "../styles/scroll-nav.css"
import "../styles/tutorials.css";
import DefaultLayout from "../layouts/default"

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
