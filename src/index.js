import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
  </div>
  ,
  document.getElementById('root')
);
registerServiceWorker();