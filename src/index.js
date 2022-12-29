import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader';
import './styles/css/index.css'
import App from './Components/App.jsx'
import registerServiceWorker from './registerServiceWorker'

WebFont.load({
  google: {
    families:
      ['Montserrat:100,300,500,700', 'Rokkitt:300,500', 'sans-serif'],
  }
});


render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('root')
)

registerServiceWorker()
