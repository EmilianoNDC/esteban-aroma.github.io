import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/react-modal-video/scss/modal-video.scss';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Esteban & Aroma - Invitación</title>
        <meta property="og:title" content="Esteban & Aroma - Invitación" />
        <meta property="og:description" content="Invitación a la Boda" />
        <meta property="og:image" content="/images/social-perfilpic.jpg" />
        {/* Otras etiquetas Open Graph que puedas necesitar */}
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
  )
}

export default MyApp;

