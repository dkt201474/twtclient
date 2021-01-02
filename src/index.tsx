import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { persistor, store } from './models/store';
import { __DEV__ } from './utils';

// if (__DEV__) {
//   const Reactotron = require('reactotron-react-js').default;
//   Reactotron.configure().connect();
// }

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);
