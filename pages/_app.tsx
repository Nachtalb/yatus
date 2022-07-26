import "../styles/globals.css";
import "../styles/Dashboard.css";

function MyApp({ Component, pageProps }) {
  if (process.browser) {
    // Disable right clicking
    document.addEventListener('contextmenu', event => event.preventDefault());
  }
  return <Component {...pageProps} />;
}

export default MyApp;
