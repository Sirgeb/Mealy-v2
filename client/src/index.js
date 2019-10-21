import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';

import store, { persistor } from './redux/configure-store';

import App from './App';

// React Alert Configuration
const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <PersistGate persistor={persistor}>  
        <App />
      </PersistGate>
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
