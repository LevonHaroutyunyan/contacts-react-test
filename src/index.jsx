import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Provider from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'store/configureStore';
import 'antd/dist/antd.css';
import 'styles/App.scss';

ReactDOM.render(
    <Provider>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById('root'),
);
