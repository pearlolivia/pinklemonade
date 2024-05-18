import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.ts';

render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
