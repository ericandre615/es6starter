import React from 'react';
import { BrowserRouter as Router, Route, Miss } from 'react-router';
import Layout from './components/layout.jsx';
import Home from './components/home/home.jsx';
import NoRoute from './components/noroute.jsx';

export default (
  <Layout>
    <Route exact pattern='/' component={ Home } />
    <Miss component={ NoRoute } />
  </Layout>
);
