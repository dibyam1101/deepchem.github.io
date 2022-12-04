import "../styles/globals.css";
import "../styles/models.css";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
