import "../styles/globals.css";
import _Head from "../components/Head/Head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <_Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
