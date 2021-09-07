import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
