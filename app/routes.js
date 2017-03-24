import React from 'react';
import { Route, Switch, Miss } from 'react-router-dom';
import Home from './components/home';
import Info from './components/info';
import NoRoute from './components/noroute.jsx';

const routes = (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/info" component={ Info } />
    <Route component={ NoRoute } />
  </Switch>
);

export default routes;
