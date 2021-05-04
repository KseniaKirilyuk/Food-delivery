import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { restaurants } from './fixtures';
import App from './components/app';

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById('root')
);
