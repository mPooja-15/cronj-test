import React from 'react';
import {  Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Todo from './pages/todo/index';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" exact component={Todo} />
  </Switch>
));
