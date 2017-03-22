"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes.jsx';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Router>
    { routes }
  </Router>,
  mountNode
);
