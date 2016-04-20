"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Router history={ browserHistory } > 
    { routes }
  </Router>,
  mountNode  
);
