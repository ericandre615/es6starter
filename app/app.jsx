"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout';
import routes from './routes';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Layout>
      { routes }
    </Layout>
  </Router>,
  mountNode
);
