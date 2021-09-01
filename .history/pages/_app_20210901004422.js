import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PropTypes from 'prop-types';
import "../fonts/styles.css";

import store, { persistor } from '../store/store';
import '../styles/styles.scss';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
