import { Mint } from '@/pages';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const Routes = () => (
  <Switch>
    <Route exact path="/mint" component={Mint} />
    <Redirect to="/mint" />
  </Switch>
);
