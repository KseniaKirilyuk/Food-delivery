import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import { restaurants } from './fixtures';
import App from './components/app';

// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App restaurants={restaurants} />
  </Provider>,
  document.getElementById('root')
);
