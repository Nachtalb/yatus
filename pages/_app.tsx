import "../styles/globals.css";
import "../styles/Dashboard.css";

function MyApp({ Component, pageProps }) {
  function keyHandler(event: KeyboardEvent) {
    // Prevent F keys, ctrl and alt combinations
    if ((event.keyCode >= 112 && event.keyCode <= 136) || event.ctrlKey || event.altKey) {
      event.preventDefault()
    }
  }

  if (typeof window !== 'undefined') {
    // Disable right clicking
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener("keydown", keyHandler)
  }
  return <Component {...pageProps} />;
}

export default MyApp;
